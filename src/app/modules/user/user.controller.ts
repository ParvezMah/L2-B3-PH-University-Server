import { UserService } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const {password, student: studentData} = req.body;
        // const zodParsedData = studentValidationSchema.parse(studentData);

        
        const result = await UserService.createStudentIntoDB(
            password, studentData
        );
        res.status(200).json({
            success: true,
            message: 'Student is created succesfully',
            data: result,
          });
        } catch (err) {
          console.log(err);
        }
}

