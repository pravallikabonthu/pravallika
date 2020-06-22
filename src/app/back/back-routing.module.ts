import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackPage } from './back.page';
import { HourlyPage } from '../hourly/hourly.page';

/*const routes: Routes = [
  {
    path: 'tabs',
    component: BackPage,
    children:[
      {
        path:'weekly',
        children:[
          {
            path:'',
            loadChildren:()=> import('../weekly/weekly.module').then(m => m.WeeklyPageModule)
          }
        ]
      },
      {
        path:'daily',
        children:[
          {
            path:'',
            loadChildren:()=> import('../daily/daily.module').then(m => m.DailyPageModule)
          }
        ]
      },
      {
        path:'hourly',
        children:[
          {
            path:'',
            loadChildren:()=> import('../hourly/hourly.module').then(m => m.HourlyPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo:'/tabs/weekly',
        pathMatch:'full'
      }
    ] 
  },
{
  path:'',
  redirectTo:'/tabs/weekly',
  pathMatch:'full'
}
];*/
const routes:Routes=[
  {
    path:'tabs',
    component:BackPage,
    children:[
      {
        path:'weekly',
        loadChildren:()=>import('../weekly/weekly.module').then(m=>m.WeeklyPageModule)
      },
      {
        path:'daily',
        loadChildren:()=>import('../daily/daily.module').then(m=>m.DailyPageModule)
      },
      {
        path:'hourly',
        loadChildren:()=>import('../hourly/hourly.module').then(m=>m.HourlyPageModule)
      },
      {
        path:'',
        redirectTo:'/tabs/hourly',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'/tabs/hourly',
    pathMatch:'full'

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackPageRoutingModule {}
