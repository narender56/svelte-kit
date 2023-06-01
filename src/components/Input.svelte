<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { Input } from 'stwui';

    export let name: string;
    export let placeholder: string;
    export let label: string = '';
    export let icon: any = undefined;
    export let value: any;
    export let error: string = '';
   
   const dispatch = createEventDispatcher();
</script>

<Input
    name={name}
    placeholder={placeholder}
    icon={icon}
    error={error}
    on:input={(e) => dispatch('change', e)}
    bind:value={value}
>
    {#if label}
        <Input.Label slot="label">{label}</Input.Label>
    {/if}
</Input>