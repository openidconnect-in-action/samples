export declare type User = any;
/**
 * The auth state which, when combined with the auth methods, make up the return object of the `useAuth0` hook.
 */
export interface AuthState {
    error?: Error;
    isAuthenticated: boolean;
    isLoading: boolean;
    user?: User;
}
/**
 * The initial auth state.
 */
export declare const initialAuthState: AuthState;
//# sourceMappingURL=auth-state.d.ts.map