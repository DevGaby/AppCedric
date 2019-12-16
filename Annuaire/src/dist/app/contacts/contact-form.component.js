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
var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(router, contactsService) {
        this.router = router;
        this.contactsService = contactsService;
        this.contacts = null;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        this.contacts = this.contactsService.getContacts();
    };
    /*@Input() contact: Contact; // propriété d'entrée du composant
    types: Array<string>; // types disponibles pour un contact : 'Eau', 'Feu', etc ...
    constructor(
        private contactsService: ContactsService,
        private router: Router) { }

    ngOnInit() {
        // Initialisation de la propriété types
        this.types = this.contactsService.getContactTypes(); // Cours109 POUR LE TYPE !!!!!!!!!!!!!!!!
    }

    // Détermine si le type passé en paramètres appartient ou non au contact en cours d'édition.
    hasType(type: string): boolean {
        let index = this.contact.types.indexOf(type);
        if (index > -1) return true;
        return false;
    }

    // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au contact en cours d'édition.
    selectType($event: any, type: string): void {
        let checked = $event.target.checked;
        if (checked) {
            this.contact.types.push(type);
        } else {
            let index = this.contact.types.indexOf(type);
            if (index > -1) {
                this.contact.types.splice(index, 1);
            }
        }
    }

    // Valide le nombre de types pour chaque contact
    isTypesValid(type: string): boolean {
        if (this.contact.types.length === 1 && this.hasType(type)) {
            return false;
        }
        if (this.contact.types.length >= 3 && !this.hasType(type)) {
            return false;
        }

        return true;
    }*/
    // La méthode appelée lorsque le formulaire est soumis.
    ContactFormComponent.prototype.onSubmit = function () {
        console.log("Submit form !");
        var link = ['/contact', this.contact.id];
        this.router.navigate(link);
    };
    var _a;
    ContactFormComponent = __decorate([
        core_1.Component({
            selector: 'app-contact-form',
            templateUrl: './contact-form.component.html',
            styleUrls: ['./app/contacts/contact-form.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, typeof (_a = typeof contacts_service_1.ContactsService !== "undefined" && contacts_service_1.ContactsService) === "function" ? _a : Object])
    ], ContactFormComponent);
    return ContactFormComponent;
}());
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contact-form.component.js.map