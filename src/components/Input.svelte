<script lang="ts">
    import { TextInput, Text } from '@svelteuidev/core';

    export let name: string;
    export let placeholder: string;
    export let icon: any = undefined;
    export let value: any;
    export let error: string = '';
</script>

<TextInput
    placeholder={placeholder}
    icon={icon}
    bind:value={value}
/>
{#if error} 
    <Text class="first-letter:capitalize" size="xs" color="red">{error}</Text>
{/if}