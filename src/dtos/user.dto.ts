import {z} from 'zod';
import { UserSchema } from '../types/user.types';

export const CreateUserDto = UserSchema.extend({
    password: z.string().min(6),
})

export type CreateUserDto = z.infer<typeof CreateUserDto>;

export const UpdateUserDto = z.object({
    username: z.string(),
    email: z.email(),
    name: z.string(),
    age: z.number().optional(),
    

});

export type UpdateUserDto = z.infer<typeof UpdateUserDto>;

