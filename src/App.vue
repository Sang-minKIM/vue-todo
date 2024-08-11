<template>
    <div id="app">
        <h1>todo</h1>
        <input type="text" @keyup.enter="submit" v-model.lazy="msg" />
        <ul>
            <router-view></router-view>
        </ul>
        <nav>
            <router-link to="/">todos</router-link> | <router-link to="/completed">completed</router-link> |
            <router-link to="/active">active</router-link>
        </nav>
    </div>
</template>

<script>
let id = 0;
export default {
    name: "App",
    data() {
        return {
            msg: "",
        };
    },
    computed: {
        todos() {
            return this.$store.state.todos;
        },
        completed() {
            return this.$store.state.completed;
        },
        active() {
            return this.$store.state.active;
        },
    },
    methods: {
        submit() {
            id++;
            this.$store.commit("addTodo", {
                msg: this.msg,
                id,
            });
            this.$store.commit("addActive", id);
            this.msg = "";
        },
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
