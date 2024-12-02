import {z} from 'zod';

const passwordSchema = z
  .string()
  .nonempty({message: 'Password is required'})
  .min(8, {message: 'Password must be at least 8 characters'})
  .regex(/[A-Z]/, {
    message: 'Password must contain at least one uppercase letter',
  })
  .regex(/[a-z]/, {
    message: 'Password must contain at least one lowercase letter',
  })
  .regex(/[0-9]/, {message: 'Password must contain at least one number'})
  .regex(/[^A-Za-z0-9]/, {
    message: 'Password must contain at least one special character',
  });

export const loginValidationSchema = z.object({
  username: z.string().nonempty({message: 'User name is required'}),
  password: passwordSchema,
});
