import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SORT_BY } from "../../../utils/constants";
import { useFilterStore } from "@/store/use-filter.store";

const SortDropdown = () => {
  const { filter, setSortBy } = useFilterStore();
  return (
    <Select value={filter.sortBy} onValueChange={setSortBy}>
      <SelectTrigger className="bg-black/40 text-white border-white/20 flex-1">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-black/40 border-white/20 text-white">
        <SelectGroup>
          {SORT_BY.map((item) => (
            <SelectItem key={item.id} value={item.value}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortDropdown;
