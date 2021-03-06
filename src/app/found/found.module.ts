import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { FoundPage } from './found.page';

import { ShareComponent } from '../components/share/share.component'


const routes: Routes = [
  {
    path: '',
    component: FoundPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FoundPage,
    ShareComponent
  ]
})
export class FoundPageModule {}
