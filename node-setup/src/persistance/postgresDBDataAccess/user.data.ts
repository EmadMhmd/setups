import User from '../../models/postgres';

class UserData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  saveUser = async (user: any) => {
    try {
      const newUser = User.create(user);
      return newUser;
    } catch (e) {
      Object(e).message = 'Fail to save the user !!';
      throw e;
    }
  };

  getUserById = async (id: string) => {
    try {
      const user = await User.findOne({ where: { id } });
      return user;
    } catch (e) {
      Object(e).message = 'Fail to save the user !!';
      throw e;
    }
  };

  // getEmpByObj = async (obj: User) => {
  //   try {
  //     return userModel.findOne(obj);
  //   } catch (e) {
  //     Object(e).message = 'Fail to get required employee !!';
  //     throw e;
  //   }
  // };

  // getEmployeesByOrgId = async (orgId: any) => {
  //   try {
  //     return Emp.find({ orgId });
  //   } catch (e) {
  //     e.message = 'Fail to fetch the employees !!';
  //     throw e;
  //   }
  // };
}

export default new UserData();
