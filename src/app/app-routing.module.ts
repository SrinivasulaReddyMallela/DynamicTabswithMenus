import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './Account/account-details/account-details.component';
import { CovidComponent } from './covid/covid.component';
import { EmpComponent } from './emp/emp.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   { 
     path:'home',
     component:HomeComponent
   },
   {
   path: 'emp',
   children: [
       { path: '', component: EmpComponent },
       { path: 'emp', component: EmpComponent }
   ]
  },
  {
    path: 'covid',
    children: [
        { path: '', component: CovidComponent },
        { path: 'covid', component: CovidComponent }
    ]
   },
   {
    path: 'account',
    children: [
        { path: '', component: AccountDetailsComponent },
        { path: 'Account', component: AccountDetailsComponent }
    ]
   },
   {
       path:'',
       redirectTo:'/home',
       pathMatch:'full'
    }
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
