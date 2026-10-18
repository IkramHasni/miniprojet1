# Mes Fragrances (Angular 20, sans backend)

## Lancer
    npm install
    ng serve        (ou npm start)
puis ouvrir http://localhost:4200

## Contenu (d'après l'Atelier 07 : la recherche dans Angular)
- Liste / Ajouter / Modifier / Supprimer une fragrance
- Menu Fragrances > Recherche Par Famille  (liste déroulante -> rechercherParFamille)
- Menu Fragrances > Recherche Par Nom      (champ de saisie + pipe searchFilter)
- Les données sont en mémoire dans services/fragrance.service.ts
  (elles reviennent à zéro si tu recharges la page).

## Passer à un vrai backend plus tard
Les méthodes du service renvoient déjà des Observable : il suffit d'injecter HttpClient,
d'ajouter provideHttpClient() dans app.config.ts et de remplacer le corps des méthodes
par this.http.get / post / put / delete.
