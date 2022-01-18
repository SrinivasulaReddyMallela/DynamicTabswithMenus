import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import{MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from  '@angular/material/tabs';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import{MatListModule} from '@angular/material/list'

const MaterialComponents:any[]=[
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    MaterialComponents,
    MatSidenavModule,
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],
  exports:[
    MaterialComponents,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ]
})
export class MeterialModule { }
