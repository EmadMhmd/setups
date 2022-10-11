import { UserType } from '../../types';

interface UserRepo {
    create(user: UserType): Promise<UserType | undefined>,
    getById(id: string): Promise<UserType | undefined>,
    getByEmail(email: string): Promise<UserType | undefined>,
    // update(id: string, user: UserType): boolean,
    // delete(id: string): boolean,
}
export default UserRepo;
