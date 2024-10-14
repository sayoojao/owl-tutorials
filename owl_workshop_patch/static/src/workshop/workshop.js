/** @odoo-module **/

import { Workshop } from "@owl_workshop/workshop/workshop";

import { patch } from "@web/core/utils/patch";

//use the patch option for patching the imported components
patch(Workshop.prototype, {
    setup() {
        console.log(this)
        this.demoPatchfunction()
    },

    demoPatchfunction() {
        console.log("Demo patch function")
    },

    loadDemoData(){
        console.log("demo data")
    }

});