import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
        completed: [],
        active: [],
    },
    mutations: {
        addTodo(state, element) {
            state.todos.push(element);
        },
        addActive(state, id) {
            state.active.push(id);
        },
        toggleTodo(state, id) {
            if (state.completed.includes(id)) {
                state.completed.splice(state.completed.indexOf(id), 1);
                state.active.push(id);
            } else {
                state.completed.push(id);
                state.active.splice(state.active.indexOf(id), 1);
            }
        },
    },
    actions: {},
});
