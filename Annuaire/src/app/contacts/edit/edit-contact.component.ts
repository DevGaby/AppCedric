import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Contact } from '../model/contact';
import { ContactsService } from '../../Service/contacts.service';

// Composant permettant d'afficher le formulaire


 // PROBLEME BALISE CONTACT-FORM NE CHARGE PAS LE FORMULAIRE !!!! IL FAUT REGARDER DANS CONTACT-FORM.COMPONENT.TS !!!!!!!!!
@Component({
  selector: 'edit-contact',
  templateUrl: 'edit-contact-component.html'
})
export class EditContactComponent implements OnInit {

    contact: Contact = null;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.contact = this.contactsService.getContact(id);
  }

}