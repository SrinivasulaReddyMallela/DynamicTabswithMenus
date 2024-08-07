import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpComponent } from './emp/emp.component';
import { FormsModule } from '@angular/forms';
//import { CovidComponent } from './covid/covid.component';
import { AccountCreateComponent } from './Account/account-create/account-create.component';
import { AccountDetailsComponent } from './Account/account-details/account-details.component';
import { AccountUpdateComponent } from './Account/account-update/account-update.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { TabService } from './repository/Services/tab.service';
import { ContentContainerDirective } from './common/directives/content-container.directive';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { MeterialModule } from './common/meterial/meterial.module';
import { TabContentComponent } from './common/directives/tab-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    EmpComponent,
    //CovidComponent,
    AccountCreateComponent,
    AccountDetailsComponent,
    AccountUpdateComponent,
    TabContentComponent,
    ContentContainerDirective,
    TemplateformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MeterialModule,
    HttpClientModule,
    FormsModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [TabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
