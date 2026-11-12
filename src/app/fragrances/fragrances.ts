import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Fragrance } from '../model/fragrance.model';
import { FragranceService } from '../services/fragrance.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-fragrances',
  imports: [CommonModule, RouterLink],
  templateUrl: './fragrances.html',
  styleUrl: './fragrances.css'
})
export class Fragrances implements OnInit {
  fragrances: Fragrance[] = []; //un tableau de Fragrance

  constructor(private fragranceService: FragranceService ,
    public authService: AuthService)  {}

  ngOnInit() {
    this.chargerFragrances();
  }

  chargerFragrances() {
    this.fragranceService.listeFragrances().subscribe(fs => {
      this.fragrances = fs;
    });
  }

  supprimerFragrance(f: Fragrance) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.fragranceService.supprimerFragrance(f.idFragrance!).subscribe(() => {
        this.chargerFragrances();
      });
  }
}
