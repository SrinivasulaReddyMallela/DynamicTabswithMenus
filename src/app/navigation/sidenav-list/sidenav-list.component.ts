import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LayoutComponent } from 'src/app/layout/layout.component';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Output()
  sidenavclose = new EventEmitter();
  constructor(private layout: LayoutComponent) { }

  ngOnInit(): void {
  }
  public onsidenavClose = (event: any) => {
    this.sidenavclose.emit();
    console.log(event);
    this.layout.addNewTab(event);
  }
}
