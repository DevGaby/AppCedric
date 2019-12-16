"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var contacts_routing_module_1 = require("./contacts-routing.module");
var contacts_service_1 = require("../Service/contacts.service");
var list_contact_component_1 = require("./list/list-contact.component");
var detail_contact_component_1 = require("./detail/detail-contact.component");
var border_card_directive_1 = require("./border-card.directive");
var edit_contact_component_1 = require("./edit/edit-contact.component");
var contact_form_component_1 = require("./edit/contact-form.component");
// MODULE DE GESTION DE CONTACTS
var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                contacts_routing_module_1.ContactRoutingModule
            ],
            declarations: [
                list_contact_component_1.ListContactComponent,
                detail_contact_component_1.DetailContactComponent,
                edit_contact_component_1.EditContactComponent,
                contact_form_component_1.ContactFormComponent,
                border_card_directive_1.BorderCardDirective,
            ],
            providers: [contacts_service_1.ContactsService]
        })
    ], ContactsModule);
    return ContactsModule;
}());
exports.ContactsModule = ContactsModule;
//# sourceMappingURL=contacts.module.js.map