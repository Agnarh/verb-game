import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OptionListComponent } from './components/option-list/option-list.component';
import { CounterComponent } from './components/counter/counter.component';
import { SeriesComponent } from './components/series/series.component';
import { ViewComponent } from './components/view/view.component';
import { StartComponent } from './components/start/start.component';
import { ResultsComponent } from './components/results/results.component';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
    declarations: [
        AppComponent,
        OptionListComponent,
        CounterComponent,
        SeriesComponent,
        ViewComponent,
        StartComponent,
        ResultsComponent,
        ProgressComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
