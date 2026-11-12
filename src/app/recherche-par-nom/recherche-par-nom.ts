import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Fragrance } from '../model/fragrance.model';
import { FragranceService } from '../services/fragrance.service';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom',
  imports: [FormsModule, CommonModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styles: ``
})
export class RechercheParNom implements OnInit {

  fragrances: Fragrance[] = [];
  searchTerm: string = '';

  constructor(private fragranceService: FragranceService) {}

  ngOnInit(): void {
    this.fragranceService.listeFragrances().subscribe(frags => this.fragrances = frags);
  }

  /* 
  nomFragrance!: string;
  rechercherFrags() {            // 1) recherche avec un bouton
    if (this.nomFragrance)
      this.fragranceService.rechercherParNom(this.nomFragrance)
        .subscribe(frags => this.fragrances = frags);
    else
      this.fragranceService.listeFragrances().subscribe(frags => this.fragrances = frags);
  }
  onKeyUp(filterText: string) {  // 2) recherche avec  keyup
    this.fragrances = this.allFragrances.filter(item =>
      item.nomFragrance!.toLowerCase().includes(filterText.toLowerCase()));
  }
  */
}
