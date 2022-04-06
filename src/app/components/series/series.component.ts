import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ScoreService } from 'src/app/services/score-service/score.service';
import { VerbService } from 'src/app/services/verb-service/verb.service';
import { Option, SeriesItem } from '../../services/verb-service/verb.service.types';

@Component({
    selector: 'app-series',
    templateUrl: './series.component.html',
    styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
    @Output() onChangeView: EventEmitter<void> = new EventEmitter();
    current: number = 1;
    total: number = 2;
    series: SeriesItem[] = [];

    constructor(
        private verbService: VerbService,
        private scoreService: ScoreService) { }

    ngOnInit(): void {
        this.series = this.verbService.generateSeries(this.total);
        this.scoreService.init(this.total);
    }

    increment(): void {
        if (this.current < this.total) {
            this.current++;
        } else {
            this.onChangeView.emit();
        }
    }
}
