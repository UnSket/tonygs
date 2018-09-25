import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell/shell.component';
import {AppRoutingModel} from '../../app.routing';
import { BioComponent } from './bio/bio.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModel
  ],
  declarations: [HomeComponent, HeaderComponent, ShellComponent, BioComponent]
})
export class MainModule { }
