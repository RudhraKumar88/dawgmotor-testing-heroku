const firebase = require ('../db.js');
const UserData = require ('../models/UserData.js');
const firestore = firebase.firestore();

//POST Operation
const addUserData = async (req, res, next) => {
    try {
        const reqData = req.body;
        await firestore.collection('userData').doc().set(reqData);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
 

//GET Operation For Complete Collection
const getAllUserData = async (req, res, next) => {
    try {
        const userRef = firestore.collection('User');
        const dataObj = await userRef.get();
        const userDataArray = [];
        if(dataObj.empty) {
            res.status(404).send('No userDatas record found');
        }else {
            dataObj.forEach(doc => {
                const user = new UserData(
                    doc.id,
                    doc.data().Firstname,
                    doc.data().lastname,
                    doc.data().Email,
                    doc.data().Phone,
                    doc.data().Address,
                    doc.data().VehicleID
                );
                userDataArray.push(user);
            });
            res.send(userDataArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//GET Operation For Each Collection
const getUserData = async (req, res, next) => {
    try {
        const id = req.params.id;
        const userDataRef = firestore.collection('User').doc(id);
        const dataObj = await userDataRef.get();
        if(!dataObj.exists) {
            res.status(404).send('User with the given ID not found');
        }else {
            res.send(dataObj.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//PUT Operation For Each Collection
const updateUserData= async (req, res, next) => {
    try {
        const id = req.params.id;
        const reqData = req.body;
        const userDataRef =  firestore.collection('User').doc(id);
        await userDataRef.update(reqData);
        res.send('User record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}


//DELETE Operation 
const deleteUserData = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('User').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports =  {
    addUserData,
    getAllUserData,
    getUserData,
    updateUserData,
    deleteUserData
}