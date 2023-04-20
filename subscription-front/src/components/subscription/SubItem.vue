<template>
<div class="item-info" @mouseover="editMode = true" @mouseleave="editMode = false">
  <div class="img-item" :style="{color: item.color, background: hexToRgba(item.color)}">
    {{item.name[0]}}
  </div>
  <div class="item-name">
    {{item.name}}
  </div>
  <div class="item-count">
    {{item.count}} &#8381;
  </div>
  <div class="item-date">
    {{item.date}} д.
  </div>
  <div v-show="editMode">
    <img src="@/assets/pencil.svg" class="img-edit" @click="showModalEdit = true">
    <img src="@/assets/trash.svg" class="img-edit" @click="showModalDelete = true">
  </div>

  <modal-edit v-show="showModalEdit" @close="showModalEdit = false" :item="item" />
  <modal-delete v-show="showModalDelete" @close="showModalDelete = false" :item="item"/>
</div>
</template>

<script>
import {ref} from "vue";
import ModalEdit from "@/components/subscription/modal-windows/ModalEdit";
import ModalDelete from "@/components/subscription/modal-windows/ModalDelete";

export default {
  name: "SubItem",
  components: {ModalDelete, ModalEdit},
  props:{
    item:{
      type: Object
    }
  },
  setup(){
    function hexToRgba(hex) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, 38%)`;
    }

    const showModalEdit = ref(false)
    const showModalDelete = ref(false)

    const editMode = ref(false);

    return{
      hexToRgba,
      editMode,
      showModalEdit,
      showModalDelete
    }
  }

}
</script>

<style scoped>
.item-info{
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 20px;
  transition: all .3s ease;
}

.item-info:hover{
  background: #FDFDFF;
  border-radius: 13px;
  transition: all .3s ease;
}

.img-item{
  font-size: 40px;
  font-weight: 500;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 10px;
  margin: 0 5px;
}

.item-name{
  font-weight: 300;
  width: 220px;
}

.item-count{
  margin: 0 65px;
}

.item-count,
.item-date{
  width: 110px;
  text-align: center;
}

.item-date{
  margin-right: 20px;
}

.img-edit{
  margin: 0 5px;
  width: 20px;
  opacity: 0.5;
  transition: all .3s ease;
}

.img-edit:hover{
  cursor: pointer;
  opacity: 1;
  transition: all .3s ease;
}


</style>