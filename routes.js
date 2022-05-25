const express = require ("express");

//consting All Operation To Specific Path
const { 
  addIOTData,
  getAllIOTData,
  // getIOTData,
  addBMSData,
  getAllBMSData,
  // getBMSData,
  addMCData,
  getAllMCData,
  // getMCData,
      } = require ("./Controllers/componentController.js"); // All components consted

const {
  addUserData,
  getAllUserData, 
  getUserData, 
  updateUserData, 
  deleteUserData
} = require ("./Controllers/userControllers.js"); // consting User Controller
const {
  addVehicleData, 
  getAllVehicleData, 
  getVehicleData, 
  updateVehicleData, 
  deleteVehicleData
} = require ("./Controllers/vehicleController.js"); //Importing Vehicle Controller

const router = express.Router();


//---------------Components--Routes--------------

//Setting Routes Path For Each Functionallity
router.post('/iot/postData', addIOTData);
router.get('/iot/getData', getAllIOTData);
// router.get('/iot/getData/:id', getIOTData);
router.post('/bms/postData', addBMSData);
router.get('/bms/getData', getAllBMSData);
// router.get('/bms/getData:id', getBMSdata);
router.post('/motorcontroller/postData', addMCData);
router.get('/motorcontroller/getData', getAllMCData);
// router.get('/motorcontroller/getData:id', getMCdata);

//---------------Components--Routes--------------

//-------------------------------------User-Routes----------------------------------

router.post('/user/postData', addUserData);
router.get('/user/getData', getAllUserData);
router.get('/user/getData/:id', getUserData);
router.put('/user/putData', updateUserData);
router.patch('/user/patchData', updateUserData);
router.delete('/user/deleteData', deleteUserData);

//-------------------------------------User-Routes----------------------------------


//-------------------------------------Vehicle-Routes----------------------------------

router.post('/vehicle/postData', addVehicleData);
router.get('/vehicle/getData', getAllVehicleData);
router.get('/vehicle/getData/:id', getVehicleData);
router.put('/vehicle/putData', updateVehicleData);
router.patch('/vehicle/patchData', updateVehicleData);
router.delete('/vehicle/deleteData', deleteVehicleData);

//-------------------------------------Vehicle-Routes----------------------------------


module.exports = {
  routes: router
}