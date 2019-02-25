declare namespace Dojo {
    export interface Processable<T>{
        processTurn(state: T): void,
    }
}
