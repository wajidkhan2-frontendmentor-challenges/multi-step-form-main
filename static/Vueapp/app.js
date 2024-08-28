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

            form_fields: {
                step_1: { 
                    user_name: '',
                    user_name_error: 'false',

                    email_eddress: '',
                    email_eddress_error: 'false',

                    phone_number: '',
                    phone_number_error: 'false',
                }
            }
        }
    },
    // created() {
        
    // },
    methods: {
        switch_stp_1() {
            this.$refs.stp_1_lnk.dataset.active = "true";
            this.$refs.stp_2_lnk.dataset.active = "false";
            this.$refs.stp_3_lnk.dataset.active = "false";
            this.$refs.stp_4_lnk.dataset.active = "false";

            this.current_step = "step-1";
        },
        switch_stp_2() {
            stp_1_good = this.check_step_1()
            if(stp_1_good == true)
            {
                this.$refs.stp_1_lnk.dataset.active = "false";
                this.$refs.stp_2_lnk.dataset.active = "true";
                this.$refs.stp_3_lnk.dataset.active = "false";
                this.$refs.stp_4_lnk.dataset.active = "false";
    
                this.current_step = "step-2";
            }
        },
        switch_stp_3() {
            this.$refs.stp_1_lnk.dataset.active = "false";
            this.$refs.stp_2_lnk.dataset.active = "false";
            this.$refs.stp_3_lnk.dataset.active = "true";
            this.$refs.stp_4_lnk.dataset.active = "false";

            this.current_step = "step-3";
        },
        switch_stp_4() {
            this.$refs.stp_1_lnk.dataset.active = "false";
            this.$refs.stp_2_lnk.dataset.active = "false";
            this.$refs.stp_3_lnk.dataset.active = "false";
            this.$refs.stp_4_lnk.dataset.active = "true";

            this.current_step = "step-4";
        },

        check_step_1() {

            this.form_fields.step_1.user_name_error = "false";
            if (this.form_fields.step_1.user_name == '')
            {
                this.form_fields.step_1.user_name_error = "true";
            }
            return false;
        }
    },

    mounted() {

    }

}).mount('#app')

