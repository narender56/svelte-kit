<script lang="ts">
    import { Button, CheckboxGroup } from 'stwui';
    import { EnvelopeClosed, EyeNone, LockClosed } from 'radix-icons-svelte';
    import { _ } from 'svelte-i18n';
    import { createForm } from "svelte-forms-lib"
    import * as yup from 'yup';

    import Input from '@/components/Input.svelte';
    import { goto } from '$app/navigation';
    import cookies from '@/services/cookies';

    let submittingForm = false;

    const { form, errors, handleSubmit, handleChange } = createForm({
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
            submittingForm = true;
            setTimeout(() => {
                cookies.set('auth', values.email);
                goto('/');
            }, 1000)
        }
    });
</script>

<h3 class="text-center font-medium text-gray-900">{$_('SignInInfo')}</h3>
<div class="mt-8 w-full sm:w-1/2 space-y-2">
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
</div>
<div class="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center mt-8 w-full sm:w-1/2 space-y-2">
    <CheckboxGroup.Checkbox name="RememberMe" value="cb-1" bind:checked={$form.rememberMe}>
        <CheckboxGroup.Checkbox.Label slot="label">{$_('RememberMe')}</CheckboxGroup.Checkbox.Label>
    </CheckboxGroup.Checkbox>
    <Button class="font-medium text-emerald-600 hover:text-emerald-500 cursor-pointer">{$_('ForgotPassword')}</Button>
</div>
<Button class="w-full sm:w-1/2 bg-emerald-600 hover:bg-emerald-700 mt-8 py-2 px-4 text-sm font-medium text-white" on:click={handleSubmit} disabled={submittingForm} loading={submittingForm}>
    <LockClosed />
    {$_('SignIn')}
</Button>