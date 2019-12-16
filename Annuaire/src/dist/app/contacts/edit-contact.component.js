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
// Composant permettant d'afficher le formulaire
// PROBLEME BALISE CONTACT-FORM NE CHARGE PAS LE FORMULAIRE !!!! IL FAUT REGARDER DANS CONTACT-FORM.COMPONENT.TS !!!!!!!!!
var EditContactComponent = /** @class */ (function () {
    function EditContactComponent(route, contactsService) {
        this.route = route;
        this.contactsService = contactsService;
        this.contact = null;
    }
    EditContactComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params['id'];
        this.contact = this.contactsService.getContact(id);
    };
    EditContactComponent = __decorate([
        core_1.Component({
            selector: 'edit-contact',
            templateUrl: 'edit-contact-component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            contacts_service_1.ContactsService])
    ], EditContactComponent);
    return EditContactComponent;
}());
exports.EditContactComponent = EditContactComponent;
//# sourceMappingURL=edit-contact.component.js.map