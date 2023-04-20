<template>
  <div class="filters">
    <img class="img-filter" src="@/assets/filter-circle.svg">
    <input class="input-service" type="text" placeholder="Сервис">
    <input class="input-count" type="text" placeholder="Цена">
    <input class="input-date" type="text" placeholder="Дата">
    <img class="img-btn" src="@/assets/badge-check.svg">
    <img class="img-btn" src="@/assets/cross-circle.svg">
  </div>
</template>

<script>
export default {
  name: "SubFilters"
}
</script>

<style scoped>

.filters {
  margin-top: 15px  ;
  display: flex;
  align-items: center; /* выравнивание элементов по вертикали */
}

.img-filter {
  height: 40px; /* задаем высоту для изображения */
  margin: 0 10px; /* добавляем небольшой отступ между изображением и input */
}

.img-btn{
  height: 25px;
  margin: 0 5px;
  transition: all .3s ease;
  opacity: 0.8;
}

.img-btn:hover{
  cursor: pointer;
  opacity: 1;
  transition: all .3s ease;
}

input {
  padding: 8px; /* добавляем отступы внутри input для улучшения внешнего вида */
  border: 3px solid #495464; /* задаем рамку для input */
  border-radius: 13px; /* добавляем скругления углов */
  font-size: 16px; /* задаем размер шрифта */
  outline: none;
}

.input-service{
  width: 220px;
}

.input-count,
.input-date{
  width: 110px;
}

.input-count{
  margin: 0 65px;
}

.input-date{
  margin-right: 20px;
}
</style>