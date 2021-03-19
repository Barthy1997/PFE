import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { GestionCompteComponent } from './Administration/gestion-compte/gestion-compte.component';
import { RegisterComponent } from './Authentification/register/register.component';
import { LoginComponent } from './Authentification/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './Services/auth.guard';
import { RegisterCommercialComponent } from './Authentification/register-commercial/register-commercial.component';
import { GestionObjectifComponent } from './Administration/gestion-objectif/gestion-objectif.component';
import { GestionTourneComponent } from './Administration/gestion-tourne/gestion-tourne.component';
import { ZoneComponent } from './Administration/zone/zone.component';
import { StockComponent } from './Administration/stock/stock.component';
import { CamionnetteComponent } from './Administration/camionnette/camionnette.component';
import { TrackingComponent } from './Administration/tracking/tracking.component';
import { CatalogueComponent } from './Administration/catalogue/catalogue.component';
import { ArticleComponent } from './Administration/article/article.component';
import { DocumentComponent } from './Administration/document/document.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GestionCompteComponent,
    RegisterComponent,
    LoginComponent,
    RegisterCommercialComponent,
    GestionObjectifComponent,
    GestionTourneComponent,
    ZoneComponent,
    StockComponent,
    CamionnetteComponent,
    TrackingComponent,
    CatalogueComponent,
    ArticleComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
