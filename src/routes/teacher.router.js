import express from 'express';
import teacherController from '../controllers/teacher.controller';
import authMiddleware from '../middleware/auth.middleware';

const router = express.Router();

router.get('/', teacherController.getTeachers);
router.get('/:teacherId', teacherController.getTeacherById);

router.post('/', authMiddleware, teacherController.createTeacher);
router.put('/:teacherId', authMiddleware, teacherController.updateTeacher);
router.patch('/:teacherId', authMiddleware, teacherController.updateTeacher);
router.delete('/:teacherId', authMiddleware, teacherController.deleteTeacher);

export default router;
