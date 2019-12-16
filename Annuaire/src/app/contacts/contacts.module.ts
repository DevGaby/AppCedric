import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contacts-routing.module';

import { ContactsService } from '../Service/contacts.service';

import { ListContactComponent } from './list/list-contact.component';
import { DetailContactComponent } from './detail/detail-contact.component';
import { BorderCardDirective } from './border-card.directive';
import { EditContactComponent } from './edit/edit-contact.component';
import { ContactFormComponent } from './edit/contact-form.component';


// MODULE DE GESTION DE CONTACTS

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
        ContactRoutingModule
	],
	declarations: [
		ListContactComponent,
		DetailContactComponent,
		EditContactComponent,
		ContactFormComponent,
		BorderCardDirective,
	],
	providers: [ContactsService]
})
export class ContactsModule { }