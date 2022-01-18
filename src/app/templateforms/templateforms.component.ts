import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.scss']
})
export class TemplateformsComponent implements OnInit {
  username: string = "";
  email: string = "";
  secret: string = "";
  submitted: boolean = false;
  @ViewChild("f", { static: false }) signform?: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

    this.username = f?.form?.value?.username;
    this.email = f?.form?.value?.email;
    this.secret = f?.form?.value?.secret;

    console.log(this.username);
    console.log(this.email);
    console.log(this.secret);
    this.submitted = true;
    f.resetForm();
  }
}
