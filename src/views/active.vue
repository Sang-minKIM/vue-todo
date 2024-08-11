<template>
    <div>
        <h1>acitve</h1>
        <li v-for="todo in activeTodos" :key="todo.id" @click="toggleTodo(todo.id)">
            <input :id="todo.id" type="radio" /><span>{{ todo.msg }}</span>
        </li>
    </div>
</template>

<script>
export default {
    name: "ActiveView",
    data() {
        return {
            msg: "",
        };
    },
    computed: {
        activeTodos() {
            return this.$store.state.todos.filter((todo) => this.$store.state.active.includes(todo.id));
        },
    },
    methods: {
        toggleTodo(id) {
            this.$store.commit("toggleTodo", id);
        },
    },
};
</script>
