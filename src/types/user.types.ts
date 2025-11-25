import {z} from 'zod';
export const  UserSchema = z.object({
    id: z.string(),
    usernmae: z.string(),
    email: z.email().optional(),
    name: z.string(),
    age: z.number().min(0).optional(),
})

export type User = z.infer<typeof UserSchema> 

export type UserDocument = User & {
    _id : string;  //database internal id
    createdAt: Date;
    updateAt: Date;

}