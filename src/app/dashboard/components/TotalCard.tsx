import React from 'react';
import { LucideIcon } from 'lucide-react'; // Adjust import based on your setup

interface TotalCardProps {
  caption?: string | null;
  count?: number | null;
  Icon?: LucideIcon | null;
}

const TotalCard: React.FC<TotalCardProps> = ({ caption, count, Icon }) => {
  return (
    <div className="alt border altborder rounded-xl p-6">
      <div className="flex justify-between items-center rounded-xl mb-4">
        <p>{caption || "No Caption"}</p>
        {Icon ? <Icon /> : null}
      </div>
      <h1 className="text-4xl font-bold">{count ?? 'N/A'}</h1>
    </div>
  );
};

export default TotalCard;
