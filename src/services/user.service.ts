import { CreateUserDto, UpdateUserDto } from "../dtos/user.dto";
import { UserRepository } from "../repositories/user.repository";

export const UserService = {
    getAllUsers: () => {
        return UserRepository.findAll();

    },

    getUser: (id: string) => {
        return UserRepository.findById(id);[]
    },

    createUser: (data: CreateUserDto) => {

        if (UserRepository.findById(data.id)) {
            throw { statius: 409, message: "User ID already exists"};
            
        }

        return UserRepository.create({ ...data});

    },

    updateUser: (id: string, data: UpdateUserDto) => {
        const existing = UserRepository.findById(id);
        if(!existing) throw { status: 404, message: "User not found"};

        if(UserRepository.findByEmail(data.email)?.id!==id){
            throw {status:409, message:"Email already exists"};
        }

        if(UserRepository.findByUsername(data.username)?.id !== id){
            throw {status: 409, message: "Uername already exists"};
        }

        return UserRepository.update(id, data);
    },

    deleteUser: (id: string) => {
        const existing = UserRepository.findById(id);
        if (!existing) throw { status: 404, message: "User not found"};

        UserRepository.delete(id);


    }
}