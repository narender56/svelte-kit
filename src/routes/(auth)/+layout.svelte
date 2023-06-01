<script lang="ts">
    import { _ } from 'svelte-i18n';
</script>

<div class="h-full w-1/2 m-auto">
    <div class="h-full w-full flex flex-col items-center justify-center">
        <h1 class="font-bold text-center my-6 text-6xl tracking-wide text-emerald-600 drop-shadow-md">{$_('AppName')}</h1>
        <slot />
    </div>
</div>