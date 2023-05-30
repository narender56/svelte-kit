<script lang="ts">
    import { Button, Checkbox, Container, Center, Text, Title } from '@svelteuidev/core';
    import { EnvelopeClosed, EyeNone, LockClosed } from 'radix-icons-svelte';
    import { _ } from 'svelte-i18n';
    import { createForm } from "svelte-forms-lib"
    import * as yup from 'yup';

    import Input from '@/components/Input.svelte';
    import { goto } from '$app/navigation';
    import cookies from '@/services/cookies';

    const { form, errors, handleSubmit } = createForm({
        initialValues: {
            email: '',
            password: '',
            rememberMe: true,
        },
        validationSchema: yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required()
        }),
        onSubmit: values => {
            cookies.set('auth', values.email);
            goto('/');
        }
    });
</script>

<Container class="h-full w-full">
    <Center class="h-full w-full">
        <Container class="w-full">
            <Title order={1} class="font-bold text-center my-6 text-6xl tracking-wide text-emerald-600 drop-shadow-md">{$_('AppName')}</Title>
            <Title order={3} class="mt-6 text-center font-medium text-gray-900">{$_('SignInInfo')}</Title>
            <Container class="mt-8 w-full sm:w-1/2 space-y-2">
                <Input
                    name="email"
                    placeholder={$_('Email')}
                    icon={EnvelopeClosed}
                    error={$errors.email}
                    bind:value={$form.email}
                />
                <Input
                    name="password"
                    placeholder={$_('Password')}
                    icon={EyeNone}
                    error={$errors.password}
                    bind:value={$form.password}
                />
            </Container>
            <Container class="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center mt-8 w-full sm:w-1/2 space-y-2">
                <Checkbox
                    color="teal"
                    size='sm'
                    class="text-gray-900"
                    label={$_('RememberMe')}
                    bind:checked={$form.rememberMe}
                />
                <Text class="font-medium text-emerald-600 hover:text-emerald-500 cursor-pointer" color='red'>{$_('ForgotPassword')}</Text>
            </Container>
            <Container class="flex justify-center mt-8">
                <Button
                    class="w-full sm:w-1/2 bg-emerald-600 hover:bg-emerald-700 py-2 px-4 text-sm font-medium text-white"
                    on:click={handleSubmit}
                >
                    <LockClosed slot="leftIcon" />
                    {$_('SignIn')}
                </Button>
            </Container>
        </Container>
    </Center>
</Container>