import type { LayoutData } from '../$types';
import cookies from '@/services/cookies';
import { goto } from '$app/navigation';

export let ssr = false;
export let csr = true;

export async function load(layoutData: LayoutData) {
    console.log({ layoutData });
    const auth = cookies.get('auth')

    if (!auth) {
        goto('/login')
    }
}
