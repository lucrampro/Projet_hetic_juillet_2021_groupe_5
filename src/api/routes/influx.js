const express = require('express')
const router = express.Router()
const influxController = require('../controllers/influx')

router.get('/getBinWeight', influxController.getBinWeight)
router.get('/getMailboxState', influxController.getMailboxState)
router.get('/getStaircaseState', influxController.getStaircaseState)
router.get('/getEntranceHallState', influxController.getEntranceHallState)
router.post('/bin-alert', influxController.binAlert)


module.exports = router