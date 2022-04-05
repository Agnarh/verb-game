import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ScoreService } from 'src/app/services/score-service/score.service';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
    @Output() onChangeView: EventEmitter<void> = new EventEmitter();

    constructor(private scoreService: ScoreService) { }

    ngOnInit(): void {
    }

    onStartClick(): void {
        this.onChangeView.emit();
        this.scoreService.reset();
    }
}
