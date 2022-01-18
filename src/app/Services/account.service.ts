import { Injectable } from '@angular/core';
import { account } from '../Entities/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accounts: account[] = [{
    name: 'Master Account',
    status: 'active'
  },
  {
    name: 'Testaccount',
    status: 'inactive'
  },
  {
    name: 'Hidden Account',
    status: 'unknown'
  }];
  constructor() { }
  GetAccountDetails(): any {
    return this.accounts;
  }

  CreateAccount(accountName: string, accountStatus: string) {
    this.accounts.push({ name: accountName, status: accountStatus });
    //console.log(this.accounts);
  }
  statusChanged(updateInfo: { id: number, newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
