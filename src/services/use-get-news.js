import { useQuery } from "@tanstack/react-query";
import getNews from "./news.api";
import newsQueryKeys from "./news-query-key";

export const useGetNews = (filter) => {
  return useQuery({
    queryKey: newsQueryKeys.listByFilter(filter),
    queryFn: () => getNews(filter),
  });
};
