import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScoreService } from 'src/app/services/score-service/score.service';
import { Option } from '../../services/verb-service/verb.service.types';

@Component({
    selector: 'app-option-list',
    templateUrl: './option-list.component.html',
    styleUrls: ['./option-list.component.scss'],
    inputs: ['options']
})
export class OptionListComponent implements OnInit {
    @Input() public options: Option[] = [];
    @Input() public verb: string = '';
    @Output() onIncrement: EventEmitter<void> = new EventEmitter();
    @Output() onClick: EventEmitter<void> = new EventEmitter();
    clickedId: number | null = null;

    constructor(private scoreService: ScoreService) { }

    ngOnInit(): void {
    }

    onOptionItemClick(id: number): void {
        if (!this.clickedId) {
            this.clickedId = id;
            setTimeout(() => {
                this.onIncrement.emit();
                this.clickedId = null;
            }, 1000);

            const chosenOption = this.options.find(option => option.id == id);
            if (chosenOption && chosenOption.isCorrect) {
                this.scoreService.increaseScore();
            }
        }

        this.onClick.emit();
    }
}
