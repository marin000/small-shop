import { z } from 'zod';

export const checkoutFormSchema = (t: any) =>
  z.object({
    cvc: z
      .string()
      .regex(/^\d{3,4}$/, { message: t('validation.cvcFormat') })
      .min(3, { message: t('validation.cvcMin') })
      .max(4, { message: t('validation.cvcMax') }),
  });
