const {InfluxDB} = require('@influxdata/influxdb-client')
var url = "http://localhost:8086"
var token = "UboVuGFVHlfH-GL9JVMZAthoqlkeMHf-PoND0yv-P4tx3MB3-2CxcSeBCim3qSag5suMGOflt78f5Y13xAeNqg=="
var org = "heticprojet"

exports.getBinWeight = (req,res,next) => {

  const queryApi = new InfluxDB({url, token}).getQueryApi(org)
  const fluxQuery = 'from(bucket:"mqtthetic") |> range(start: 0) |> filter(fn: (r) => r.source_address == "bin_node")'
  var dataObject = {}
  console.log('*** QUERY ROWS ***')
  queryApi.queryRows(fluxQuery, {
    next(row, tableMeta) {
      const o = tableMeta.toObject(row)
      //console.log(JSON.stringify(o, null, 2))
      //console.log(`${o._time} ${o._measurement} in '${o.source_address}' (${o.topic}): ${o._field}=${o._value}`)
      res.status(200).json({data: o})
    },
    error(error) {
      console.error(error)
      console.log('\nFinished ERROR')
    },
    complete() {
      console.log('\nFinished SUCCESS')
    },
  })
}

exports.getMailboxState = (req,res,next) => {

  const queryApi = new InfluxDB({url, token}).getQueryApi(org)
  const fluxQuery = 'from(bucket:"mqtthetic") |> range(start: 0) |> filter(fn: (r) => r.source_address == "mailbox_node")'
  console.log('*** QUERY ROWS ***')
  queryApi.queryRows(fluxQuery, {
    next(row, tableMeta) {
      const o = tableMeta.toObject(row)
      // console.log(JSON.stringify(o, null, 2))
      //console.log(`${o._time} ${o._measurement} in '${o.location}' (${o.example}): ${o._field}=${o._value}`)
      res.status(200).json({data: o})
    },
    error(error) {
      console.error(error)
      console.log('\nFinished ERROR')
    },
    complete() {
      console.log('\nFinished SUCCESS')
    },
  })

}

exports.getStaircaseState = (req,res,next) => {

  const queryApi = new InfluxDB({url, token}).getQueryApi(org)
  const fluxQuery = 'from(bucket:"mqtthetic") |> range(start: 0) |> filter(fn: (r) => r.source_address == "staircase_node")'
  console.log('*** QUERY ROWS ***')
  queryApi.queryRows(fluxQuery, {
    next(row, tableMeta) {
      const o = tableMeta.toObject(row)
      // console.log(JSON.stringify(o, null, 2))
      //console.log(`${o._time} ${o._measurement} in '${o.location}' (${o.example}): ${o._field}=${o._value}`)
      res.status(200).json({data: o})
    },
    error(error) {
      console.error(error)
      console.log('\nFinished ERROR')
    },
    complete() {
      console.log('\nFinished SUCCESS')
    },
  })

}

exports.getEntranceHallState = (req,res,next) => {

  const queryApi = new InfluxDB({url, token}).getQueryApi(org)
  const fluxQuery = 'from(bucket:"mqtthetic") |> range(start: 0) |> filter(fn: (r) => r.source_address == "entranceHall_node")'
  console.log('*** QUERY ROWS ***')
  queryApi.queryRows(fluxQuery, {
    next(row, tableMeta) {
      const o = tableMeta.toObject(row)
      // console.log(JSON.stringify(o, null, 2))
      //console.log(`${o._time} ${o._measurement} in '${o.location}' (${o.example}): ${o._field}=${o._value}`)
      res.status(200).json({data: o})
    },
    error(error) {
      console.error(error)
      console.log('\nFinished ERROR')
    },
    complete() {
      console.log('\nFinished SUCCESS')
    },
  })  

}

exports.binAlert = (req,res,next) => {
  console.log(req.body)
  console.log('notif bin')
  //res.status(201).json({ notification : 'full trash can'})
}

exports.staircaseAlert = (req,res,next) => {
  console.log(req.body)
  console.log('notif staircase')
}

exports.entrancehallAlert = (req,res,next) => {
  console.log(req.body)
  console.log('notif entrance hall')
}
exports.mailboxAlert = (req,res,next) => {
  console.log(req.body)
  console.log('notif mailbox')
}
