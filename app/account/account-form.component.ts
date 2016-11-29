import { Component,EventEmitter,Output } from '@angular/core';
import { Account }  from '../class/account';

@Component({
    moduleId: module.id,
    selector: 'account-form',
    templateUrl: 'account-form.component.html',
    styleUrls: ['./account-form.style.css']
})

export class AccountFormComponent {
    @Output() onAdded = new EventEmitter<Account>();

    model = new Account('','','');
    hidden = false;


    onSubmit() {
        this.onAdded.emit(this.model);
        this.hidden = true;
    }

    addAccount() {
        console.log('add',this);
    }

    displayForm() {
        this.hidden = false;
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}