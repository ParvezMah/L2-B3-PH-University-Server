import config from "../../config";
import { TStudent } from "../student/student.interface";
import { NewUser } from "./user.interface";
import { User } from "./user.model"

const createStudentIntoDB = async (password:string, studentData: TStudent)=>{
    
    const user: NewUser ={}; //  create user object

     //  check if password is not provided then set default password
     user.password = password || (config.default_password as string);

    //  set student role
    user.role = "student";

    // manually generated id
    user.id = '2030100001'

    //  create user object
    const result = await User.create(user);

    if(Object.keys(result).length){
        studentData.id = result.id;
        studentData.user=result._id;
    }

    return result;
}

export const UserService = {
    createStudentIntoDB
}