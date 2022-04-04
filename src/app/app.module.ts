import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OptionListComponent } from './components/option-list/option-list.component';
import { CounterComponent } from './components/counter/counter.component';
import { SeriesComponent } from './components/series/series.component';

@NgModule({
    declarations: [
        AppComponent,
        OptionListComponent,
        CounterComponent,
        SeriesComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
