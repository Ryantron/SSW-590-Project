import { z } from 'zod';
import { usernameSchema } from '@/shared/validations/common';

// Password Complexity: https://forum.codewithmosh.com/t/password-complexity-for-zod/23622
// Minimum, 1 uppercase, 1 lowercase, 1 number, 1 special character

export const authSchema = z
  .object({
    username: usernameSchema,
    password: z.string().trim().min(8).max(64),
  })
  .superRefine(({ password }, checkPassComplexity) => {
    const containsUppercase = (ch) => /[A-Z]/.test(ch);
    const containsLowercase = (ch) => /[a-z]/.test(ch);
    const containsSpecialChar = (ch) =>
      /[`!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?~ ]/.test(ch);
    let countOfUpperCase = 0,
      countOfLowerCase = 0,
      countOfNumbers = 0,
      countOfSpecialChar = 0;
    for (let i = 0; i < password.length; i++) {
      let ch = password.charAt(i);
      if (!isNaN(+ch)) countOfNumbers++;
      else if (containsUppercase(ch)) countOfUpperCase++;
      else if (containsLowercase(ch)) countOfLowerCase++;
      else if (containsSpecialChar(ch)) countOfSpecialChar++;
    }
    if (
      countOfLowerCase < 1 ||
      countOfUpperCase < 1 ||
      countOfSpecialChar < 1 ||
      countOfNumbers < 1
    ) {
      checkPassComplexity.addIssue({
        code: 'custom',
        message:
          'Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character',
      });
    }
  });
