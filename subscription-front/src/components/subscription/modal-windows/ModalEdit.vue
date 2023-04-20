<template>
  <div class="modal-edit-overlay">
    <div class="modal-edit">
      <div class="modal-edit-title">Редактирование</div>
      <div class="validation-empty" v-show="isFormEmpty">
        Заполните все поля
      </div>
      <form>
        <div class="form-group">
          <label for="name">Сервис:</label>
          <input type="text" id="name" v-model="itemName" placeholder="Название сервиса">
        </div>
        <div class="form-group">
          <div class="validation-empty" v-show="isCountTrue">
            Только цифры
          </div>
          <label for="count">Цена:</label>
          <input type="text" id="count" v-model="itemCount" placeholder="Стоимость подписки">
        </div>
        <div class="form-group">
          <label for="date">Дата:</label>
          <input type="text" id="count" v-model="itemDate" placeholder="День следущего платежа (1-31)"
                 readonly="readonly" @click="showCalendar = true">
          <custom-calendar v-show="showCalendar" @close="changeDate" :item-day="itemDate"/>
        </div>
        <div class="form-group">
          <color-picker v-bind="color" @input="onInput"/>
        </div>
        <div class="modal-buttons">
          <button type="button" class="btn" @click="closeModal()">Отмена</button>
          <button type="button" class="btn btn-primary" @click="saveItem()">Сохранить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {ref, watch} from "vue";
import ColorPicker from '@radial-color-picker/vue-color-picker';
import '@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css';
import {useStore} from "vuex";
import CustomCalendar from "@/components/subscription/modal-windows/CustomCalendar";

export default {
  name: "ModalEdit",
  components: {CustomCalendar, ColorPicker},
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  setup(props, {emit}) {

    const store = useStore();

    const itemName = ref(props.item.name);
    const itemCount = ref(props.item.count);
    const itemDate = ref(props.item.date);
    const itemColor = ref(props.item.color);
    const itemNumberCard = ref(props.item.numberCard);
    const showCalendar = ref(false);

    function hexToHsv(hex) {
      let r = parseInt(hex.slice(0, 2), 16) / 255;
      let g = parseInt(hex.slice(2, 4), 16) / 255;
      let b = parseInt(hex.slice(4, 6), 16) / 255;

      let cmin = Math.min(r, g, b);
      let cmax = Math.max(r, g, b);
      let delta = cmax - cmin;

      let hue = 0;
      if (delta == 0) {
        hue = 0;
      } else if (cmax == r) {
        hue = ((g - b) / delta) % 6;
      } else if (cmax == g) {
        hue = (b - r) / delta + 2;
      } else {
        hue = (r - g) / delta + 4;
      }
      hue = Math.round(hue * 60);
      if (hue < 0) {
        hue += 360;
      }
      return hue;
    }

    function hslToHex(h, s = 70, l = 50) {
      l /= 100;
      const a = s * Math.min(l, 1 - l) / 100;
      const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
      };
      return `#${f(0)}${f(8)}${f(4)}`;
    }


    const color = ref({
      hue: hexToHsv(itemColor.value.substring(1)),
      saturation: 100,
      luminosity: 50,
      alpha: 1,
    });

    const changeDate = (day) => {
      showCalendar.value = false
      itemDate.value = day
    }

    function onInput(hue) {
      color.value.hue = hue;
    }


    const isFormEmpty = ref(false)
    const isCountTrue = ref(false)

    function isNumeric(str) {
      return !isNaN(parseInt(str)) && /^\d+$/.test(str);
    }

    const isFormValid = () => {
      if (!itemName.value || !itemCount.value || !itemDate.value) {
        isFormEmpty.value = true
        return false;
      }
      isFormEmpty.value = false

      if (!isNumeric(itemCount.value)) {
        isCountTrue.value = true
        return false
      }
      isCountTrue.value = false

      if (!isNumeric(itemDate.value)) {
        isCountTrue.value = true
        return false
      }
      isCountTrue.value = false

      return true;
    };

    function closeModal() {
      itemName.value = props.item.name
      itemCount.value = props.item.count
      itemDate.value = props.item.date
      color.value.hue = hexToHsv(itemColor.value.substring(1))
      isFormEmpty.value = false
      isCountTrue.value = false
      emit("close");
    }

    function saveItem() {
      const editedItem = {
        name: itemName.value,
        count: itemCount.value,
        date: itemDate.value,
        color: hslToHex(color.value.hue),
        numberCard: itemNumberCard.value
      };

      if (isFormValid()) {
        store.commit("items/setName", editedItem)
        store.commit("items/setPrice", editedItem)
        store.commit("items/setColor", editedItem)
        store.commit("items/setDate", editedItem)
        emit("close")
      }
    }


    watch(
        () => props.item,
        (newValue) => {
          itemName.value = newValue ? newValue.name : "";
          itemCount.value = newValue ? newValue.count : "";
          itemDate.value = newValue ? newValue.date : "";
          itemColor.value = newValue ? newValue.color : "";
          itemNumberCard.value = newValue ? newValue.numberCard : "";
          color.value.hue = hexToHsv(itemColor.value.substring(1))
        }
    );

    return {
      itemName,
      itemCount,
      itemDate,
      itemColor,
      closeModal,
      saveItem,
      color,
      onInput,
      showCalendar,
      isCountTrue,
      isFormEmpty,
      changeDate
    };
  },
};
</script>

<style scoped>
/* Overlay */
.modal-edit-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: fade-in;
  animation-duration: .3s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Modal */
.modal-edit {
  background-color: #fff;
  border-radius: 13px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  padding: 20px;
  animation-name: slide-in;
  animation-duration: 0.3s;
}

@keyframes slide-in {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-edit-title {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
}

/* Form Group */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

/* Input */

input {
  padding: 6px; /* добавляем отступы внутри input для улучшения внешнего вида */
  border: 3px solid #495464; /* задаем рамку для input */
  border-radius: 13px; /* добавляем скругления углов */
  font-size: 16px; /* задаем размер шрифта */
  outline: none;
}

/* Buttons */
.modal-buttons {
  display: flex;
  justify-content: flex-end;
  animation-name: fade-in;
  animation-duration: 0.3s;
}

.btn {
  border-radius: 10px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
}

.btn-primary {
  background-color: #2f80ed;
  color: #fff;
}

.btn:hover {
  opacity: 0.8;
}

.validation-empty {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
  color: #ff0000;
}
</style>