import moment from "moment";

const SORT_BY = [
  {
    id: 1,
    name: "Popularity",
    value: "search",
  },
  {
    id: 2,
    name: "Date",
    value: "search_by_date",
  },
];

const SORT_FOR = [
  {
    id: 1,
    name: "All time",
    value: "all",
  },
  {
    id: 2,
    name: "Last 24h",
    value: "day",
  },
  {
    id: 3,
    name: "Past week",
    value: "week",
  },
  {
    id: 4,
    name: "Past month",
    value: "month",
  },
  {
    id: 5,
    name: "Past year",
    value: "year",
  },
];

const PAGE = 0;

const PAGE_SIZE = 10;

const TAG = "story";

const NOW = moment();

const LAST_DAY = moment().subtract(24, "hours").unix();

const LAST_WEEK = moment().subtract(7, "days").unix();

const LAST_MONTH = moment().subtract(1, "months").unix();

const LAST_YEAR = moment().subtract(1, "years").unix();

export {
  SORT_BY,
  SORT_FOR,
  PAGE,
  TAG,
  PAGE_SIZE,
  NOW,
  LAST_DAY,
  LAST_WEEK,
  LAST_MONTH,
  LAST_YEAR,
};
