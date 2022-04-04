import { Component, OnInit } from '@angular/core';
import { Option } from './option-list.types';
import options from './options.json';

@Component({
    selector: 'app-option-list',
    templateUrl: './option-list.component.html',
    styleUrls: ['./option-list.component.scss']
})
export class OptionListComponent implements OnInit {
    options: Option[] = [];

    constructor() { }

    ngOnInit(): void {
        this.options = options.options;
    }

}
