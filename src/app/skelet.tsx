import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkelet = () => {
  return (
    <div className="grid gap-y-[0.8rem] gap-x-[1rem] grid-cols-[40px_400px] w-[min-content]">
      <Skeleton className="h-[40px] rounded-full bg-[gray]" />
      <Skeleton className="h-[40px] rounded-full bg-[gray]" />
      <Skeleton className="col-span-2 h-[40px] rounded-full bg-[gray]" />
      <Skeleton className="col-span-2 h-[40px] rounded-full bg-[gray]" />
    </div>
  );
};

export default LoadingSkelet;
