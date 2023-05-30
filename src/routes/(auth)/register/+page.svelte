<script lang="ts">
    import { Button, Checkbox, Container, Anchor, Title } from '@svelteuidev/core';
    import { EnvelopeClosed, EyeNone, LockClosed } from 'radix-icons-svelte';
    import { _ } from 'svelte-i18n';
    import { createForm } from "svelte-forms-lib"
    import * as yup from 'yup';

    import Input from '@/components/Input.svelte';
    import { goto } from '$app/navigation';
    import cookies from '@/services/cookies';

    const { form, errors, handleSubmit } = createForm({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeatPassword: '',
            rememberMe: true,
        },
        validationSchema: yup.object().shape({
            firstName: yup.string().min(3).max(20).required(),
            lastName: yup.string().min(3).max(20).required(),
            email: yup.string().email().required(),
            password: yup.string().required(),
            repeatPassword: yup.string().required().oneOf([yup.ref("password")], $_('PasswordsDoNotMatch')),
        }),
        onSubmit: values => {
            cookies.set('auth', values.email);
            goto('/');
        }
    });
</script>

<Title order={3} class="mt-6 text-center font-medium text-gray-900">{$_('CreateYourAccountInfo')}</Title>
<Container class="mt-8 w-full sm:w-1/2 space-y-2">
    <Input
        name="firstName"
        placeholder={$_('FirstName')}
        error={$errors.firstName}
        bind:value={$form.firstName}
    />
    <Input
        name="lastName"
        placeholder={$_('LastName')}
        error={$errors.lastName}
        bind:value={$form.lastName}
    />
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
    <Input
        name="repeatPassword"
        placeholder={$_('RepeatPassword')}
        icon={EyeNone}
        error={$errors.repeatPassword}
        bind:value={$form.repeatPassword}
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
    <Anchor underline={false} href="/login" class="font-medium text-emerald-600 hover:text-emerald-500 cursor-pointer" color='red'>{$_('BackToLogin')}</Anchor>
</Container>
<Container class="flex justify-center mt-8">
    <Button
        class="w-full sm:w-1/2 bg-emerald-600 hover:bg-emerald-700 py-2 px-4 text-sm font-medium text-white"
        on:click={handleSubmit}
    >
        <LockClosed slot="leftIcon" />
        {$_('CreateAccount')}
    </Button>
</Container>