import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
    @Input() public current: number = 1;
    @Input() public total: number = 4;

    constructor() { }

    ngOnInit(): void {
    }

}
