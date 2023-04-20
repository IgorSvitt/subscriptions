<template>
  <div class="filters-name">
    <div class="filter-service">
      Сервис:
    </div>
    <div class="filter-count">
      Цена <span class="filter-count-currency">(RUB/месяц):</span>
    </div>
    <div class="filter-date">
      Дней до оплаты:
    </div>
  </div>
  <hr>
  <sub-filters/>
  <sub-items/>
</template>

<script>
import SubFilters from "@/components/subscription/SubFilters";
import SubItems from "@/components/subscription/SubItems";

export default {
  name: "SubMain",
  components: {SubItems, SubFilters}
}
</script>

<style scoped>
.filters-name{
  margin-left: 60px;
  display: flex;
  margin-top: 60px;
  font-size: 20px;
  align-items: flex-end;
}

.filter-service{
  width: 220px;
}

.filter-date,
.filter-count{
  width: 110px;
  text-align: center;
}

.filter-count{
  margin: 0 65px;
}

.filter-count-currency{
  font-size: 18px;
}

hr{
  margin-top: 10px;
  color: #DADDD8;
  border: 2px solid #DADDD8;
  border-radius: 40px;
}

</style>