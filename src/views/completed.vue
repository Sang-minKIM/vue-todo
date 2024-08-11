<template>
    <div id="completed">
        <h1>com</h1>
        <li v-for="todo in completedTodos" :key="todo.id" @click="toggleTodo(todo.id)">
            <input :id="todo.id" type="radio" :checked="true" /><span>{{ todo.msg }}</span>
        </li>
    </div>
</template>

<script>
export default {
    name: "CompletedView",
    computed: {
        completedTodos() {
            return this.$store.state.todos.filter((todo) => this.$store.state.completed.includes(todo.id));
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
