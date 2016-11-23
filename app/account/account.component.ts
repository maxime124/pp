import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { AccountService } from './account.service';
import {Account} from "../class/account";

@Component({
    selector:       '<account>',
    templateUrl:    'app/account/account.component.html',
    providers:      [AccountService]
})
export class AccountComponent implements OnInit {
    accounts: Account[];

    constructor(
        private route:          ActivatedRoute,
        private accountService: AccountService
    ) {

    }

    ngOnInit(): void {
        this.accountService.getAccounts().then(
            accounts => this.accounts = accounts
        );
    }
}