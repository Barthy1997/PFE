import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './Administration/article/article.component';
import { CamionnetteComponent } from './Administration/camionnette/camionnette.component';
import { CatalogueComponent } from './Administration/catalogue/catalogue.component';
import { DocumentComponent } from './Administration/document/document.component';
import { GestionCompteComponent } from './Administration/gestion-compte/gestion-compte.component';
import { GestionObjectifComponent } from './Administration/gestion-objectif/gestion-objectif.component';
import { GestionTourneComponent } from './Administration/gestion-tourne/gestion-tourne.component';
import { StockComponent } from './Administration/stock/stock.component';
import { TrackingComponent } from './Administration/tracking/tracking.component';
import { ZoneComponent } from './Administration/zone/zone.component';
import { LoginComponent } from './Authentification/login/login.component';
import { RegisterCommercialComponent } from './Authentification/register-commercial/register-commercial.component';
import { RegisterComponent } from './Authentification/register/register.component';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
{path: '',component:LoginComponent}, 
{path: 'index',component:IndexComponent,canActivate:[AuthGuard]},
{path: 'GestionCompte',component:GestionCompteComponent,canActivate:[AuthGuard]},
{path: 'inscriptionClient',component:RegisterComponent,canActivate:[AuthGuard]},
{path: 'inscriptionCommercial',component:RegisterCommercialComponent,canActivate:[AuthGuard]},
{path: 'GestionTourne',component:GestionTourneComponent,canActivate:[AuthGuard]},
{path: 'GestionObjectif',component:GestionObjectifComponent,canActivate:[AuthGuard]},
{path: 'GestionCaminionnette',component:CamionnetteComponent,canActivate:[AuthGuard]},
{path: 'GetionZone',component:ZoneComponent,canActivate:[AuthGuard]},
{path: 'GestionCatalogue',component:CatalogueComponent,canActivate:[AuthGuard]},
{path: 'GestionStock',component:StockComponent,canActivate:[AuthGuard]},
{path: 'GestionArticle',component:ArticleComponent,canActivate:[AuthGuard]},
{path: 'GestionDocument',component:DocumentComponent,canActivate:[AuthGuard]},
{path: 'Gestiontracking',component:TrackingComponent,canActivate:[AuthGuard]},
{ path: '**',component:IndexComponent,canActivate:[AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
