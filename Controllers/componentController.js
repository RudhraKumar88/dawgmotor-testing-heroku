const firebase = require ('../db.js');
const BMSData = require ('../Models/BMSData.js');
const IOTData = require ('../Models/IOTData.js');
const MCData = require ('../Models/MCData.js');
const firestore = firebase.firestore();


//------------------------------IOT---------------------------------
//Post Operation Adding Data to Database
const addIOTData = async (req, res, next) => {
    try {
        const reqData = req.body;
        await firestore.collection('IoT').doc().set(reqData);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
 

//GET Operation For Complete Collection
const getAllIOTData = async (req, res, next) => {
    try {
        const iotRef = firestore.collection('IoT');
        const dataObj = await iotRef.get();
        const iotDataArray = [];
        if(!dataObj.empty) {
            dataObj.forEach(doc => {
                const iotData = new IOTData(
                    doc.id,
                    doc.data().Satellitecount,
                    doc.data().Latitude,
                    doc.data().Longitude,
                    doc.data().Altitude,
                    doc.data().Direction,
                    doc.data().Year,
                    doc.data().Month,
                    doc.data().Day,
                    doc.data().HH,
                    doc.data().MM,
                    doc.data().SS,
                    doc.data().VehicleId,
                );
                iotDataArray.push(iotData);
            });
            res.send(iotDataArray);
        }else {
            res.status(404).send('No iotData record found');
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


// //GET Operation of individual document by passing document id
// const getIOTData = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const iotRef = firestore.collection('IoTData').doc(id);
//         const dataObj = await iotRef.get();
//         if(dataObj.exists) {
//             res.send(dataObj.data());
//         }else {
//             res.status(404).send('iotData with the given ID not found');
//         }
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }
//------------------------------IOT---------------------------------


//------------------------------BMS-------------------------
//Post Operation Adding Data to Database
const addBMSData = async (req, res, next) => {
    try {
        const reqData = req.body;
        await firestore.collection('BMS').doc().set(reqData);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
 

//GET Operation For Complete Collection
const getAllBMSData = async (req, res, next) => {
    try {
        const bmsRef = firestore.collection('BMS');
        const dataObj = await bmsRef.get();
        const bmsDataArray = [];
        if(!dataObj.empty) {
            dataObj.forEach(doc => {
                const bmsData = new BMSData(
                    doc.id,
                    doc.data().TotalCells,
                    doc.data().TotalCurrent,
                    doc.data().TotalVoltage,
                    doc.data().VehicleID,
                );
                bmsDataArray.push(bmsData);
       
            });
            res.send(bmsDataArray);

            
        }else {
            res.status(404).send('No BMSData record found');
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


// //GET Operation For Each Collection
// const getBMSData = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const bmsRef = firestore.collection('bms').doc(id);
//         const dataObj = await bmsRef.get();
//         if(dataObj.exists) {
//             res.send(dataObj.data());
//         }else {
//             res.status(404).send('BMSData with the given ID not found');
//         }
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }
//------------------------------BMS-------------------------

//------------------------------MOTOR-CONTROLLER-------------------------
//POST Operation
const addMCData = async (req, res, next) => {
    try {
        const reqData = req.body;
        await firestore.collection('MotorController').doc().set(reqData);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
 

//GET Operation For Complete Collection
const getAllMCData = async (req, res, next) => {
    try {
        const mcRef = firestore.collection('MotorController');
        const dataObj = await mcRef.get();
        const mcDataArray = [];
        if(!dataObj.empty) {
            dataObj.forEach(doc => {
                const mcData = new MCData(
                    doc.id,
                    doc.data().InputCurrent,
                    doc.data().OutputCurrent,
                    doc.data().InputVoltage,
                    doc.data().OutputVoltage,
                    doc.data().VehicleID,
                );
                mcDataArray.push(mcData);
            });
            res.send(mcDataArray);
        }else {
            res.status(404).send('No MCData record found');
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//GET Operation For Each Collection
// const getMCData = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const mcRef = firestore.collection('motorcontroller').doc(id);
//         const dataObj = await mcRef.get();
//         if(dataObj.exists) {
//             res.send(dataObj.data());
//         }else {
//             res.status(404).send('MCData with the given ID not found');
//         }
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }
//------------------------------MOTOR-CONTROLLER-------------------------

module.exports =  {
    addIOTData,
    getAllIOTData,
    // getIOTData,
    addBMSData,
    getAllBMSData,
    // getBMSData,
    addMCData,
    getAllMCData,
    // getMCData,
}



                    