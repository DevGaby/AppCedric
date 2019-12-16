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
/* Composant pour récupérer depuis l'URL du composant l'id du contact
pour l'afficher
route permet de récupérer l'information
router permet de rediriger*/
var DetailContactComponent = /** @class */ (function () {
    function DetailContactComponent(route, router, contactsService) {
        this.route = route;
        this.router = router;
        this.contactsService = contactsService;
        this.contact = null;
    }
    /*Initialisation de la vue du contact sélectionné*/
    DetailContactComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params['id']; // Récupère l'id du contact pour l'afficher
        this.contact = this.contactsService.getContact(id);
    };
    DetailContactComponent.prototype.goBack = function () {
        this.router.navigate(['/contacts']);
    };
    DetailContactComponent.prototype.goEdit = function (contact) {
        var link = ['/contact/edit', contact.id];
        this.router.navigate(link);
    };
    var _a;
    DetailContactComponent = __decorate([
        core_1.Component({
            selector: 'detail-contact',
            templateUrl: './app/contacts/detail-contact.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router, typeof (_a = typeof contacts_service_1.ContactsService !== "undefined" && contacts_service_1.ContactsService) === "function" ? _a : Object])
    ], DetailContactComponent);
    return DetailContactComponent;
}());
exports.DetailContactComponent = DetailContactComponent;
//# sourceMappingURL=detail-contact.component.js.map