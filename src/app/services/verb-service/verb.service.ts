import { Injectable } from '@angular/core';
import take from 'lodash-es/take';
import shuffle from 'lodash-es/shuffle';
import jsonData from './options.json';
import { SeriesItem, VerbDto } from './verb.service.types';

const NUMBER_OF_VARIANTS = 4;

@Injectable({
    providedIn: 'root'
})
export class VerbService {

    constructor() { }

    generateSeries(total: number): SeriesItem[] {
        const { verbs } = jsonData;
        const result = take(shuffle(verbs), total)
            .map((verb: VerbDto) => {
                const result = [];

                result.push({
                    text: verb.correct,
                    isCorrect: true
                });
                const incorrectOptions = take(verb.incorrect, NUMBER_OF_VARIANTS - 1)
                    .map(option => ({
                        text: option,
                        isCorrect: false
                    }));
                result.push(...incorrectOptions);

                const options = shuffle(result)
                    .map((item, index) => ({
                        ...item,
                        id: index + 1
                    }));
                
                return {
                    verb: verb.text,
                    options
                };
            });

        return result;
    }
}
