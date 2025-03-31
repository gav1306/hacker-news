import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { debounceFn } from "@/utils/helper";
import { useEffect, useMemo, useState } from "react";

const SearchInput = ({ onQuery, query }) => {
  const [search, setSearch] = useState("");

  const debounceOnQuery = useMemo(() => debounceFn(onQuery), []);

  useEffect(() => {
    debounceOnQuery(search);
  }, [search]);

  useEffect(() => {
    if (query !== search) {
      setSearch(query);
    }
  }, [query]);
  return (
    <div className="relative flex-[2]">
      <SearchIcon
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
        size={18}
      />
      <Input
        type="text"
        placeholder="Search"
        className="pl-10 bg-transparent text-white placeholder-gray-400 focus:ring-0 focus:border-white w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
export default SearchInput;
