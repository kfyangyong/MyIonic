import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'found',
        children: [
          {
            path: '',
            loadChildren: '../found/found.module#FoundPageModule'
          }
        ]
      },
      {
        path: 'my',
        children: [
          {
            path: '',
            loadChildren: '../my/my.module#MyPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
