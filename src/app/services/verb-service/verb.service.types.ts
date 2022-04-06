export type Option = {
    id: number;
    text: string;
    isCorrect: boolean;
};

export type SeriesItem = {
    verb: string;
    options: Option[];
};

export type VerbDto = {
    text: string;
    correct: string;
    incorrect: string[];
};