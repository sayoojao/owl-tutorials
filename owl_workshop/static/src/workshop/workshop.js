/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Input } from "@owl_workshop/elements/input";

export class Workshop extends Component {
    static template = "owl_workshop.Workshop";
//    below is 1/2 method for mentioning the components
    static components = { Input };
}
//below is 2/2 method for mentioning the components
//Workshop.components = { Input };
registry.category("actions").add("workshop", Workshop);