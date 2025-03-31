import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "@/utils/helper";

const NewsImage = ({ author }) => {
  return (
    <Avatar className="w-20 h-20 rounded-full border">
      <AvatarFallback className="text-4xl uppercase">
        {getInitials(author || "")}
      </AvatarFallback>
    </Avatar>
  );
};

export default NewsImage;
