import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
@Component({
    selector: 'nav-center',
    templateUrl: 'app/nav/nav-center.component.html'
})
export class NavCenterComponent implements OnInit {
    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
    }
}