import useGameQueryStore from "../store";

const SortOrderSelector = () => {
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <div className="flex items-center gap-2 flex-1 max-sm:justify-center">
      <p>Order by:</p>
      <select
        onChange={(event) => setSortOrder(event.target.value)}
        className="focus:outline-none shadow-2xl"
      >
        {sortOrders.map((sortOrder) => (
          <option value={sortOrder.value} key={sortOrder.value}>
            {sortOrder.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SortOrderSelector;
