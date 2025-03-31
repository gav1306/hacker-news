import { Skeleton } from "@/components/ui/skeleton";

const CardSkeleton = () => {
  return (
    <div className="p-4 flex items-center gap-4 w-full border rounded-lg shadow-sm bg-white">
      <Skeleton className="w-20 h-20 rounded-full" />
      <div className="flex-1 grid gap-2">
        <Skeleton className="h-7 w-5/6" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-4 w-1/3" />
        <div className="flex space-x-4">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
