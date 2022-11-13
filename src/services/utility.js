import { imgUrl, statusvars } from "./variables";

export const cutAt = (str, character) => {
  return str.substring(0, str.indexOf(character));
};
const validateAFM = (afm) => {
  if (afm) {
    if (!afm.match(/^\d{9}$/) || afm == "000000000") return false;

    var m = 1,
      sum = 0;
    for (var i = 7; i >= 0; i--) {
      m *= 2;
      sum += afm.charAt(i) * m;
    }
    return (sum % 11) % 10 == afm.charAt(8);
  } else return false;
};
export const taxIdColour = (taxId) => {
  return validateAFM(taxId) ? { color: "#000" } : { color: "#FF0000" };
};
export const statusPicker = (status) => {
  switch (status) {
    case 0:
      return statusvars.Open;
    case 1:
      return statusvars.InProgress;
    case 2:
      return statusvars.Finished
    default:
       return statusvars.Err; 
  }
};
export const imageUrl = (isGrid) => {
  return isGrid
    ? imgUrl.Blue
    : imgUrl.Black;
};
