"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_contact_1 = require("../contacts/base-contact");
/*  Injection de dépendances
    Permet de donner accès aux services ou méthodes de la classe
    en important la classe dans le composant voulu*/
var ContactsService = /** @class */ (function () {
    function ContactsService() {
    }
    // Retourne tous les contacts
    ContactsService.prototype.getContacts = function () {
        return base_contact_1.CONTACTS;
    };
    // Retourne le contact avec l'identifiant passé en paramètre
    ContactsService.prototype.getContact = function (id) {
        var contacts = this.getContacts();
        for (var index = 0; index < contacts.length; index++) {
            if (id === contacts[index].id) {
                return contacts[index];
            }
        }
    };
    ContactsService = __decorate([
        core_1.Injectable()
    ], ContactsService);
    return ContactsService;
}());
exports.ContactsService = ContactsService;
//# sourceMappingURL=contacts.service.js.map