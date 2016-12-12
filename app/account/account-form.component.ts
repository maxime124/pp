import { Component,EventEmitter,Output } from '@angular/core';
import { Account }  from '../class/account';
import { AccountService } from './account.service';

@Component({
    moduleId: module.id,
    selector: 'account-form',
    templateUrl: 'account-form.component.html',
    styleUrls: ['./account-form.style.css'],
    providers:      [AccountService]
})

export class AccountFormComponent {
    @Output() onAdded = new EventEmitter<Account>();

    model = new Account('',0);

    constructor(
        private accountService: AccountService
    ) {
    }

    onSubmit() {
        this.accountService.create(Object.assign({}, this.model)).then(
            account => this.onAdded.emit(account)
        );
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}