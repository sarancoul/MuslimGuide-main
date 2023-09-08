import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listeannonces',
  templateUrl: './listeannonces.page.html',
  styleUrls: ['./listeannonces.page.scss'],
})
export class ListeannoncesPage implements OnInit {
  searchTerm: string = '';

  constructor() { }
   // Fonction appelée lorsque le bouton d'annulation est cliqué
   clearSearch() {
    this.searchTerm = '';
  }

  ngOnInit() {
  }

}
