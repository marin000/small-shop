import { TFunction } from 'i18next';
import { z } from 'zod';

export const loginFormSchema = (t: TFunction) =>
  z.object({
    username: z
      .string()
      .min(1, { message: t('validation.required') })
      .max(150, { message: t('validation.usernameMax') }),
    password: z
      .string()
      .min(8, { message: t('validation.passwordMin') })
      .max(128, { message: t('validation.passwordMax') }),
  });
