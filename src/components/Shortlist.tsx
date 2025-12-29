import { type Puppy } from "../types";
import { ShortlistItem } from "./ShortlistItem";
import { Dispatch, SetStateAction } from "react";

export function Shortlist({
  liked,
  puppies,
  setLiked
}: {
  liked: number[],
  puppies: Puppy[],
  setLiked: Dispatch<SetStateAction<number[]>>
} ) {
  return (
    <div>
      <h2 className="flex items-center gap-2 font-medium">
        <span>Your shortlist</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-heart inline-block size-6 fill-pink-500 stroke-pink-500"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </h2>
      <ul className="mt-4 flex flex-wrap gap-4">
        {
          puppies
            .filter((puppy) => liked.includes(puppy.id))
            .map((puppy) => (
              <ShortlistItem key={puppy.id} puppy={puppy} setLiked={setLiked} />
            ))
        }
      </ul>
    </div>
  );
}