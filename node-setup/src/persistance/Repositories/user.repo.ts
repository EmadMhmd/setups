import { UserType } from '../../types';

interface UserRepo {
    create(user: UserType): Promise<UserType | undefined>,
    getById(id: string): Promise<UserType | undefined>,
    getByEmail(email: string): Promise<UserType | undefined>,
}
export default UserRepo;
