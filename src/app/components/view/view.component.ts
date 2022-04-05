import { Component, OnInit } from '@angular/core';

type Views = 'start' | 'game' | 'results';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
    currentView: Views = 'start';

    constructor() { }

    ngOnInit(): void {
    }

    goToView(view: Views) {
        this.currentView = view;
    }
}
