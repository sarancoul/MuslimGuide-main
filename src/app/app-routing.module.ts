import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'liste-annonce',
    pathMatch: 'full'
  },
  {
    path: 'annonce',
    loadChildren: () => import('./user/annonce/annonce.module').then( m => m.AnnoncePageModule)
  },
  // {
  //   path: 'liste-annonce',
  //   loadChildren: () => import('./user/liste-annonce/liste-annonce.module').then( m => m.ListeAnnoncePageModule)
  // },
  {
    path: 'listeannonces',
    loadChildren: () => import('./admin/listeannonces/listeannonces.module').then( m => m.ListeannoncesPageModule)
  },
  {
    path: 'ajoutannonces',
    loadChildren: () => import('./admin/ajoutannonces/ajoutannonces.module').then( m => m.AjoutannoncesPageModule)
  },
  {
    path: 'ajoutmosque',
    loadChildren: () => import('./admin/ajoutmosque/ajoutmosque.module').then( m => m.AjoutmosquePageModule)
  },
  {
    path: 'pageaffichage',
    loadChildren: () => import('./user/pageaffichage/pageaffichage.module').then( m => m.PageaffichagePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
