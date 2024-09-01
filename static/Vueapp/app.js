import { createApp } from './vue@3/vue.esm-browser.js'

createApp({
    data() {
        return {
            todo: 'todo',

            views_data: {
                selected_view: "stp_1",
                key: 1,

                views: {
                    stp_1: { name: "stp_1", key:1, active: true, error: false } ,
                    stp_2: { name: "stp_2", key:2, active: false, error: true } ,
                    stp_3: { name: "stp_3", key:3, active: false, error: true } ,
                    stp_4: { name: "stp_4", key:4, active: false, error: true } ,
                },

                checkers: '',

                fields: {
                    stp_1: {
                        user_name: 'yes',
                        user_name_error: false,

                        email_eddress: 'yes',
                        email_eddress_error: false,
                        
                        phone_number: 'yes',
                        phone_number_error: false,
                    },

                    stp_2: {
                        yearly: false,
                        selected: "Arcade",

                        options: {
                            Arcade: {
                                name: "Arcade",
                                price: 9,
                                time: "mo",
                                
                                per_month: {
                                    price: 9,
                                    time: "mo"
                                },
                                per_year: {
                                    price: 90,
                                    time: "yr"
                                }
                            },
    
                            Advanced: {
                                name: "Advanced",
                                price: 12,
                                time: "mo",
                                
                                per_month: {
                                    price: 12,
                                    time: "mo"
                                },
                                per_year: {
                                    price: 120,
                                    time: "yr"
                                }
                            },
    
                            Pro: {
                                name: "Pro",
                                price: 15,
                                time: "mo",
                                
                                per_month: {
                                    price: 15,
                                    time: "mo"
                                },
                                per_year: {
                                    price: 150,
                                    time: "yr"
                                }
                            }
                        }
                    },

                    stp_3: {
                        Online_service: {
                            checked: false,
                            name: "Online service",
                            price: 1,
                            time: "mo",
                            per_month: {
                                price: 1,
                                time: "mo"
                            },
                            per_year: {
                                price: 10,
                                time: "yr"
                            }
                        },
                        Larger_storage: {
                            checked: false,
                            name: "Larger storage",
                            price: 2,
                            time: "mo",
                            per_month: {
                                price: 2,
                                time: "mo"
                            },
                            per_year: {
                                price: 20,
                                time: "yr"
                            }
                        },
                        Customizable_Profile: {
                            checked: false,
                            name: "Customizable Profile",
                            price: 2,
                            time: "mo",
                            per_month: {
                                price: 2,
                                time: "mo"
                            },
                            per_year: {
                                price: 20,
                                time: "yr"
                            }
                        }
                    },
                    
                    stp_4: {
                        plan: {
                            name: "",
                            price: 0,
                            time: "",
                        },
                        add_ons: [],
                        total: 0,
                    }
                }
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

            
            if (Element.dataset.stpkey > this.views_data.key){

                this.views_data.checkers[this.views_data.selected_view]();
                if (this.views_data.views[this.views_data.selected_view].error == false) {

                    this.views_data.views[this.views_data.selected_view].active = false ;
                    this.views_data.views[Element.dataset.stpname].active = true;
                    this.views_data.selected_view = Element.dataset.stpname;
                    this.views_data.key = Element.dataset.stpkey;

                    console.log(this.views_data.views[Element.dataset.stpname])
                } 
                // else {
                //     alert("way Closed")
                // }

            } else {

                this.views_data.views[this.views_data.selected_view].active = false ;
                this.views_data.views[Element.dataset.stpname].active = true;
                this.views_data.selected_view = Element.dataset.stpname;
                this.views_data.key = Element.dataset.stpkey;
                console.log(this.views_data.views[Element.dataset.stpname])
            }
            console.log(Element)
            // this.views_data.views[this.views_data.selected_view].active = false ;
            // this.views_data.views[Element.dataset.stpname].active = true;
            // this.views_data.selected_view = Element.dataset.stpname;
            // this.views_data.key = Element.dataset.stpkey;
        },

        // todo
        check_stp_1() { 
            let errors = 0;

            if (this.views_data.fields.stp_1.user_name == "")
            {
                this.views_data.fields.stp_1.user_name_error = true;
                errors++
            } else { this.views_data.fields.stp_1.user_name_error = false; }

            if (this.views_data.fields.stp_1.email_eddress == "")
            {
                this.views_data.fields.stp_1.email_eddress_error = true;
                errors++
            } else { this.views_data.fields.stp_1.email_eddress_error = false; }

            if (this.views_data.fields.stp_1.phone_number == "")
            {
                this.views_data.fields.stp_1.phone_number_error = true;
                errors++
            } else { this.views_data.fields.stp_1.phone_number_error = false; }
            
            if ( errors > 0 ){
                this.views_data.views.stp_1.error = true;
            } else { this.views_data.views.stp_1.error = false }

        },
        check_stp_2() { 

            console.log("check_stp_2"); 
            let errors = 0;

            if (this.views_data.fields.stp_2.selected == "")
            {
                this.views_data.views.stp_2.error = true
            } else { this.views_data.views.stp_2.error = false }

        },

        check_stp_3() { console.log("check_stp_3"); this.views_data.views.stp_3.error = false },
        
        check_stp_4() { console.log("check_stp_4"); this.views_data.views.stp_4.error = true },

        // dienamic
        // step 2
        timing_on_change(e) {
            let Element = e.target;
            console.log(Element.id)

            // console.log(Object.keys(this.views_data.fields.stp_3))
            let plan_keys = Object.keys(this.views_data.fields.stp_2.options)
            let add_ons_keys = Object.keys(this.views_data.fields.stp_3)
            if (Element.id == "monthly") 
            {
                for (let key of plan_keys){
                    this.views_data.fields.stp_2.options[key].price = this.views_data.fields.stp_2.options[key].per_month.price
                    this.views_data.fields.stp_2.options[key].time = this.views_data.fields.stp_2.options[key].per_month.time
                }

                this.views_data.fields.stp_2.yearly = false
 
                for (let key of add_ons_keys){
                    this.views_data.fields.stp_3[key].price = this.views_data.fields.stp_3[key].per_month.price
                    this.views_data.fields.stp_3[key].time = this.views_data.fields.stp_3[key].per_month.time
                }
            }
            if (Element.id == "yearly") 
            {   
                for (let key of plan_keys){
                    this.views_data.fields.stp_2.options[key].price = this.views_data.fields.stp_2.options[key].per_year.price
                    this.views_data.fields.stp_2.options[key].time = this.views_data.fields.stp_2.options[key].per_year.time
                }
   
                this.views_data.fields.stp_2.yearly = true

                for (let key of add_ons_keys){
                    this.views_data.fields.stp_3[key].price = this.views_data.fields.stp_3[key].per_year.price
                    this.views_data.fields.stp_3[key].time = this.views_data.fields.stp_3[key].per_year.time
                }
            }
        }
    },

    mounted() {
        this.views_data.checkers = {
            stp_1: this.check_stp_1,
            stp_2: this.check_stp_2,
            stp_3: this.check_stp_3,
            stp_4: this.check_stp_4,
        }

        // console.log(
        //     Object.values(this.views_data.views)[0].name
        // )
        // this.views_data.views.key(0)
    }

}).mount('#app')



































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

