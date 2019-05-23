import moment from "moment";

export const getLocaleFromGMT = dt => {
  const offset = dt.getTimezoneOffset();
  //console.log("DT", dt);
  let date = moment(dt);
  //console.log("OFFSET", offset);
  date.subtract(offset, "minutes");
  //console.log("DATE", date);
  return date;
};
