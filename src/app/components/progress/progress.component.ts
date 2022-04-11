import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
    @Input() total: number = 0;
    currentProgress: number = 0;
    
    _progressValue: number = 0;
    get value() {
        return Math.round(this.currentProgress * 100 / this.total);
    }

    constructor() { }

    ngOnInit(): void {
        this.currentProgress = 0;
    }

    incrementProgress() {
        this.currentProgress++;
    }
}
