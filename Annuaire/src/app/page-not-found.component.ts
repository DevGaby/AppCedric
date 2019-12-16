import { Component } from '@angular/core';

// Template affiché lorsque l'url n'existe pas

@Component({
	selector: 'page-404',
	template: `
    <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/contacts" class="waves-effect waves-teal btn-flat"> 
        Retourner à l' accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }