import { Heart } from "lucide-react";
import { useState } from "react";

export function LikeToggle() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
        className="group flex items-center gap-1"
        onClick={() => setIsLiked(!isLiked)}
    >
      <Heart
        className={
          isLiked
            ? "fill-pink-500 stroke-none"
            : "stroke-slate-200 group-hover:stroke-slate-300"
        }
      />
    </button>
  );
}
