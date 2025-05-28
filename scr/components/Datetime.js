const dt = new Date();
//var h = dt.getHours();
var d = dt.getDay();
var dat = dt.getDate();
var m = dt.getMonth();

// if (h == 0) {
//     var h = 24
// };

//export const Hour = h
export const Day = d+1
export const Date = dat
export const Month = m+1