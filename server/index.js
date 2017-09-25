// EXTERNAL MODULES
const express = require('express')
   , session = require('express-session')
   , bodyParser = require('body-parser')
   , cookieParser = require('cookie-parser')
   , massive = require('massive')
   , cors = require('cors')
   
// CONFIG
let config = require('./config')

// EXPRESS
let app = module.exports = express();

app.use(express.static(__dirname + '/../build'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// SESSION AND PASSPORT
app.use(session({
   secret: config.SESSION_SECRET
   , saveUninitialized: false
   , resave: false
}));

// MASSIVE AND DB SETUP
let massiveUri = config.MASSIVE_URI

let massiveServer = massive.connectSync({
   connectionString: massiveUri
})

app.set('db', massiveServer)

let db = app.get('db')

// PASSPORT
let passport = require('./services/passport');
app.use(passport.initialize());
app.use(passport.session());

// CONTROLLERS
let userCtrl = require('./controllers/userCtrl.js')
, skillCtrl = require('./controllers/skillCtrl.js')
, studentCtrl = require('./controllers/studentCtrl.js');

// PASSPORT ENDPOINTS
// app.post('/api/login', passport.authenticate('local', {
//    successRedirect: '/api/me'
// }));


// app.get('/api/logout', function(req, res, next){
//    req.logout();
//    return res.status(200).send('Logged Out')
// });

// POLICIES
let isAuthed = function(req, res, next){
   console.log(req.isAuthenticated())
   if(!req.isAuthenticated())  return res.status(401).send();
   return next();
}



// ENDPOINTS
// Users
app.post('/api/login', userCtrl.login)
app.post('/api/register', userCtrl.register)
app.get('/api/me', userCtrl.me)
// app.put('/api/user/current', isAuthed, userCtrl.updateCurrent)

// Students
app.post('/api/student/add', studentCtrl.addStudent)
app.post('/api/student/skill/add', studentCtrl.addSkill)
app.get('/api/students/:teacher_id', studentCtrl.readStudents)
app.get('/api/student/skills/read/:teacher_id', studentCtrl.readStudentSkills)
// app.put('/api/student/skill/:id', studentCtrl.updateSkill)
// app.put('/api/student/edit/:id', studentCtrl.editStudent)
// app.delete('/api/student/remove/:id', studentCtrl.removeStudent)
// app.delete('/api/student/skill/remove/:id', studentCtrl.removeSkill)

// Skills
app.get('/api/skill/read', skillCtrl.read)
app.get('/api/skill/read/categorys/:teacher_id', skillCtrl.readCategory)
app.get('/api/skill/read/sub', skillCtrl.readSub)
app.post('/api/skill/add/category', skillCtrl.addCategory)
app.post('/api/skill/add/sub', skillCtrl.addSub)
app.post('/api/skill/add/skill', skillCtrl.addSkill)
// app.get('/api/skill/categories', skillCtrl.getCategories)
// app.get('/api/skill/subs', skillCtrl.getSubs)
// app.get('/api/skill/skills', skillCtrl.getSkills)
// app.put('/api/skill/edit/:id', skillCtrl.editSkill)
// app.delete('/api/skill/remove/category/:id', skillCtrl.removeCategory)
app.delete('/api/skill/remove/sub/:id', skillCtrl.removeSub)
app.delete('/api/skill/remove/skill/:id', skillCtrl.removeSkill)


// CONNETION
let port = config.PORT

const path = require('path')

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

app.listen(port, () => {
   console.log(`Listening on ${port}`)
})