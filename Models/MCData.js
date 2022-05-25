//Adding Data Model For GET Operation Only Data Field To Fetch.

class MCData {
    constructor(id, inputcurrent, outputcurrent, inputvoltage, outputvoltage, vehicleid) {
        {
            this.Id = id;
            this.InputCurrent = inputcurrent;
            this.OutputCurrent = outputcurrent;
            this.InputVoltage = inputvoltage;
            this.OutputVoltage = outputvoltage;
            this.VehicleID = vehicleid;
        }
    }
}

module.exports = MCData;

// ID
// Input Current
// Output Current
// Input Voltage
// Output Voltage
// Vehicle ID