/** @odoo-module **/

import { Component, useState, onWillStart, useEffect, useRef } from "@odoo/owl";

/**
     useState is used for getting the dom updated dynamically, if we directly assign value to a variable then the
     change in the value will not update in the view dynamically
     */

/**
     useEffect is used to run a function conditional with depends, its similar to the compute function in python
     */

/**
     useRef is used instead of document.getElementById, we can define a t-ref element in the html component we require like div then
     we have to initialize that in setup using useRef.Then we can fetch that element using the variable in setup and make necessary changes.
     */

import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

/**
    in useService we have currently checked
    orm -> for the purpose of fetching the records, record set from the backend
    action -> for creating the act windows, currently used doAction
*/
import { _t } from "@web/core/l10n/translation";

export class Workshop extends Component {
    static template = "owl_workshop_counter.Workshop";
    setup() {
/**        state is like a normal variable we can use any other names if we need
*/
        this.state = useState({
            'value': 1,
            'change': ""
        })
        this.contactRef = useRef("contactDetails");
        this.orm = useService("orm");
        this.action = useService("action");

        onWillStart(() => {
            console.log("Inside onWillStart")
            this.markChange()
        });

        /**
        Following is the syntax of writing useEffect functions

        useEffect(() => {
            we can call functions here
            we can add conditions here
        }, () => [ the value that we need to depend on, ie if i give this.state.value here then useEffect will run when change in value ]);
        */

        useEffect(() => {
            this.markChange()
            if(this.state.value > 3){
                this.state.change = 'Testtttttttttttttttttttt'
            }
        }, () => [ this.state.value ]);
    }
    valueIncrement(){
        this.state.value += 1
        console.log("INCREMENT", this.state.value)
    }
    valueDecrement(){
        this.state.value -= 1
        console.log("DECREMENT", this.state.value)
    }
    markChange(){
        console.log("Inside markChange")
        this.state.change = "Inside onWillStart"

    }
    fetchRefValue(){
        this.contactRef.el.style.fontSize = "40px";
    }

    createSaleOrder(){
        this.action.doAction({
            type: 'ir.actions.act_window',
            name: _t('Sale Order'),
            target: 'new',
            res_model: 'sale.order',
            views: [[false, 'form']],
            context:{}
        });
    }
    /**
    const variable = await this.orm.searchRead("model.name", [domain], [required fields]);
    while calling the method the method should be use @api.model
    const variable = await this.orm.call('model.name', 'method_name', [arguments]);
    */

    async ormServices(){
        const saleIds = await this.orm.searchRead("sale.order", [], []);
        console.log(saleIds,'>>>>>>>>>>>>>>>>')
        const saleOrderIds = await this.orm.call('sale.order', 'get_data', [{'name': 'Jhon'}]);
        console.log(saleOrderIds, '##########')
    }
}
registry.category("actions").add("workshop", Workshop);