import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { account } from 'src/app/common/Entities/account';
import { AccountService } from 'src/app/repository/Services/account.service';
// import { account } from '../Entities/account';
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  accounts: account[] = [];
  constructor(private _accountservice: AccountService) { }

  ngOnInit(): void {
    this.accounts = Array.of(this._accountservice.GetAccountDetails());
    // console.log(this.accounts);
  }
  ngOnchange(): void {

  }

}
