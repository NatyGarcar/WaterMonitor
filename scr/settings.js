export const url = "http://193.87.164.219/database.json"

// parameters in meters [m]
export const fullDepth = 5 // [m]
export const diameter = 1 // [m]
export const radius = diameter/2 // [m]

// capacity in liters [l]
export const fullCapacity = ((3.14*radius**2*fullDepth)*1000).toFixed(0) // [l]