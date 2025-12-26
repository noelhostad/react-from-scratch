import { Dispatch, SetStateAction, useState } from "react";
import { Heart } from "lucide-react";
<<<<<<< HEAD
import { Puppy } from "../types";
=======
import * as React from "react";

export function LikeToggle() {
  const [isLiked, setIsLiked] = React.useState(false);
  const [count, setCount] = React.useState(0);

  function handleClick() {
    console.log("clicked");
    setIsLiked(!isLiked);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }
>>>>>>> testing remoteS

export function LikeToggle({
  id,
  liked,
  setLiked,
}: {
  id: Puppy["id"];
  liked: Puppy["id"][];
  setLiked: Dispatch<SetStateAction<Puppy["id"][]>>;
}) {
  return (
    <button
      className="group"
      onClick={() => {
        if (liked.includes(id)) {
          setLiked(liked.filter((pupId) => pupId !== id));
        } else {
          setLiked([...liked, id]);
        }
      }}
    >
      <Heart
        className={
          liked.includes(id)
            ? "fill-pink-500 stroke-none"
            : "stroke-slate-200 group-hover:stroke-slate-300"
        }
      />
    </button>
  );
}
