import { User } from "../types/user.types";

let users: any[] = [
  { id: "user1", username: 'john_doe', email: 'john@example.com', name: 'John Doe', age: 30 },
  { id: "user2", username: 'jane_smith', email: 'jane@example.com', name: 'Jane Smith', age: 25 },
];

export const UserRepository = {
    findAll: () => users,
    findById: (id: string) => users.find(u => u.id ===id),

    findByEmail: (email:string) => users.find(u => u.mail === email),

    findByUsername: (username:string) => users.find(u => u.username === username),

    create: (user: User) => {
      users.push(user);
      return user;
    },

    update: (id: string, updated: Partial<User>) => {
      const index = users.findIndex(u => u.id === id);
      users[index] = {...users[index], ...updated};
      return users[index];
    },

    delete: (id: string) => {
      const index = users.findIndex(u => u.id === id);
      users.splice(index, 1)
    }
    
};