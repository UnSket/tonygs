import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell/shell.component';
import {AppRoutingModel} from '../../app.routing';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModel
  ],
  declarations: [HomeComponent, HeaderComponent, ShellComponent]
})
export class MainModule { }
