import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from '../../services/verb-service/verb-service.service.types';

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
    clickedId: number | null = null;

    constructor() { }

    ngOnInit(): void {
    }

    onOptionItemClick(id: number): void {
        if (!this.clickedId) {
            this.clickedId = id;
            setTimeout(() => {
                this.onIncrement.emit();
                this.clickedId = null;
            }, 1000);
        }
    }
}
