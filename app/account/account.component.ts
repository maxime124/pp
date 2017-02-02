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
    private hiddenForm: boolean;

    constructor(
        private route:          ActivatedRoute,
        private accountService: AccountService
    ) {
        this.hiddenForm = true;
    }

    ngOnInit(): void {
        this.accountService.getAccounts().then(
            accounts => this.accounts = accounts
        );
    }

    updateListeAccount() {
        this.accountService.getAccounts().then(
            accounts => this.accounts = accounts
        );
        this.hiddenForm = true;
    }

    displayForm() {
        this.hiddenForm = false;
    }

    delete(id:string) {
        this.accountService.deleteAccount(id).then(
          deleted => this.updateListeAccount()
        );
    }
}