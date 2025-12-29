import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export function ShortlistItem({
    puppy,
    setLiked
}: {
    puppy: {
        id: number;
        name: string;
        imagePath: string;
        vibe: string
    },
    setLiked: Dispatch<SetStateAction<number[]>>
}) {
    return (
        <li className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0">
          <img
            height={32}
            width={32}
            alt={puppy.name}
            className="aspect-square w-8 object-cover"
            src={puppy.imagePath}
          />
          <p className="px-3 text-sm text-slate-800">{puppy.name}</p>
          <button
            className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100"
            onClick={() => {
                // Remove from shortlist logic to be implemented
                setLiked((liked) => liked.filter((id) => id !== puppy.id));
            }}
          >
            <X className="size-4 stroke-slate-400 group-hover:stroke-red-400" />
          </button>
        </li>
    );
}   