import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeterialModule } from './meterial/meterial.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpComponent } from './emp/emp.component';
import { FormsModule } from '@angular/forms';
import { CovidComponent } from './covid/covid.component';
import { AccountCreateComponent } from './Account/account-create/account-create.component';
import { AccountDetailsComponent } from './Account/account-details/account-details.component';
import { AccountUpdateComponent } from './Account/account-update/account-update.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { TabService } from './tab.service';
import { TabContentComponent } from './tab-content.component';
import { ContentContainerDirective } from './content-container.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    EmpComponent,
    CovidComponent,
    AccountCreateComponent,
    AccountDetailsComponent,
    AccountUpdateComponent,
    TabContentComponent,
    ContentContainerDirective
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
