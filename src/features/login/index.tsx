import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import BaseButton from '@/components/baseButton';
import BaseInput from '@/components/baseInput';
import { LoginFormData } from '@/types/login';
import { useLoginRequest } from '@/api/login';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const { mutate: loginMutation, isPending: loading } =
    useLoginRequest();

  const loginFormSchema = z.object({
    username: z
      .string()
      .min(1, { message: t('validation.required') })
      .max(150, { message: t('validation.usernameMax') }),
    password: z
      .string()
      .min(8, { message: t('validation.passwordMin') })
      .max(128, { message: t('validation.passwordMax') }),
  });

  const formOptions = {
    resolver: zodResolver(loginFormSchema),
    mode: 'onChange' as const,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>(formOptions);

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
    loginMutation(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {t('login.title')}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BaseInput
            label={t('login.usernameLabel')}
            type="text"
            placeholder={t('login.usernamePlaceholder')}
            required
            {...register('username')}
            error={errors.username?.message}
          />

          <BaseInput
            label={t('login.passwordLabel')}
            type="password"
            placeholder={t('login.passwordPlaceholder')}
            required
            {...register('password')}
            error={errors.password?.message}
          />

          <BaseButton
            label={t('login.submitButton')}
            type="submit"
            variant="primary"
            className="w-full mt-4"
            disabled={!isValid || loading}
          />
        </form>

        <p className="text-sm text-center mt-4">
          {t('login.noAccount')}{' '}
          <a href="#" className="text-blue-500 hover:underline">
            {t('login.registerLink')}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
