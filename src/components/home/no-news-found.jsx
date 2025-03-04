import { AlertTriangleIcon } from "lucide-react";

const NoNewsFound = () => {
  return (
    <div className="flex items-center gap-4 justify-center">
      <AlertTriangleIcon size={40} />
      <h3>No news found</h3>
    </div>
  );
};

export default NoNewsFound;
