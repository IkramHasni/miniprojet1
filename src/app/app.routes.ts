import { Routes } from '@angular/router';
import { Fragrances } from './fragrances/fragrances';
import { AddFragrance } from './add-fragrance/add-fragrance';
import { UpdateFragrance } from './update-fragrance/update-fragrance';
import { RechercheParFamille } from './recherche-par-famille/recherche-par-famille';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';

export const routes: Routes = [
    {path: "fragrances", component : Fragrances},
    {path: "add-fragrance", component : AddFragrance},
    {path: "updateFragrance/:id", component: UpdateFragrance},
    {path: "rechercheParFamille", component: RechercheParFamille},
    {path: "rechercheParNom", component: RechercheParNom},
    {path: "", redirectTo: "fragrances", pathMatch: "full"}
];
