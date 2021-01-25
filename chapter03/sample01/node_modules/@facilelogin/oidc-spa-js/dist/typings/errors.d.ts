export declare class GenericError extends Error {
    error: string;
    error_description: string;
    constructor(error: string, error_description: string);
    static fromPayload({ error, error_description }: {
        error: string;
        error_description: string;
    }): GenericError;
}
export declare class AuthenticationError extends GenericError {
    state: string;
    appState: any;
    constructor(error: string, error_description: string, state: string, appState?: any);
}
export declare class TimeoutError extends GenericError {
    constructor();
}
export declare class PopupTimeoutError extends TimeoutError {
    popup: Window;
    constructor(popup: Window);
}
