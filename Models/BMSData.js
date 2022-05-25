//Adding Data Model For GET Operation Only Data Field To Fetch.

class BMSData {
    constructor(id, totalcells, totalcurrent, totalvoltage, vehicleid) {
        {
            this.Id = id;
            this.TotalCells = totalcells;
            this.TotalCurrent = totalcurrent;
            this.TotalVoltage = totalvoltage;
            this.VehicleID = vehicleid;
        }
    }
}

module.exports = BMSData;


// ID
// Total Cells
// Total Current
// Total Voltage
// Vehicle ID

// this.TotalCells = `${totalcells}`;
// this.TotalCurrent = `${totalcurrent}`;
// this.TotalVoltage = `${totalvoltage}`;
// this.VehicleID = `${vehicleid}`;