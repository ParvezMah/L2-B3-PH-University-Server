import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result, 
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteStudent = async (req: Request, res: Response)=>{
  try {
    const { studentId } = req.params;

    // Call the service to delete the student
    const result = await StudentServices.deleteStudentFromDB(studentId);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'Student is deleted successfully',
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }
  } catch (err:any) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'An error occurred while deleting the student',
      error: err.message,
    });
  }
};


export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent
};
