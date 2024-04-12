const { Router } = require('express')
const router = Router();
const LinkedinController = require('./controller');



router.get('/Linkedin_Joblist', LinkedinController.Linkedin_Joblist_get, ()=>{})
router.post('/Linkedin_Joblist', LinkedinController.Linkedin_Joblist_post, ()=>{})



module.exports = router