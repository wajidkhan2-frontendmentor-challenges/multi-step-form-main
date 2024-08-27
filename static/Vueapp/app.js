import { createApp } from './vue@3/vue.esm-browser.js'

createApp({
    data() {
        return {
            // views: {
            //     step_1: "step-1",
            //     step_2: "step-2",
            //     step_3: "step-3",
            //     step_4: "step-4"
            // },
            current_step: "step-1",

            previous_active_link: ""
        }
    },
    // created() {
        
    // },
    methods: {
        Change_step(event) {
            
            let tag = event.target.closest("a.link")
            console.log(tag)
            if (this.previous_active_link != "")
            {
                this.previous_active_link.dataset.active = false;
            }
            tag.dataset.active = true;
            this.current_step = tag.hash.slice(1);
            this.previous_active_link = tag;
        }
    },
    mounted() {
        let links = document.querySelectorAll("a.link");
        console.log(links);
        this.previous_active_link = links[0]
    }

}).mount('#app')

