import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListContactComponent }    from './list/list-contact.component';
import { DetailContactComponent }  from './detail/detail-contact.component';
import { EditContactComponent } from './../contacts/edit/edit-contact.component';

// MODULE DE FONCTIONNALITE
// les routes du module Contact
const contactsRoutes: Routes = [
	{ path: 'contacts', component: ListContactComponent },
	{ path: 'contact/edit/:id', component: EditContactComponent }, 
	{ path: 'contact/:id', component: DetailContactComponent }
];

// Déclaration de module

@NgModule({
	imports: [
		RouterModule.forChild(contactsRoutes) // forchild à utiliser que dans les modules enfants
	],
	exports: [
		RouterModule
	]
})
export class ContactRoutingModule { }