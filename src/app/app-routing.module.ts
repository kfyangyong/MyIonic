import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'my', loadChildren: './my/my.module#MyPageModule' },
  { path: 'homedetial', loadChildren: './pages/homedetial/homedetial.module#HomedetialPageModule' },
  { path: 'mydetail', loadChildren: './pages/mydetail/mydetail.module#MydetailPageModule' },
  { path: 'myabout', loadChildren: './pages/myabout/myabout.module#MyaboutPageModule' },
  { path: 'myset', loadChildren: './pages/myset/myset.module#MysetPageModule' },
  { path: 'found', loadChildren: './found/found.module#FoundPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
