import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './modules/main/home/home.component';
import {ShellComponent} from './modules/main/shell/shell.component';
import {BioComponent} from './modules/main/bio/bio.component';
import {MusicComponent} from './modules/main/music/music.component';
import {PhotoComponent} from './modules/main/photo/photo.component';

// Схема корневого роутинга
const appRoutes: Routes = [
  { path: '', component: ShellComponent, children: [
      { path: 'home', component: HomeComponent},
      { path: 'bio', component: BioComponent},
      { path: 'music', component: MusicComponent},
      { path: 'gallery', component: PhotoComponent},
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
