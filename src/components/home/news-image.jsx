import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NewsImage = () => {
  return (
    <Avatar className="w-20 h-20 rounded-sm border">
      <AvatarImage />
      <AvatarFallback>IN</AvatarFallback>
    </Avatar>
  );
};

export default NewsImage;
