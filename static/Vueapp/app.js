import { createApp } from './vue@3/vue.esm-browser.js'

createApp({
    data() {
        return {
            todo: 'todo',
            views_data:{
                selected_view: "stp_1",
                key: 1,

                views: {
                    stp_1: { name: "stp_1", key:1, active: true, error: false } ,
                    stp_2: { name: "stp_2", key:2, active: false, error: true } ,
                    stp_3: { name: "stp_3", key:3, active: false, error: true } ,
                    stp_4: { name: "stp_4", key:4, active: false, error: true } ,
                },

                checkers: '',
            },

        }
    },
    created() {
        let todo = 'todo';
    },
    computed: {

    },
    methods: {

        switch_view(event){
            let Element = event.target.closest("a.link");

            console.log(Element)
            if (Element.dataset.stpkey > this.views_data.key){
                this.views_data.checkers[this.views_data.selected_view]();
                if (this.views_data.views[this.views_data.selected_view].error == false) {
                    this.views_data.views[this.views_data.selected_view].active = false ;
                    this.views_data.views[Element.dataset.stpname].active = true;
                    this.views_data.selected_view = Element.dataset.stpname;
                    this.views_data.key = Element.dataset.stpkey;
                } else {
                    alert("way Closed")
                }

            } else {
                this.views_data.views[this.views_data.selected_view].active = false ;
                this.views_data.views[Element.dataset.stpname].active = true;
                this.views_data.selected_view = Element.dataset.stpname;
                this.views_data.key = Element.dataset.stpkey;
            }
            // this.views_data.views[this.views_data.selected_view].active = false ;
            // this.views_data.views[Element.dataset.stpname].active = true;
            // this.views_data.selected_view = Element.dataset.stpname;
            // this.views_data.key = Element.dataset.stpkey;
        },

        // todo
        check_stp_1() { console.log("check_stp_1"); this.views_data.views.stp_1.error = false },
        check_stp_2() { console.log("check_stp_2"); this.views_data.views.stp_2.error = false },
        check_stp_3() { console.log("check_stp_3"); this.views_data.views.stp_3.error = false },
        check_stp_4() { console.log("check_stp_4"); this.views_data.views.stp_4.error = false }

    },

    mounted() {
        this.views_data.checkers = {
            stp_1: this.check_stp_1,
            stp_2: this.check_stp_2,
            stp_3: this.check_stp_3,
            stp_4: this.check_stp_4,
        }
        this.views_data.checkers["stp_2"]();
    }

}).mount('#app')

















            // step_2: {
            //     yearly: false,
            //     selected: "Arcade",

            //     Arcade: {
            //         name: "Arcade",
            //         s_price: "9/mo",
                    
            //         per_month: {
            //             price: 9,
            //             time: "mo"
            //         },
            //         per_year: {
            //             price: 90,
            //             time: "yr"
            //         }
            //     },

            //     Advanced: {
            //         name: "Advanced",
            //         s_price: "12/mo",
                    
            //         per_month: {
            //             price: 12,
            //             time: "mo"
            //         },
            //         per_year: {
            //             price: 120,
            //             time: "yr"
            //         }
            //     },

            //     Pro: {
            //         name: "pro",
            //         s_price: "15/mo",
                    
            //         per_month: {
            //             price: 15,
            //             time: "mo"
            //         },
            //         per_year: {
            //             price: 150,
            //             time: "yr"
            //         }
            //     }
            // }


















// createApp({
//     data() {
//         return {
//             todo: 'todo',
//             section: { s1: false, s2: false, s3: false, s4: false },
//             formSection: '1',
//             // stplink: '1',
//             formfields_1: {
//                 user_name: '',
//                 user_name_error: false,

//                 email_eddress: '',
//                 email_eddress_error: false,

//                 phone_number: '',
//                 phone_number_error: false,
//             }
//         }
//     },
//     created() {
//         let todo = 'todo';
//     },
//     methods: {
//         // switch_stp(e) {
//         // <a href="#step-1" class="link" data-active="true" data-stplink="1" ref="stp_1_lnk" v-on:click="switch_stp_1"> 
//         //     let tag = e.target.closest("a.link[data-stplink]")
//         //     this.$refs[`stp_${this.stplink}_lnk`].dataset.active = false;
//         //     tag.dataset.active = true;
//         //     this.stplink = tag.dataset.stplink;
//         // }

//         switch_stp_1() {
//             this.$refs.stp_1_lnk.dataset.active = "true";
//             this.$refs.stp_2_lnk.dataset.active = "false";
//             this.$refs.stp_3_lnk.dataset.active = "false";
//             this.$refs.stp_4_lnk.dataset.active = "false";
//             this.formSection = '1'
//         },
//         switch_stp_2() {
//             this.check_formfields_1()
//             if (this.section.s1 == true)
//             {
//                 this.$refs.stp_1_lnk.dataset.active = "false";
//                 this.$refs.stp_2_lnk.dataset.active = "true";
//                 this.$refs.stp_3_lnk.dataset.active = "false";
//                 this.$refs.stp_4_lnk.dataset.active = "false";
//                 this.formSection = '2'
//             }
//         },
//         switch_stp_3() {
//             if (this.section.s1 == true && this.section.s2 == true) {
//                 this.$refs.stp_1_lnk.dataset.active = "false";
//                 this.$refs.stp_2_lnk.dataset.active = "false";
//                 this.$refs.stp_3_lnk.dataset.active = "true";
//                 this.$refs.stp_4_lnk.dataset.active = "false";
//                 this.formSection = '3'
//             }
//         },
//         switch_stp_4() {
//             this.$refs.stp_1_lnk.dataset.active = "false";
//             this.$refs.stp_2_lnk.dataset.active = "false";
//             this.$refs.stp_3_lnk.dataset.active = "false";
//             this.$refs.stp_4_lnk.dataset.active = "true";
//             this.formSection = '4'
//         },

//         check_formfields_1()
//         {   
//             let ER = 0;

//             this.formfields_1.user_name_error = false;
//             if (this.formfields_1.user_name == '') {
//                 this.formfields_1.user_name_error = true;
//                 ER++;
//             }

//             this.formfields_1.email_eddress_error = false
//             if (this.formfields_1.email_eddress == '') {
//                 this.formfields_1.email_eddress_error = true
//                 ER++;
//             }
            
//             this.formfields_1.phone_number_error = false
//             if (this.formfields_1.phone_number == '') {
//                 this.formfields_1.phone_number_error = true
//                 ER++;
//             }

//             if (ER > 0) {
//                 this.section.s1 = false
//             } else { this.section.s1 = true }
//         }
//     },

//     mounted() {
//         let todo = 'todo';
//     }

// }).mount('#app')

