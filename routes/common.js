const express = require('express');
const router = express.Router({
  mergeParams: true
});
router.get('/health_check', (req, res) => {
  res.status(200).json('Health Check Success')
});


module.exports = router;