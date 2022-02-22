function handleevent(e) {
  const leftIndex = document.getElementById("converter-left").selectedIndex;
  const rightINdex = document.getElementById("converter-right").selectedIndex;
  const leftValue = document.getElementById("left").value;
  const rightValue = document.getElementById("right").value;
  const checkValue = e.target.id;
  console.log(leftIndex + "" + rightINdex);
  if (checkValue == "left") {
    const value = updateValue[leftIndex + "" + rightINdex](leftValue);
    document.getElementById("right").value = value;
  }
}
const updateValue = {
  // Converte Kilometre to others
  "00": (value) => value, // Kilometre to Kilometre
  "01": (value) => value * 1000, // Kilometre to Meter
  "02": (value) => value * 100000, // Kilometre to Centimeter
  "03": (value) => value * 1000000, // Kilometre to Milimeter
  "04": (value) => value / 1.609, // Kilometre to Mile
  "05": (value) => value * 3281, // Kilometre to Feet
  "06": (value) => value * 39370, // Kilometre to Inch
  // Converte Meter to others
  10: (value) => value / 1000, // Meter to Kilometre
  11: (value) => value, // Meter to Meter
  12: (value) => value / 100, // Meter to Centimeter
  13: (value) => value / 1000, // Meter to Milimeter
  14: (value) => value / 1609, // Meter to Mile
  15: (value) => value * 3.281, // Meter to Feet
  16: (value) => value * 39.37, // Meter to Inch
  // Converte Centimeter to others
  20: (value) => value / 100000, // Centimeter to Kilometre
  21: (value) => value / 100, // Centimeter to Meter
  22: (value) => value, // Centimeter to Centimeter
  23: (value) => value * 1000, // Centimeter to Milimeter
  24: (value) => value / 1609, // Centimeter to Mile
  25: (value) => value * 3.281, // Centimeter to Feet
  26: (value) => value * 39.37, // Centimeter to Inch
  // Converte Milimeter to others
  30: (value) => value / 1000000, // Milimeter to Kilometre
  31: (value) => value / 1000, // Milimeter to Meter
  32: (value) => value / 10, // Milimeter to Centimeter
  33: (value) => value, // Milimeter to Milimeter
  34: (value) => value / 1609344, // Milimeter to Mile
  35: (value) => value / 305, // Milimeter to Feet
  36: (value) => value / 25.4, // Milimeter to Inch
  // Converte Mile to others
  40: (value) => value * 1.609, // Mile to Kilometre
  41: (value) => value * 1609, // Mile to Meter
  42: (value) => value / 160934, // Mile to Centimeter
  43: (value) => value * 1609344, // Mile to Milimeter
  44: (value) => value / 1609344, // Mile to Mile
  45: (value) => value * 5280, // Mile to Feet
  46: (value) => value * 63360, // Mile to Inch
};
