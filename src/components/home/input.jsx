import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const InputField = () => {
  return (
    <div className="flex flex-row border justify-center items-center w-3/4">
      <SearchIcon />
      <Input type="text" placeholder="Search" className="border-none" />
    </div>
  );
};
export default InputField;
