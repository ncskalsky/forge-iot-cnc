const express = require('express');
const { TrimWheelV41,TrimWheelV42, TrimWheelV50} = require('../model/monitor');

let router = express.Router();

router.get('/stockmaterialdata', function(req, res) {
    let query = {};
    query.sensor_name = {$in: 'StockMaterial'};
    TrimWheelV33.find(query, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(data);
        }
    }).sort({_id: -1}).limit(200);
});

router.get('/cuttingtooldata', function(req, res) {
    let query = {};
    query.sensor_name = {$in: 'CuttingTool'};
    TrimWheelV33.find(query, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(data);
        }
    }).sort({_id: -1}).limit(200);
});
const collections = ['TrimWheelV41','TrimWheelV42','TrimWheelV50']
router.get('/sensordata', function(req, res) {
    let query = {};
    // query.sensor_name = {$in: 'CuttingTool'};
    let collectionname = req.query.name;
    if (collectionname === 'TrimWheelV41') {
        TrimWheelV41.find(query, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(data);
            }
        }).sort({when: 1});
    } else if (collectionname === 'TrimWheelV42'){
        TrimWheelV42.find(query, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(data);
            }
        }).sort({when: 1}).limit(200);
    }else if (collectionname === 'TrimWheelV50'){
        TrimWheelV50.find(query, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(data);
            }
        }).sort({when: 1}).limit(200);
    }else{
        res.status(500).send(err);
    }
});


module.exports = router;
