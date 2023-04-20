<template>
  <div class="bar-container">
    <div class="income-bar">
      <div class="income-bar-title">
        Траты на подписки в процентах
      </div>
      <circle-progress
          :percent="percent"
          :viewport="true"
          :show-percent="true"
          :fill-color="'#2f80ed'"
          class="current-counter"
      />
    </div>
  </div>

</template>

<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

export default {
  name: "UserCircleBar",
  components: {CircleProgress},
  props:{
    percent:{
      type: Number
    }
  }
}
</script>

<style scoped>
.bar-container{
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.income-bar{
  padding: 5px;
  text-align: center;
  background: #FDFDFF;
  border-radius: 13px;
  border: 3px solid #BBBFCA;
  width: 50%;
}

.income-bar-title{
  font-size: 20px;
  margin-bottom: 40px;
}

.current-counter{
  font-size: 40px;
  font-weight: 500;
  margin: 10px auto;
}
</style>