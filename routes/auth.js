// const client = require('../config/redis').asyncRedis()
const express = require('express');
const passport = require('passport');
const router = express.Router({
    mergeParams: true
});
const commonCtrl = require('../controllers/common.js')

const {
    isLoggedIn,
    isNotLoggedIn
} = require('./middleware');

router.get('/login/kakao', passport.authenticate('kakao', {
    failureRedirect: '/login'
}))
router.get("/kakao/callback", (req, res, next) => {
    passport.authenticate("kakao", (err, userInfo, message) => {
        res.send('message')
    })(req, res, next)
});
router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (err, userInfo, message) => {
        res.send('message')
    })(req, res, next);
});

router.get('/logout', isLoggedIn, async (req, res) => {
    try {
        commonCtrl.printLog(req, 'logout', 200)
        res.status(200).json('로그아웃을 성공하였습니다.')
    } catch (e) {
        commonCtrl.printLog(req, 'logout', 500, 'error')
        res.status(500).json('로그아웃을 실패하였습니다.')
    }
});
module.exports = router;