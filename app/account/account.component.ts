import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { AccountService } from './account.service';
import {Account} from "../class/account";

@Component({
    moduleId:       module.id,
    selector:       '<account>',
    templateUrl:    './account.component.html',
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

    addTest(): void{
        let newAccount = new Account('1','test','100');
        console.log(newAccount);
        this.accounts.push(newAccount);
    }
}