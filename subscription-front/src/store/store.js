import {createStore} from "vuex";
import {item} from "@/store/items/item";
import {users} from "@/store/user";

export default createStore({
    modules:{
        items: item,
        user: users,
    }
})