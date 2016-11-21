import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
@Component({
    selector: '<account>',
    templateUrl: 'app/account/account.component.html'
})
export class AccountComponent implements OnInit {
    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.forEach( (params:Params) => {
            console.log(params);
        });
    }
}