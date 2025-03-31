const newsQueryKeys = {
  all: ["news"],
  list: () => [...newsQueryKeys.all, "list"],
  listByFilter: (filter) => [...newsQueryKeys.list(), filter, "filter"],
  details: (id) => {
    return [...newsQueryKeys.all, id, "details"];
  },
};
export default newsQueryKeys;
