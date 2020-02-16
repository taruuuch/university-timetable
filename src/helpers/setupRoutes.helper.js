const routesConfig = require('../config/routes.config');
const authRoutes = require('../routes/auth.routes');
const groupRoutes = require('../routes/group.routes');
const userRoutes = require('../routes/user.routes');
const teacherRoutes = require('../routes/teacher.router');
const lessonRoutes = require('../routes/lesson.routes');

module.exports = app => {
	app.use(routesConfig.authUri, authRoutes);
	app.use(routesConfig.groupUri, groupRoutes);
	app.use(routesConfig.userUri, userRoutes);
	app.use(routesConfig.teacherUri, teacherRoutes);
	app.use(routesConfig.lessonUri, lessonRoutes);
};
