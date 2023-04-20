<template>
  <title-user :nameUser="user.name"/>
  <user-income :income="user.income"/>
  <hr>
  <user-sub :subscription="sub"/>
  <user-circle-bar :percent="sub / (user.income / 100)"/>
</template>

<script>
import TitleUser from "@/components/account/TitleUser";
import UserIncome from "@/components/account/UserIncome";
import UserSub from "@/components/account/UserSub";
import UserCircleBar from "@/components/account/UserCircleBar";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "LeftBlock",
  components: {UserCircleBar, UserSub, UserIncome, TitleUser},
  setup() {
    const store = useStore();
    const user = store.state.user.user;
    const sub = computed(() => store.getters["items/totalCount"])

    return {
      user,
      sub
    }
  }
}
</script>

<style scoped>

hr {
  color: #DADDD8;
  border: 2px solid #DADDD8;
  border-radius: 40px;
  width: 60%;
  margin: 20px 20%;
}
</style>