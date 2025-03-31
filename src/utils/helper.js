import moment from "moment/moment";

const getInitials = (str) => {
  const words = str.split(" ");
  const firstTwoLetters = words.map((word) => word.charAt(0)).slice(0, 2);
  const result = firstTwoLetters.join("");
  return result;
};

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "long",
  timeStyle: "short",
});

const formatSecondsToDate = (seconds) => {
  const date = moment(seconds * 1000).toDate();
  return dateFormatter.format(date);
};

const debounceFn = (fn, time = 500) => {
  let timeout = null;

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
    }, time);
  };
};
export { getInitials, formatSecondsToDate, debounceFn };
