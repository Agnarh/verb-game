import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
    _progressValue: number = 0;
    get value() {
        return this._progressValue;
    }
    @Input() set value(progressValue: number) {
        this._progressValue = Math.round(progressValue * 100);
    }

    constructor() { }

    ngOnInit(): void {
    }

}
