import moment from "moment";

const cache = (lastFetch) => {
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) {
    return true;
  } else {
    return false;
  }
};

export default cache;
