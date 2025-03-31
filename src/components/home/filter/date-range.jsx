import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LAST_DAY,
  LAST_MONTH,
  LAST_WEEK,
  LAST_YEAR,
  SORT_FOR,
} from "@/utils/constants";
import { useFilterStore } from "@/store/use-filter.store";
import moment from "moment";

const DateRange = () => {
  const {
    setCreatedAtGreaterThanTimestamp,
    resetNumericFilters,
    filter,
    setCreatedAtAsRange,
  } = useFilterStore();

  const selectedRangeHandler = (range) => {
    if (range?.from && range.to) {
      const startTimestamp = moment(range.from).unix();
      const endTimestamp = moment(range.to).unix();

      setCreatedAtAsRange(startTimestamp, endTimestamp);
    }
  };
  const rangeArray = filter.numericFilters.split(",");
  const createdFrom = rangeArray[0];
  const createdTo = rangeArray[1];
  const fromSeconds = createdFrom?.split("=")[1];
  const toSeconds = createdTo?.split("=")[1];
  const from = fromSeconds
    ? moment(fromSeconds * 1000).toDate()
    : moment().toDate();
  const to = toSeconds ? moment(toSeconds * 1000).toDate() : moment().toDate();

  const selectedSortFor = SORT_FOR.find((option) => {
    return option.value === filter.sortFor;
  });

  const valueChangeHandler = (value) => {
    switch (value) {
      case "all": {
        resetNumericFilters();
        break;
      }
      case "day": {
        setCreatedAtGreaterThanTimestamp(LAST_DAY, value);
        break;
      }
      case "week": {
        setCreatedAtGreaterThanTimestamp(LAST_WEEK, value);
        break;
      }
      case "month": {
        setCreatedAtGreaterThanTimestamp(LAST_MONTH, value);
        break;
      }
      case "year": {
        setCreatedAtGreaterThanTimestamp(LAST_YEAR, value);
        break;
      }
      default: {
        resetNumericFilters();
      }
    }
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className="w-[240px] justify-start text-left font-normal bg-black/40 hover:bg-black/40 text-white hover:text-white border-white/20 flex-1"
        >
          <CalendarIcon />
          <span>{selectedSortFor?.name || "Custom"}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="flex w-auto flex-col space-y-2 p-2 bg-black/40 text-white border-white/20"
      >
        <Select
          value={filter.sortFor || undefined}
          onValueChange={valueChangeHandler}
        >
          <SelectTrigger className="bg-black/40 text-white border-white/20 flex-1">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent
            position="popper"
            className="bg-primary border-white/20 text-white"
          >
            {SORT_FOR.map((item) => (
              <SelectItem key={item.id} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar
            mode="range"
            selected={{ from, to }}
            onSelect={selectedRangeHandler}
            disabled={{ after: moment().toDate() }}
            className="bg-primary rounded-md"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DateRange;
