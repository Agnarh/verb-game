import { Injectable } from '@angular/core';
import { ScoreInfo } from './score.service.types';
// import { ScoreMessage } from './score.service.types';

@Injectable({
    providedIn: 'root'
})
export class ScoreService {
    // @Output() message$: EventEmitter<ScoreMessage> = new EventEmitter();
    currenctScore: number = 0;
    total: number = 0;

    constructor() { }

    init(total: number): void {
        this.total = total;
        // this.message$.emit({
        //     type: 'init',
        //     payload: {
        //         total
        //     }
        // });
    }

    reset(): void {
        this.currenctScore = 0;
        this.total = 0;
        // this.message$.emit({
        //     type: 'reset'
        // });
    }

    increaseScore(): void {
        if (this.currenctScore < this.total) {
            this.currenctScore++;
            // this.message$.emit({
            //     type: 'increment',
            //     payload: {
            //         currentScore: this.currenctScore,
            //         total: this.total
            //     }
            // });
        }
    }

    getScore(): ScoreInfo {
        return {
            score: this.currenctScore,
            total: this.total
        };
    }
}
