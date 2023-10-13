export const NAVIGATION_THEME = { MAIN: 'main', SECONDARY: 'secondary' };
export const LOGO_THEME = { BLUE: 'blue', WHITE: 'white' };
export const BUTTON_THEME = { MAIN: 'main', SECONDARY: 'secondary' };
export const SUCCESS = 'SUCCESS';

export const SITE_ID = 1005537;
export const SITE_NAME = 'MyInstaSync';

export const Auth0Config = {
  domain: process.env.REACT_APP_DOMAIN,
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: window?.location?.origin,
};