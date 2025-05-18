import { translate } from '@/src/config/i18n/translate';
import { z, ZodErrorMap } from 'zod';

export const zodI18nMap: ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case z.ZodIssueCode.invalid_type:
      if (issue.expected === 'string') {
        return { message: translate('form.errors.required_string') };
      }
      return { message: translate('form.errors.invalid_type') };

    case z.ZodIssueCode.invalid_string:
      if (issue.validation === 'email') {
        return { message: translate('form.errors.invalid_email') };
      }
      return { message: translate('form.errors.invalid_string') };

    case z.ZodIssueCode.too_small:
      return {
        message: translate('form.errors.too_short', { min: issue.minimum })
      };

    default:
      return { message: translate('form.errors.default') };
  }
};
