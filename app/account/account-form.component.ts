import { Component } from '@angular/core';
import { Account }  from '../class/account';

@Component({
    moduleId: module.id,
    selector: 'account-form',
    templateUrl: 'account-form.component.html'
})

export class AccountFormComponent {
    model = new Account('10','test form','500');

    onSubmit() {
        console.log(this);
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}