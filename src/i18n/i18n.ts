import { init, register } from 'svelte-i18n';

register('en', () => import('./translations/en.json'));

init({
    fallbackLocale: 'en',
    initialLocale: 'en',
});
  