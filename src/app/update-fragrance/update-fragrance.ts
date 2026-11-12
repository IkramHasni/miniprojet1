import { Component, OnInit } from '@angular/core';
import { Fragrance } from '../model/fragrance.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FragranceService } from '../services/fragrance.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FamilleOlfactive } from '../model/famille-olfactive.model';

@Component({
  selector: 'app-update-fragrance',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-fragrance.html',
  styles: ``
})
export class UpdateFragrance implements OnInit {
  currentFragrance = new Fragrance();
  familles! : FamilleOlfactive[];
  updatedFamId! : number;

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private fragranceService: FragranceService
) { }

  ngOnInit() {
    this.familles = this.fragranceService.familles;
    this.fragranceService.consulterFragrance(this.activatedRoute.snapshot.params['id'])
      .subscribe(f => { this.currentFragrance = f;
        this.updatedFamId = f.famille?.idFam;
      });
  }

  updateFragrance()
  {
    this.currentFragrance.famille = this.familles.find(f => f.idFam == this.updatedFamId)!;
    this.fragranceService.updateFragrance(this.currentFragrance)
      .subscribe(() => this.router.navigate(['fragrances']));
  }
}
