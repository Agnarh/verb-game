// export type ScoreMessageType = 'reset' | 'init' | 'increment';

// type Event<Type extends ScoreMessageType, Payload = {}> = {
//     type: Type;
//     payload?: Payload;
// };

// export type ScoreMessage = 
//     | Event<'reset'>
//     | Event<'init', { total: number; }>
//     | Event<'increment', { total: number; currentScore: number; }>

export type ScoreInfo = {
    total: number;
    score: number;
};