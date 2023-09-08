const GameCardSkeleton = () => {
  return (
    <div className="animate-pulse w-[350px]  h-full">
      <div className="overflow-hidden rounded-md shadow-xl ring-1 ring-white">
        <div className="flex h-48 w-full items-center justify-center">
          <svg
            className=" w-24 text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="h-20">
          <div className="flex flex-col gap-4">
            <div className="mx-6 h-2 rounded-md bg-gray-300"></div>
            <div className="mx-6 h-2 rounded-md bg-gray-300"></div>
            <div className="mx-6 h-2 w-2/3 rounded-md bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameCardSkeleton;
