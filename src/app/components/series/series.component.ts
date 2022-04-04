import { Component, OnInit } from '@angular/core';
import { VerbServiceService } from 'src/app/services/verb-service/verb-service.service';
import { Option, SeriesItem } from '../../services/verb-service/verb-service.service.types';

@Component({
    selector: 'app-series',
    templateUrl: './series.component.html',
    styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
    current: number = 1;
    total: number = 2;
    series: SeriesItem[] = [];

    constructor(private verbService: VerbServiceService) { }

    ngOnInit(): void {
        this.series = this.verbService.generateSeries();
    }

    increment(): void {
        if (this.current < this.total) {
            this.current++;
        }
    }
}
