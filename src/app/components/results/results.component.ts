import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ScoreService } from 'src/app/services/score-service/score.service';
import { ScoreInfo } from 'src/app/services/score-service/score.service.types';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
    @Output() onChangeView: EventEmitter<void> = new EventEmitter();
    scoreInfo: ScoreInfo = {
        score: 0,
        total: 0
    };

    constructor(private scoreService: ScoreService) { }

    ngOnInit(): void {
        this.scoreInfo = this.scoreService.getScore();
    }

    onStartClick(): void {
        this.onChangeView.emit();
        this.scoreService.reset();
    }
}
