//Adding Data Model For GET Operation Only Data Field To Fetch.

class UserData {
    constructor(id, firstname, lastname, email, phone, address, vehicleid) {
        this.Id = id;
        this.FirstName = firstname;
        this.LastName = lastname;
        this.Email = email;
        this.Phone = phone;
        this.Address = address;
        this.VehicleID = vehicleid;
    }
}


module.exports = UserData;

// ID
// First Name
// Last Name
// Email
// Phone
// Address
// Vehicle ID