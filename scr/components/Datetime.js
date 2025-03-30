const dt = new Date();
var h = dt.getHours();
var d = dt.getDate();
var m = dt.getMonth();

if (h == 0) {
    var h = 24
};

export const Hour = h
export const Day = d
export const Month = m+1