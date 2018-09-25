import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './modules/main/home/home.component';
import {ShellComponent} from './modules/main/shell/shell.component';

// Схема корневого роутинга
const appRoutes: Routes = [
  { path: '', component: ShellComponent, children: [
      { path: 'home', component: HomeComponent},
      { path: '**', redirectTo: 'home'}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModel {
}
