import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../app/modules/material.module';
import { SharedModule } from './shared/shared.module';
import { SideNavComponent, SideNavItemComponent } from '../app/core/sidenav/sidenav.component';
import { HeaderComponent } from '../app/core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SideNavItemComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
