import moment from "moment";

export const getLocaleFromGMT = dt => {
  const offset = dt.getTimezoneOffset();
  let date = moment(dt);
  date.add(offset, "minutes");

  return dt;
};
