import { Component, OnInit, Input } from '@angular/core';
import { account } from 'src/app/Entities/account';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.scss']
})
export class AccountUpdateComponent implements OnInit {
  // @Input() account: account=new account();
  // @Input() id: number=0;
  //*ngFor="let account of accounts; let i = index" [account]="account" [id]="i"
  accounts: account[] = [];
  constructor(private _AccountService: AccountService) { }

  ngOnInit(): void {
    this.accounts = this._AccountService.GetAccountDetails();
    //console.log(this.accounts);
  }



  onSetTo(status: string, Id: number) {
    this._AccountService.statusChanged({ id: Id, newStatus: status });
    //console.log('A server status changed, new status: ' + status);
  }
}
