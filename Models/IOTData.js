//Adding Data Model For GET Operation Only Data Field To Fetch.

class IOTData {
    constructor(id, satellitecount, latitude, longitude, altitude, direction, year, month, day, hh, mm, ss, vehicleid) {
        {
            this.Id = id;
            this.SatelliteCount = satellitecount;
            this.Latitude = latitude;
            this.Longitude = longitude;
            this.Altitude = altitude;
            this.Direction = direction;
            this.Year = year;
            this.Month = month;
            this.Day = day;
            this.HH = hh;
            this.MM = mm;
            this.SS = ss;
            this.VehicleID = vehicleid;
        }
    }
}

module.exports = IOTData;


// ID
// Satellite Count
// Latitude
// Longitude
// altitude
// Direction
// Year
// Month
// Day
// HH
// MM
// SS
// Vehicle ID



// {
//     "Id": "id",
//     "SatelliteCount": "satellitecount",
//     "Latitude": "latitude",
//     "Longitude": "longitude",
//     "Altitude": "altitude",
//     "Direction": "direction",
//     "Year": "year",
//     "Month": "month",
//     "Day": "day",
//     "HH": "hh",
//     "MM": "mm",
//     "SS": "ss",
//     "VehicleID": "vehicleid"
// }
