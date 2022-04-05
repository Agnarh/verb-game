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
    id: number;
    text: string;
};

export type VerbDataDto = {
    id: number;
    verbId: number;
    correct: string[];
    incorrect: string[];
};