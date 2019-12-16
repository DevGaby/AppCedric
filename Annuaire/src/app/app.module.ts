import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ContactsModule } from './contacts/contacts.module'

import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

// MODULE RACINE

// Déclaration de module avec @NgModule

@NgModule({
  imports: [ 
    BrowserModule, 
    ContactsModule,
    AppRoutingModule 
   ],
  declarations: [ 
    AppComponent,
    PageNotFoundComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }