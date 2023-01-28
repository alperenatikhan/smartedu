
exports.getIndexPage = (req, res) => { res.status(200).render('index', { page_name: 'index' }) }
exports.getAboutPage = (req, res) => { res.status(200).render('about', { page_name: 'about' }) }
exports.getRegisterPage = (req, res) => { res.status(200).render('register', { page_name: 'register' }) }
exports.getLoginPage = (req, res) => { res.status(200).render('login', { page_name: 'login' }) }
exports.getCoursesPage = (req, res) => { res.status(200).render('courses', { page_name: 'courses' }) }
exports.getDashboardPage = (req, res) => { res.status(200).render('dashboard', { page_name: 'dashboard' }) }
exports.getCourseSinglePage = (req, res) => { res.status(200).render('course-single', { page_name: 'course-single' }) }