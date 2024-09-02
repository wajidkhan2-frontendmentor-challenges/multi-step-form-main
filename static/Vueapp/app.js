import { createApp } from './vue@3/vue.esm-browser.js'

createApp({
    data() {
        return {
            current_section: "info",
            current_section_key: 1,

            sections: {
                info: { name: "info", key:1, active: true, error: false } ,
                plan: { name: "plan", key:2, active: false, error: false } ,
                addon: { name: "addon", key:3, active: false, error: false } ,
                summary: { name: "summary", key:4, active: false, error: false } ,
            },

            // info section
            info: {
                user_name: 'My name',
                user_name_error: false,

                email_eddress: 'Myemailaddress@email.com',
                email_eddress_error: false,
                
                phone_number: '+92090078601',
                phone_number_error: false,
            },

            // plan section
            plan: {
                selected: "Arcade",

                options: {
                    Arcade: {
                        name: "Arcade",
                        price: 9,
                        short_term_price: 9,
                        long_term_price: 90
                    },
                    Advanced: {
                        name: "Advanced",
                        price: 9,
                        short_term_price: 12,
                        long_term_price: 120
                    },
                    Pro: {
                        name: "Pro",
                        price: 9,
                        short_term_price: 15,
                        long_term_price: 150
                    },
                },
            },

            payment_term: {
                te: "mo",
                term: "month",
                termly: "Monthly",

                short_term: {
                    ti: "mo",
                    time: "month",
                    timely: "Monthly"
                },

                long_term: {
                    ti: "yr",
                    time: "year",
                    timely: "Yearly"
                }
            },

            // add on
            add_ons: {
                Online_service: {
                    checked: false,
                    name: "Online service",
                    price: 1,
                    short_term_price: 1,
                    long_term_price: 10
                },

                Larger_storage: {
                    checked: false,
                    name: "Larger storage",
                    price: 2,
                    short_term_price: 2,
                    long_term_price: 20
                },

                Customizable_Profile: {
                    checked: false,
                    name: "Customizable Profile",
                    price: 2,
                    short_term_price: 2,
                    long_term_price: 20
                }
            },

            // summary
            summary: {
                selected_plan: {
                    name: "",
                    price: 0,
                },
                selected_add_ons: [],
                add_on_addee: { name: "", price: 0},
                total_payment_over_term: 0,
            },

            checkers: '',

        }
    },
    created() {
        let todo = 'todo';
    },
    computed: {

    },
    methods: {

        // responsible for switching views
        switch_view(event) {

            // get the target element
            let Element = event.target.closest("a[data-sectionlink]");
            
            // check if target element key is greater then currnet view key
            if (Element.dataset.sectionkey > this.current_section_key) {
                
                // call check function for current view to check for error
                this.checkers[this.current_section]();

                // if error for current view is false
                if (this.sections[this.current_section].error == false) {

                    // change the view
                    this.sections[this.current_section].active = false
                    this.sections[Element.dataset.sectionlink].active = true;
                    this.current_section = Element.dataset.sectionlink;
                    this.current_section_key = Element.dataset.sectionkey;

                }
                // else dont change view
            
            // else if target element key is less then currnet view key
            } else {
                
                // just change view
                this.sections[this.current_section].active = false
                this.sections[Element.dataset.sectionlink].active = true;
                this.current_section = Element.dataset.sectionlink;
                this.current_section_key = Element.dataset.sectionkey;

            }
    
            console.log(Element);
        },

        // info
        verify_info() {

            let errors = 0;

            this.info.user_name_error = false;
            if (this.info.user_name == "") {
                this.info.user_name_error = true;
                errors++;
            } 

            this.info.email_eddress_error = false;
            if (this.info.email_eddress == "") {
                this.info.email_eddress_error = true;
                errors++;
            } 

            this.info.phone_number_error = false;
            if (this.info.phone_number == "") {
                this.info.phone_number_error = true;
                errors++;
            } 

            this.sections.info.error = false;
            if ( errors > 0 )
            {
                this.sections.info.error = true;
            }
            
        },

        // plan
        payment_term_change(event) {
            let Element = event.target;

            let plan_options_keys = Object.keys(this.plan.options);
            let addon_keys = Object.keys(this.add_ons);
            if (Element.id == "monthly") {
                this.payment_term.te = this.payment_term.short_term.ti;
                this.payment_term.term = this.payment_term.short_term.time;
                this.payment_term.termly = this.payment_term.short_term.timely;

                for (let key of plan_options_keys) {
                    this.plan.options[key].price = this.plan.options[key].short_term_price;
                }

                for (let key of addon_keys) {
                    this.add_ons[key].price = this.add_ons[key].short_term_price;
                }
            }

            if (Element.id == "yearly") {
                this.payment_term.te = this.payment_term.long_term.ti;
                this.payment_term.term = this.payment_term.long_term.time;
                this.payment_term.termly = this.payment_term.long_term.timely;

                for (let key of plan_options_keys) {
                    this.plan.options[key].price = this.plan.options[key].long_term_price;
                }

                for (let key of addon_keys) {
                    this.add_ons[key].price = this.add_ons[key].long_term_price;
                }
            }

        }

    },

    mounted() {
        this.checkers = {
            info: this.verify_info,
            plan: () => {  },
            addon: () => {  },
            summary: () => {  },
        }
    }

}).mount('#app')






























// createApp({
//     data() {
//         return {
//             todo: 'todo',

//             views_data: {
//                 selected_view: "stp_1",
//                 key: 1,

//                 views: {
//                     stp_1: { name: "stp_1", key:1, active: true, error: false } ,
//                     stp_2: { name: "stp_2", key:2, active: false, error: true } ,
//                     stp_3: { name: "stp_3", key:3, active: false, error: true } ,
//                     stp_4: { name: "stp_4", key:4, active: false, error: true } ,
//                 },

//                 checkers: '',

//                 fields: {
//                     stp_1: {
//                         user_name: 'yes',
//                         user_name_error: false,

//                         email_eddress: 'yes',
//                         email_eddress_error: false,
                        
//                         phone_number: 'yes',
//                         phone_number_error: false,
//                     },

//                     stp_2: {
//                         yearly: false,
//                         selected: "Arcade",

//                         options: {
//                             Arcade: {
//                                 name: "Arcade",
//                                 price: 9,
//                                 time: "mo",
                                
//                                 per_month: {
//                                     price: 9,
//                                     time: "mo"
//                                 },
//                                 per_year: {
//                                     price: 90,
//                                     time: "yr"
//                                 }
//                             },
    
//                             Advanced: {
//                                 name: "Advanced",
//                                 price: 12,
//                                 time: "mo",
                                
//                                 per_month: {
//                                     price: 12,
//                                     time: "mo"
//                                 },
//                                 per_year: {
//                                     price: 120,
//                                     time: "yr"
//                                 }
//                             },
    
//                             Pro: {
//                                 name: "Pro",
//                                 price: 15,
//                                 time: "mo",
                                
//                                 per_month: {
//                                     price: 15,
//                                     time: "mo"
//                                 },
//                                 per_year: {
//                                     price: 150,
//                                     time: "yr"
//                                 }
//                             }
//                         }
//                     },

//                     stp_3: {
//                         Online_service: {
//                             checked: false,
//                             name: "Online service",
//                             price: 1,
//                             time: "mo",
//                             per_month: {
//                                 price: 1,
//                                 time: "mo"
//                             },
//                             per_year: {
//                                 price: 10,
//                                 time: "yr"
//                             }
//                         },
//                         Larger_storage: {
//                             checked: false,
//                             name: "Larger storage",
//                             price: 2,
//                             time: "mo",
//                             per_month: {
//                                 price: 2,
//                                 time: "mo"
//                             },
//                             per_year: {
//                                 price: 20,
//                                 time: "yr"
//                             }
//                         },
//                         Customizable_Profile: {
//                             checked: false,
//                             name: "Customizable Profile",
//                             price: 2,
//                             time: "mo",
//                             per_month: {
//                                 price: 2,
//                                 time: "mo"
//                             },
//                             per_year: {
//                                 price: 20,
//                                 time: "yr"
//                             }
//                         }
//                     },
                    
//                     stp_4: {
//                         plan: {
//                             name: "",
//                             price: 0,
//                             time: "",
//                         },
//                         add_ons: [],
//                         total: 0,
//                     }
//                 }
//             },

//         }
//     },
//     created() {
//         let todo = 'todo';
//     },
//     computed: {

//     },
//     methods: {

//         // responsible for switching views
//         switch_view(event){

//             // get the target element
//             let Element = event.target.closest("a.link");
            
//             // check if target element key is greater then currnet view key
//             if (Element.dataset.stpkey > this.views_data.key) {

//                 // call check function for current view to check for error
//                 this.views_data.checkers[this.views_data.selected_view]();

//                 // if error for current view is false
//                 if (this.views_data.views[this.views_data.selected_view].error == false) {

//                     // change the view
//                     this.views_data.views[this.views_data.selected_view].active = false ;
//                     this.views_data.views[Element.dataset.stpname].active = true;
//                     this.views_data.selected_view = Element.dataset.stpname;
//                     this.views_data.key = Element.dataset.stpkey;

//                     console.log(this.views_data.views[Element.dataset.stpname])
//                 }
//                 // else dont change view
            
//             // else if target element key is less then currnet view key
//             } else {
                
//                 // just change view
//                 this.views_data.views[this.views_data.selected_view].active = false ;
//                 this.views_data.views[Element.dataset.stpname].active = true;
//                 this.views_data.selected_view = Element.dataset.stpname;
//                 this.views_data.key = Element.dataset.stpkey;
//                 console.log(this.views_data.views[Element.dataset.stpname])
//             }
//             console.log(Element)

//             if (this.views_data.selected_view ==  this.views_data.views.stp_4.name) {

//                 this.views_data.fields.stp_4.plan.name = this.views_data.fields.stp_2.options[this.views_data.fields.stp_2.selected].name;
//                 this.views_data.fields.stp_4.plan.price = this.views_data.fields.stp_2.options[this.views_data.fields.stp_2.selected].price;
//                 this.views_data.fields.stp_4.plan.time = this.views_data.fields.stp_2.options[this.views_data.fields.stp_2.selected].time;
                
//                 let add_ons_keys = Object.keys(this.views_data.fields.stp_3)

//                 this.views_data.fields.stp_4.total = this.views_data.fields.stp_2.options[this.views_data.fields.stp_2.selected].price;
//                 this.views_data.fields.stp_4.add_ons = [];
//                 for (let key of add_ons_keys){
                    
//                     if (this.views_data.fields.stp_3[key].checked == true)
//                     {
//                         this.views_data.fields.stp_4.total += this.views_data.fields.stp_3[key].price;
//                         this.views_data.fields.stp_4.add_ons.push({
//                             name: this.views_data.fields.stp_3[key].name,
//                             price: this.views_data.fields.stp_3[key].price,
//                             time: this.views_data.fields.stp_3[key].time,
//                         })
//                     }
//                     // this.views_data.fields.stp_3[key].price = this.views_data.fields.stp_3[key].per_year.price
//                     // this.views_data.fields.stp_3[key].time = this.views_data.fields.stp_3[key].per_year.time
//                 }
//                 // plan: {
//                 //     name: "",
//                 //     price: 0,
//                 //     time: "",
//                 // },
//                 // add_ons: [],
//                 // total: 0,
//             }
//         },

//         // todo
//         check_stp_1() { 
//             let errors = 0;

//             if (this.views_data.fields.stp_1.user_name == "")
//             {
//                 this.views_data.fields.stp_1.user_name_error = true;
//                 errors++
//             } else { this.views_data.fields.stp_1.user_name_error = false; }

//             if (this.views_data.fields.stp_1.email_eddress == "")
//             {
//                 this.views_data.fields.stp_1.email_eddress_error = true;
//                 errors++
//             } else { this.views_data.fields.stp_1.email_eddress_error = false; }

//             if (this.views_data.fields.stp_1.phone_number == "")
//             {
//                 this.views_data.fields.stp_1.phone_number_error = true;
//                 errors++
//             } else { this.views_data.fields.stp_1.phone_number_error = false; }
            
//             if ( errors > 0 ){
//                 this.views_data.views.stp_1.error = true;
//             } else { this.views_data.views.stp_1.error = false }

//         },
//         check_stp_2() { 

//             console.log("check_stp_2"); 
//             let errors = 0;

//             if (this.views_data.fields.stp_2.selected == "")
//             {
//                 this.views_data.views.stp_2.error = true
//             } else { this.views_data.views.stp_2.error = false }

//         },

//         check_stp_3() { console.log("check_stp_3"); this.views_data.views.stp_3.error = false },
        
//         check_stp_4() { console.log("check_stp_4"); this.views_data.views.stp_4.error = true },

//         // dienamic
//         // step 2
//         timing_on_change(e) {
//             let Element = e.target;
//             console.log(Element.id)

//             // console.log(Object.keys(this.views_data.fields.stp_3))
//             let plan_keys = Object.keys(this.views_data.fields.stp_2.options)
//             let add_ons_keys = Object.keys(this.views_data.fields.stp_3)
//             if (Element.id == "monthly") 
//             {
//                 for (let key of plan_keys){
//                     this.views_data.fields.stp_2.options[key].price = this.views_data.fields.stp_2.options[key].per_month.price
//                     this.views_data.fields.stp_2.options[key].time = this.views_data.fields.stp_2.options[key].per_month.time
//                 }

//                 this.views_data.fields.stp_2.yearly = false
 
//                 for (let key of add_ons_keys){
//                     this.views_data.fields.stp_3[key].price = this.views_data.fields.stp_3[key].per_month.price
//                     this.views_data.fields.stp_3[key].time = this.views_data.fields.stp_3[key].per_month.time
//                 }
//             }
//             if (Element.id == "yearly") 
//             {   
//                 for (let key of plan_keys){
//                     this.views_data.fields.stp_2.options[key].price = this.views_data.fields.stp_2.options[key].per_year.price
//                     this.views_data.fields.stp_2.options[key].time = this.views_data.fields.stp_2.options[key].per_year.time
//                 }
   
//                 this.views_data.fields.stp_2.yearly = true

//                 for (let key of add_ons_keys){
//                     this.views_data.fields.stp_3[key].price = this.views_data.fields.stp_3[key].per_year.price
//                     this.views_data.fields.stp_3[key].time = this.views_data.fields.stp_3[key].per_year.time
//                 }
//             }
//         }
//     },

//     mounted() {
//         this.views_data.checkers = {
//             stp_1: this.check_stp_1,
//             stp_2: this.check_stp_2,
//             stp_3: this.check_stp_3,
//             stp_4: this.check_stp_4,
//         }

//         // console.log(
//         //     Object.values(this.views_data.views)[0].name
//         // )
//         // this.views_data.views.key(0)
//     }

// }).mount('#app')





