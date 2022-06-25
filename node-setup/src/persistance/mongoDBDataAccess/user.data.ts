import userModel, { User } from '../../models/mongodb/user.model';

class UserData {
  saveUser = async (user : User) => {
    try {
      // eslint-disable-next-line new-cap
      const newUser = new userModel(user);
      await newUser.save();
      // return this.getEmpByObj(newEmp);
    } catch (e) {
      Object(e).message = 'Fail to save the employee !!';
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
