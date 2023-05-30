import Cookie, { type CookieAttributes } from 'js-cookie';

export default {
    set(name: string, value: string, options?: CookieAttributes) {
        Cookie.set(name, value, options);
    },
    get(name: string) {
        return Cookie.get(name);
    },
    remove(name: string) {
        Cookie.remove(name);
    }
}