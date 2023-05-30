<script lang="ts">
    import { Center, Container, Title } from "@svelteuidev/core";
    import { _ } from 'svelte-i18n';
</script>

<Container class="h-full w-full">
    <Center class="h-full w-full">
        <Container class="w-full">
            <Title order={1} class="font-bold text-center my-6 text-6xl tracking-wide text-emerald-600 drop-shadow-md">{$_('AppName')}</Title>
            <slot />
        </Container>
    </Center>
</Container>