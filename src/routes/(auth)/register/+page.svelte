<script lang="ts">
    import { Button, CheckboxGroup } from 'stwui';
    import { EnvelopeClosed, EyeNone } from 'radix-icons-svelte';
    import { _ } from 'svelte-i18n';
    import { createForm } from "svelte-forms-lib"
    import * as yup from 'yup';

    import Input from '@/components/Input.svelte';
    import { goto } from '$app/navigation';
    import cookies from '@/services/cookies';

    let submittingForm = false;

    const { form, errors, handleSubmit, handleChange } = createForm({
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
            submittingForm = true;
            setTimeout(() => {
                cookies.set('auth', values.email);
                goto('/');
            }, 1000)
        }
    });
</script>

<h3 class="text-center font-medium text-gray-900">{$_('CreateYourAccountInfo')}</h3>
<div class="mt-8 w-full sm:w-1/2 space-y-2">
    <Input
        name="firstName"
        placeholder={$_('FirstName')}
        error={$errors.firstName}
        bind:value={$form.firstName}
        on:change={(e) => handleChange(e.detail)}
    />
    <Input
        name="lastName"
        placeholder={$_('LastName')}
        error={$errors.lastName}
        bind:value={$form.lastName}
        on:change={(e) => handleChange(e.detail)}
    />
    <Input
        name="email"
        placeholder={$_('Email')}
        icon={EnvelopeClosed}
        error={$errors.email}
        bind:value={$form.email}
        on:change={(e) => handleChange(e.detail)}
    />
    <Input
        name="password"
        placeholder={$_('Password')}
        icon={EyeNone}
        error={$errors.password}
        bind:value={$form.password}
        on:change={(e) => handleChange(e.detail)}
    />
    <Input
        name="repeatPassword"
        placeholder={$_('RepeatPassword')}
        icon={EyeNone}
        error={$errors.repeatPassword}
        bind:value={$form.repeatPassword}
        on:change={(e) => handleChange(e.detail)}
    />
</div>
<div class="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center mt-8 w-full sm:w-1/2 space-y-2">
    <CheckboxGroup.Checkbox name="RememberMe" value="cb-1" bind:checked={$form.rememberMe}>
        <CheckboxGroup.Checkbox.Label slot="label">{$_('RememberMe')}</CheckboxGroup.Checkbox.Label>
    </CheckboxGroup.Checkbox>
    <a href="/login" class="font-medium text-emerald-600 hover:text-emerald-500 cursor-pointer" color='red'>{$_('BackToLogin')}</a>
</div>
<Button class="w-full sm:w-1/2 mt-8 bg-emerald-600 hover:bg-emerald-700 py-2 px-4 text-sm font-medium text-white" disabled={submittingForm} loading={submittingForm} on:click={handleSubmit}>
    {$_('CreateAccount')}
</Button>