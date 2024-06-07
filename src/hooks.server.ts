import { THEME_COOKIE_NAME, THEME_COOKIE_OPTS } from '$lib/stores/theme';
import type { CookieSerializeOptions } from 'cookie';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  let theme: string | undefined = event.cookies.get(THEME_COOKIE_NAME);

  if (!theme) {
    theme = 'dark';
  }

  event.cookies.set(
    THEME_COOKIE_NAME,
    theme,
    THEME_COOKIE_OPTS as CookieSerializeOptions & {
      path: string;
    }
  );

  return await resolve(event, {
    // In the app.html, there is a data-theme attribute in the html tag
    transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
  });
};
