import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LayoutComponent } from 'src/app/layout/layout.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  public sidenavToggle = new EventEmitter();
  constructor(private layout: LayoutComponent) { }

  ngOnInit(): void {
    this.layout.addNewTab('home');
  }
  public onTaggleSidenav = () => {
    this.sidenavToggle.emit();
    console.log(this.sidenavToggle);
  }
}
