<template>
  <div class="modal">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-container">
      <div class="modal-header">
        <h2>Выбрать дату</h2>
      </div>
      <div class="modal-body">
        <div class="calendar">
          <div class="calendar-body">
            <div v-for="day in days" :key="day" :class="{ 'calendar-day': true, 'selected': day === selectedDay }" @click="selectDay(day)">
              {{ day }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, watch} from 'vue';

export default {
  props:{
    itemDay:{
      type: Number
    }
  },
  setup(props, {emit}) {
    const selectedDay = ref(props.itemDay);

    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    const selectDay = (day) => {
      selectedDay.value = day;
      closeModal()
    };

    const closeModal = () => {
      emit("close", selectedDay.value);
    };

    watch(() => props.itemDay, (newValue) => {
      selectedDay.value = newValue;
    });

    return {
      selectedDay,
      days,
      selectDay,
      closeModal,
    };
  },
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  animation-name: fade-in;
  animation-duration: .3s;
  background: rgba(0,0,0,0.4);
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-container {
  background-color: white;
  width: 400px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 20;
  border-radius: 13px;
  border: 3px solid #495464;
}

.modal-header {
  padding: 16px;
  border-bottom: 1px solid #eee;
}

.modal-body {
  padding: 16px;
}

.calendar {
  display: flex;
  flex-direction: column;
}

.calendar-body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 8px;
}

.calendar-day {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

.calendar-day:hover {
  background-color: #eee;
  transition: all .2s ease;
  color: #495464;
}

.selected {
  background-color: #007bff;
  color: white;
  transition: all .2s ease;
}
</style>