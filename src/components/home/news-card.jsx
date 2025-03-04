import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NewsCard = () => {
  return (
    <Card className="flex gap-6 p-6">
      <CardHeader className="p-0">
        <NewsImage />
      </CardHeader>
      <CardContent className="grid gap-3 p-0">
        <CardTitle>Name</CardTitle>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Heart size={14} />
            <span className="font-normal text-xs"></span>
          </div>
          <div className="flex items-center gap-2">
            <UserRound size={14} />
            <span className="font-normal text-xs"></span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare size={14} />
            <span className="font-normal text-xs"></span>
          </div>
          <div className="flex items-center gap-2">
            <Clock1 size={14} />
            <span className="font-normal text-xs"></span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
