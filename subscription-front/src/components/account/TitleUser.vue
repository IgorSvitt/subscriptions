<template>
<div class="title-user">
  <img src="@/assets/dolphin.png" class="img-user">
  <div class="user-name">
    {{nameUser}}
  </div>
  <img src="@/assets/settings.svg" class="img-setting">
</div>
</template>

<script>
export default {
  name: "TitleUser",
  props:{
    nameUser:{
      type: String
    }
  }
}
</script>

<style scoped>
.title-user{
  display: flex;
  align-items: center;
  width: 100%;
}

.img-user{
  width: 70px;
  margin-right: 20px;
}

.user-name{
  font-size: 32px;
  font-weight: 400;
}

.img-setting{
  margin-left: auto;
}
</style>