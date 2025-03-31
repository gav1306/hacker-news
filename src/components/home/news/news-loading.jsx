import CardSkeleton from "@/components/skeleton";
import { PAGE_SIZE } from "@/utils/constants";
import React from "react";

const NewsLoading = () => {
  return (
    <div className="gap-4 grid mx-auto w-[800px]">
      {Array.from({ length: PAGE_SIZE }).map((_, index) => {
        return <CardSkeleton key={index} />;
      })}
    </div>
  );
};
export default NewsLoading;
