import config from "../../config";
import { TStudent } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model"

const createStudentIntoDB = async (password:string, studentData: TStudent)=>{
    
    // const user: NewUser ={}; //  create user object
    const userData: Partial<TUser> ={}; //  create user object

     //  check if password is not provided then set default password
     userData.password = password || (config.default_password as string);

    //  set student role
    userData.role = "student";

    // manually generated id
    userData.id = '2030100001'

    //  create user object
    const newUser = await User.create(userData);

    if(Object.keys(newUser).length){
        studentData.id = newUser.id; // embedding
        studentData.user=newUser._id; // referencing
        const newStudent = await StudentModel.create(studentData);
        return newStudent;
    }
}

export const UserService = {
    createStudentIntoDB
}