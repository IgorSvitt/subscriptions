<template>
  <div class="title">
    Мои подписки
    <div class="button-container">
      <button class="btn-add" @click="showAddModal = true">
        <img src="@/assets/add.svg" >
        Добавить
      </button>
    </div>
  </div>
  <modal-add v-show="showAddModal" @close="showAddModal = false"/>
</template>

<script>
import {ref} from "vue";
import ModalAdd from "@/components/subscription/modal-windows/ModalAdd";

export default {
  name: "SubTitle",
  components: {ModalAdd},
  setup(){
    const showAddModal = ref(false)

    return{
      showAddModal
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 32px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
}

.button-container {
  display: flex;
  align-items: center;
}

.btn-add {
  display: flex;
  align-items: center;
  padding: 10px;
  background: #2f80ed;
  border-radius: 13px;
  border: none;
  transition: all .3s ease;
  color: #fff;
}

.btn-add:hover {
  cursor: pointer;
  transition: all .3s ease;
  opacity: 0.8;
}

.btn-add img {
  margin-right: 10px;
}

</style>