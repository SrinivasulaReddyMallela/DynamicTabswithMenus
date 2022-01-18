import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularEightPMClassApp';

  constructor(private spinner: SpinnerVisibilityService) {
    // show the spinner
    spinner.show();
    //////////////
    // HTTP requests performed between show && hide won't have any side effect on the spinner.
    /////////////
    // hide the spinner
    spinner.hide();
}
  public spinkit = Spinkit;
  public sidenavtoggle()
  {

  }
}
