import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },*/
  /*{
    path: '',
    redirectTo: 'back',
    pathMatch: 'full'
  },*/
  {
    path: 'device',
    loadChildren: () => import('./device/device.module').then( m => m.DevicePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./back/back.module').then( m => m.BackPageModule)
  }
 /* {
    path: 'hourly',
    loadChildren: () => import('./hourly/hourly.module').then( m => m.HourlyPageModule)
  },
 {
    path: 'daily',
    loadChildren: () => import('./daily/daily.module').then( m => m.DailyPageModule)
  },*/
  /*{
    path: 'weekly',
    loadChildren: () => import('./weekly/weekly.module').then( m => m.WeeklyPageModule)
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
