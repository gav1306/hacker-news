import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NewsImage from "./news-image";
import { Clock1, Heart, MessageCircle } from "lucide-react";
import { formatSecondsToDate } from "@/utils/helper";
import { Button } from "@/components/ui/button";

const NewsCard = ({
  author,
  num_comments,
  url,
  points,
  title,
  created_at_i,
}) => {
  return (
    <Card className="flex w-[800px] items-center gap-4 p-4 shadow-md">
      <NewsImage author={author} />
      <CardContent className="p-0 flex-1 grid gap-2">
        <CardHeader className="p-0">
          <CardTitle className="font-bold text-lg">{title}</CardTitle>
        </CardHeader>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="px-2 py-1 bg-red-100 text-red-600 rounded-md">
            {author}
          </span>
          <span className="flex items-center gap-1">
            <Clock1 className="w-4 h-4" />
            {formatSecondsToDate(created_at_i)}
          </span>
        </div>

        <a
          href={url}
          target="_blank"
          className="text-xs hover:underline text-gray-400"
        >
          {url}
        </a>

        <div className="flex items-center gap-4 text-xs text-gray-500">
          {points && (
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4 text-red-500" /> {points}
            </span>
          )}
          {num_comments && (
            <span className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" /> {num_comments}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
