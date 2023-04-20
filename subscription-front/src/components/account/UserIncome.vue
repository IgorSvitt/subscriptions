<template>
<div class="income">
  <div class="income-title">
    Ваш заработок
  </div>
  <div class="income-count">
    {{income}}
  </div>
  <div class="income-currency">
    RUB/месяц
  </div>
</div>
</template>

<script>
export default {
  name: "UserIncome",
  props:{
    income:{
      type: Number
    }
  }
}
</script>

<style scoped>
.income{
  display: block;
  margin-top: 45px;
  font-size: 20px;
  justify-content: center;
}

.income-count,
.income-currency,
.income-title{
  text-align: center;
}

.income-count{
  margin: 10px 0;
  font-size: 32px;
  font-weight: 500;
}

.income-currency{
  font-size: 16px;
}

.img-edit{
  margin-left: 5px;
}
</style>