import api from "@/api/axios-instance";

const getNews = async ({ sortBy, ...params }) => {
  delete params.sortFor;
  const response = await api.get(`/${sortBy}`, {
    params,
  });

  const data = response.data;

  return data;
};

export default getNews;
