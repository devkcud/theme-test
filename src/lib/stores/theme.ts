import cookie, { type CookieSerializeOptions } from 'cookie';
import Cookies from 'js-cookie';
import { writable } from 'svelte/store';

export const THEME_COOKIE_NAME: string = 'colorscheme';
export const THEME_COOKIE_OPTS: CookieSerializeOptions = {
  path: '/',
  maxAge: 604_800, // 7 days
  httpOnly: false
};

export type ThemeColor = 'dark' | 'light';
export const theme = writable<ThemeColor>();

export function isMode(color: ThemeColor): boolean {
  return Cookies.get(THEME_COOKIE_NAME) === color; // Not the best but it will do :)
}

export function setCookieTheme(color: ThemeColor) {
  document.cookie = cookie.serialize(THEME_COOKIE_NAME, color, THEME_COOKIE_OPTS);
}
