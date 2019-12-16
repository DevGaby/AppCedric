import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Contact } from '../model/contact';
import { ContactsService } from '../../Service/contacts.service';

    /* Composant pour récupérer depuis l'URL du composant l'id du contact 
    pour l'afficher
    route permet de récupérer l'information
    router permet de rediriger*/

@Component({
	selector: 'detail-contact',
	templateUrl: './detail-contact.component.html'
})
export class DetailContactComponent implements OnInit {

	contact: Contact = null;

	constructor(
		private route: ActivatedRoute, 
		private router: Router, 
		private contactsService: ContactsService) { }

    /*Initialisation de la vue du contact sélectionné*/ 
	ngOnInit(): void {

		let id = +this.route.snapshot.params['id']; // Récupère l'id du contact pour l'afficher
		this.contact = this.contactsService.getContact(id);
		
	}

	goBack(): void {
		this.router.navigate(['/contacts']);
	}
	
	goEdit(contact: Contact): void {
		let link = ['/contact/edit', contact.id];
		this.router.navigate(link);
	}

}