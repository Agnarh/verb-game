import { Injectable } from '@angular/core';
import { ScoreInfo } from './score.service.types';

@Injectable({
    providedIn: 'root'
})
export class ScoreService {
    currenctScore: number = 0;
    total: number = 0;

    constructor() { }

    init(total: number): void {
        this.total = total;
    }

    reset(): void {
        this.currenctScore = 0;
        this.total = 0;
    }

    increaseScore(): void {
        if (this.currenctScore < this.total) {
            this.currenctScore++;
        }
    }

    getScore(): ScoreInfo {
        return {
            score: this.currenctScore,
            total: this.total
        };
    }
}
