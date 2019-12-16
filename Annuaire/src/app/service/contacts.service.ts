import { Injectable } from '@angular/core';
import { Contact } from '../contacts/model/contact';
import { CONTACTS } from '../contacts/base-contact';

/*  Injection de dépendances
    Permet de donner accès aux services ou méthodes de la classe
    en important la classe dans le composant voulu*/

@Injectable()
export class ContactsService {

    // Retourne tous les contacts
    getContacts(): Contact[] {
      return CONTACTS;
    }
    
    // Retourne le contact avec l'identifiant passé en paramètre
    getContact(id: number): Contact {
      let contacts = this.getContacts();
    
      for(let index = 0; index < contacts.length; index++) {
        if(id === contacts[index].id) {
          return contacts[index];
        }
      }
    }
}