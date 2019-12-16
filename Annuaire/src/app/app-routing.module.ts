import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

// MODULE DE FONCTIONNALITE

// liste des routes
// path = url, component = composant vers lequel redirige l'url
const appRoutes: Routes = [
	{ path: '', redirectTo: 'contacts', pathMatch: 'full' }, 
	// route par défaut
	{ path: '**', component: PageNotFoundComponent }
	 // Redirige toutes les autres url vers cette page
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }