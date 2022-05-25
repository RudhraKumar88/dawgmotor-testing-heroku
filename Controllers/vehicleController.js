const  firebase = require ('../db.js');
const  VehicleData = require ('../models/VehicleData.js');
const firestore = firebase.firestore();

//POST Operation
const addVehicleData = async (req, res, next) => {
    try {
        const reqData = req.body;
        await firestore.collection('Vehicle').doc().set(reqData);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
 

//GET Operation For Complete Collection
const getAllVehicleData = async (req, res, next) => {
    try {
        const vehicleDataRef = firestore.collection('Vehicle');
        const dataObj = await vehicleDataRef.get();
        const vehicleDataArray = [];
        if(!dataObj.empty) {
            dataObj.forEach(doc => {
                const vehicle = new VehicleData(
                    doc.id,
                    doc.data().Make,
                    doc.data().Year,
                    doc.data().Chassis,
                    doc.data().OwnerID,
                );
                vehicleDataArray.push(vehicle);
            });
            res.send(vehicleDataArray);
        }else {
            res.status(404).send('No Vehicle record found');
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//GET Operation For Each Collection
const getVehicleData = async (req, res, next) => {
    try {
        const id = req.params.id;
        const vehicleDataRef = firestore.collection('Vehicle').doc(id);
        const dataObj = await vehicleDataRef.get();
        if(!dataObj.exists) {
            res.send(dataObj.data());
        }else {
            res.status(404).send('Vehicle with the given ID not found');
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//PUT Operation For Each Collection
const updateVehicleData= async (req, res, next) => {
    try {
        const id = req.params.id;
        const reqData = req.body;
        const vehicleDataRef =  firestore.collection('Vehicle').doc(id);
        await vehicleDataRef.update(reqData);
        res.send('Vehicle record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//DELETE Operation 
const deleteVehicleData = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('Vehicle').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports =  {
    addVehicleData,
    getAllVehicleData,
    getVehicleData,
    updateVehicleData,
    deleteVehicleData
}