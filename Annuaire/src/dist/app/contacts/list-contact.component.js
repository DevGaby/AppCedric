"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contacts_service_1 = require("./contacts.service");
// Composant vue liste
var ListContactComponent = /** @class */ (function () {
    function ListContactComponent(router, contactsService) {
        this.router = router;
        this.contactsService = contactsService;
        this.contacts = null;
    }
    ListContactComponent.prototype.ngOnInit = function () {
        this.contacts = this.contactsService.getContacts();
    };
    // Redirige vers l'url du contact sélectionné de la liste 
    ListContactComponent.prototype.selectContact = function (contact) {
        console.log('Vous avez selectionné ' + contact.name + ' ' + contact.surname);
        var link = ['/contact', contact.id];
        this.router.navigate(link);
    };
    var _a;
    ListContactComponent = __decorate([
        core_1.Component({
            selector: 'list-contact',
            templateUrl: './app/contacts/list-contact.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, typeof (_a = typeof contacts_service_1.ContactsService !== "undefined" && contacts_service_1.ContactsService) === "function" ? _a : Object])
    ], ListContactComponent);
    return ListContactComponent;
}());
exports.ListContactComponent = ListContactComponent;
//# sourceMappingURL=list-contact.component.js.map