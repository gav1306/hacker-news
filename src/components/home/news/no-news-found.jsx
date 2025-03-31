import { AlertTriangleIcon } from "lucide-react";

const NoNewsFound = ({ message = "No news found" }) => {
  return (
    <div className="flex items-center gap-4 justify-center max-w-4xl mx-auto mt-6">
      <AlertTriangleIcon size={40} />
      <h3>{message}</h3>
    </div>
  );
};

export default NoNewsFound;
