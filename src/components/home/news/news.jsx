import { useGetNews } from "../../../services/use-get-news";
import NewsCard from "./news-card";
import NoNewsFound from "./no-news-found";
import NewsLoading from "./news-loading";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useFilterStore } from "@/store/use-filter.store";

const NewsList = () => {
  const { filter, setPage } = useFilterStore();
  const { data, isLoading, isError } = useGetNews(filter);

  if (isLoading) {
    return <NewsLoading />;
  }

  if (isError) {
    return <NoNewsFound message="Something Went Wrong!" />;
  }

  const pageChangeHandler = ({ selected }) => {
    setPage(selected);
  };

  return (
    <div className="max-w-4xl mx-auto grid gap-6">
      {!!data?.hits.length ? (
        <>
          <ul className="space-y-4">
            {data.hits.map((news) => (
              <li key={news.objectID}>
                <NewsCard {...news} />
              </li>
            ))}
          </ul>

          <ReactPaginate
            breakLabel={"..."}
            nextLabel={<ChevronRight />}
            marginPagesDisplayed={4}
            pageCount={50}
            previousLabel={<ChevronLeft />}
            renderOnZeroPageCount={null}
            onPageChange={pageChangeHandler}
            containerClassName="flex gap-4 justify-end items-center"
            pageClassName="w-8 h-8 border rounded-md bg-white"
            pageLinkClassName="w-full h-full flex justify-center items-center"
            activeLinkClassName="bg-gray-200"
            disabledClassName="cursor-not-allowed"
            forcePage={filter.page}
          />
        </>
      ) : (
        <NoNewsFound />
      )}
    </div>
  );
};

export default NewsList;
