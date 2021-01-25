import { Auth0ContextInterface } from './auth0-context';
/**
 * ```js
 * const {
 *   // Auth state:
 *   error,
 *   isAuthenticated,
 *   isLoading,
 *   user,
 *   // Auth methods:
 *   getAccessTokenSilently,
 *   getAccessTokenWithPopup,
 *   getIdTokenClaims,
 *   loginWithRedirect,
 *   loginWithPopup,
 *   logout,
 * } = useAuth0();
 * ```
 *
 * Use the `useAuth0` hook in your components to access the auth state and methods.
 */
declare const useAuth0: () => Auth0ContextInterface;
export default useAuth0;
//# sourceMappingURL=use-auth0.d.ts.map