import { createApp } from './vue@3/vue.esm-browser.js'

createApp({
    data() {
        return {
            todo: 'todo'
        }
    },
    created() {
        let todo = 'todo';
    },
    methods: {
        to_do() {
            let todo = 'todo';
        }
    },

    mounted() {
        let todo = 'todo';
    }

}).mount('#app')

