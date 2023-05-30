<script>
    import { SvelteUIProvider } from '@svelteuidev/core';
    import { isLoading } from 'svelte-i18n'

    import '../app.scss';
    import '../i18n/i18n';
</script>

{#if $isLoading}
    Please wait...
{:else} 
    <SvelteUIProvider class="h-full w-full">
        <slot />
    </SvelteUIProvider>
{/if}