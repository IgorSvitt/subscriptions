<template>
  <div class="modal-edit-overlay">
    <div class="modal-edit">
      <div class="modal-edit-title">Удалить <span>{{item.name}}</span> из ваших подписок?</div>
      <div class="modal-buttons">
        <button type="button" class="btn btn-primary" @click="deleteItem()">Удалить</button>
        <button type="button" class="btn" @click="closeModal()">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: "ModalDelete",
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  setup(props, {emit}) {

    const store = useStore();

    function closeModal() {
      emit("close");
    }

    function deleteItem() {
      store.commit("items/deleteItem", props.item.numberCard)
      closeModal()
    }

    return {
      closeModal,
      deleteItem
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
  font-weight: 400;
}

.modal-edit-title span{
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
  background-color: #ff0000;
  color: #fff;
}

.btn:hover {
  opacity: 0.7;
}
</style>