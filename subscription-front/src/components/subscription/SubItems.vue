<template>
<div class="items">
  <div v-for="(item, index) in items" :key="index" class="item">
    <sub-item :item="item" />
  </div>
</div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import SubItem from "@/components/subscription/SubItem";

export default {
  name: "SubItems",
  components: {SubItem},
  setup(){
    const store = useStore();

    const items = computed(() => store.state.items.items);

    return{
      items
    }
  }
}
</script>

<style scoped>

.items{
  margin-top: 15px;
}
.item{
  height: 75px;
}

</style>