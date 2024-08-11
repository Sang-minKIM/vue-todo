<template>
    <div id="todos">
        <h1>todo</h1>
        <li v-for="todo in todos" :key="todo.id" @click="toggleTodo(todo.id)">
            <input :id="todo.id" type="radio" :checked="completed.includes(todo.id)" /><span>{{ todo.msg }}</span>
        </li>
    </div>
</template>

<script>
export default {
    name: "TodosView",
    computed: {
        todos() {
            return this.$store.state.todos;
        },
        completed() {
            return this.$store.state.completed;
        },
    },
    methods: {
        toggleTodo(id) {
            this.$store.commit("toggleTodo", id);
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
