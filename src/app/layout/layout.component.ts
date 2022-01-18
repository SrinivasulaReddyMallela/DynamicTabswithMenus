import { Component, OnInit } from '@angular/core';
import { AccountDetailsComponent } from '../Account/account-details/account-details.component';
import { CovidComponent } from '../covid/covid.component';
import { EmpComponent } from '../emp/emp.component';
import { HomeComponent } from '../home/home.component';
import { Tab } from '../tab.model';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  tabs = new Array<Tab>();
  selectedTab: number = 0;

  constructor(private tabService: TabService) { }

  ngOnInit(): void {
    this.tabService.tabSub.subscribe(tabs => {
      this.tabs = tabs;
      this.selectedTab = tabs.findIndex(tab => tab.active);
    });
  }
  tabChanged(event: any) {
    console.log("tab changed");
  }

  addNewTab(Componentname: string) {

    if (Componentname === "home") {
      this.tabService.addTab(
        new Tab(HomeComponent, "Home", { parent: "LayoutComponent" })
      );
    }
    else if (Componentname === "emp") {
      this.tabService.addTab(
        new Tab(EmpComponent, "Employee", { parent: "LayoutComponent" })
      );
    }
    else if (Componentname === "covid") {
      this.tabService.addTab(
        new Tab(CovidComponent, "Covid Data", { parent: "LayoutComponent" })
      );
    }
    else if (Componentname === "account") {
      this.tabService.addTab(
        new Tab(AccountDetailsComponent, "Account Data", { parent: "LayoutComponent" })
      );
    }
  }

  removeTab(index: number): void {
    this.tabService.removeTab(index);
  }

}
