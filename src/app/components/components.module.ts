import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//要导出的组件
import { ShareComponent } from './share/share.component';

const coms:any[] = [
  ShareComponent
]

@NgModule({
  declarations: coms,
  imports: [
    CommonModule
  ],
  exports:coms,
  entryComponents:[]
})
export class ComponentsModule { }
