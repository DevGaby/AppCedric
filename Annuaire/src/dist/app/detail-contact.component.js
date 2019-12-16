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
var base_contact_1 = require("./base-contact");
/* Composant pour récupérer depuis l'URL du composant l'id du contact
pour l'afficher
route permet de récupérer l'information
router permet de rediriger*/
var DetailContactComponent = /** @class */ (function () {
    function DetailContactComponent(route, router) {
        this.route = route;
        this.router = router;
        this.contacts = null;
        this.contact = null;
    }
    /*Initialisation de la vue du contact sélectionné*/
    DetailContactComponent.prototype.ngOnInit = function () {
        this.contacts = base_contact_1.CONTACTS;
        var id = +this.route.snapshot.paramMap.get('id'); // Récupère l'id du contact pour l'afficher
        for (var i = 0; i < this.contacts.length; i++) { // Parcours notre tableau de contact jusqu'à trouver 
            if (this.contacts[i].id == id) { // l'id recherché
                this.contact = this.contacts[i];
            }
        }
    };
    DetailContactComponent.prototype.goBack = function () {
        this.router.navigate(['/contacts']);
    };
    DetailContactComponent = __decorate([
        core_1.Component({
            selector: 'detail-contact',
            templateUrl: './app/detail-contact.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], DetailContactComponent);
    return DetailContactComponent;
}());
exports.DetailContactComponent = DetailContactComponent;
//# sourceMappingURL=detail-contact.component.js.map