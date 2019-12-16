"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var list_contact_component_1 = require("./list/list-contact.component");
var detail_contact_component_1 = require("./detail/detail-contact.component");
var edit_contact_component_1 = require("./../contacts/edit/edit-contact.component");
// MODULE DE FONCTIONNALITE
// les routes du module Contact
var contactsRoutes = [
    { path: 'contacts', component: list_contact_component_1.ListContactComponent },
    { path: 'contact/edit/:id', component: edit_contact_component_1.EditContactComponent },
    { path: 'contact/:id', component: detail_contact_component_1.DetailContactComponent }
];
// Déclaration de module
var ContactRoutingModule = /** @class */ (function () {
    function ContactRoutingModule() {
    }
    ContactRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(contactsRoutes) // forchild à utiliser que dans les modules enfants
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], ContactRoutingModule);
    return ContactRoutingModule;
}());
exports.ContactRoutingModule = ContactRoutingModule;
//# sourceMappingURL=contacts-routing.module.js.map