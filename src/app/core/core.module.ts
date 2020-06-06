import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';





@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    BsDropdownModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }
