import Vue from "vue";
import VueRouter from "vue-router";
import Todos from "../views/todos.vue";
import Completed from "../views/completed.vue";
import Active from "../views/active.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Todo",
        component: Todos,
    },
    {
        path: "/completed",
        name: "Completed",
        component: Completed,
    },
    {
        path: "/active",
        name: "Active",
        component: Active,
    },
];

export default new VueRouter({
    // mode: "history",
    routes,
});
