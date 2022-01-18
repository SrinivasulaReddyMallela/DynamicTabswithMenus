import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent implements OnInit {

  constructor(private _AccountService: AccountService) { }

  ngOnInit(): void {
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this._AccountService.CreateAccount(accountName, accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
  }

}
