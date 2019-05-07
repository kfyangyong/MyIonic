import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'my', loadChildren: './my/my.module#MyPageModule' },
  { path: 'homedetial', loadChildren: './pages/homedetial/homedetial.module#HomedetialPageModule' },
  { path: 'mydetail', loadChildren: './pages/mydetail/mydetail.module#MydetailPageModule' },
  { path: 'myset', loadChildren: './pages/myset/myset.module#MysetPageModule' },
  { path: 'found', loadChildren: './found/found.module#FoundPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'myabout', loadChildren: './pages/myabout/myabout.module#MyaboutPageModule' },
  { path: 'message', loadChildren: './message/message.module#MessagePageModule' },
  { path: 'messagedetail', loadChildren: './pages/messagedetail/messagedetail.module#MessagedetailPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'blooth', loadChildren: './pages/blooth/blooth.module#BloothPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
