import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import BaseButton from '@/components/baseButton';
import BaseInput from '@/components/baseInput';
import { LoginFormData } from '@/types/login';
import { useLoginRequest } from '@/api/login';
import { loginFormSchema } from './validation/loginFormSchema';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const { mutate: loginMutation, isPending: loading } =
    useLoginRequest();

  const formOptions = {
    resolver: zodResolver(loginFormSchema(t)),
    mode: 'onChange' as const,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>(formOptions);

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    loginMutation(data);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 mt-16">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {t('login.title')}
        </h1>
        <form id="form" name="form" onSubmit={handleSubmit(onSubmit)}>
          <BaseInput
            id="username"
            label={t('login.usernameLabel')}
            type="text"
            placeholder={t('login.usernamePlaceholder')}
            required
            {...register('username')}
            error={errors.username?.message}
          />

          <BaseInput
            id="password"
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
