import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';
import { Router } from '@angular/router';
import { ContactsService } from '../../Service/contacts.service';


// Composant vue liste
@Component({
	selector: 'list-contact',
	templateUrl: './list-contact.component.html'
})
export class ListContactComponent implements OnInit {

	contacts: Contact[] = null;

	constructor(private router: Router, private contactsService: ContactsService) { }

	ngOnInit(): void {
		this.contacts = this.contactsService.getContacts();
	}

    // Redirige vers l'url du contact sélectionné de la liste 
	selectContact(contact: Contact): void {
		console.log('Vous avez selectionné ' + contact.name + ' ' + contact.surname);
		let link = ['/contact', contact.id];
		this.router.navigate(link);
	}

}