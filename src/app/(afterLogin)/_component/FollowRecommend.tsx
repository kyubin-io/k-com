"use client";

import Image from "next/image";

export default function FollowRecommend() {
  const onFollow = () => {};

  const user = {
    id: "elonmusk",
    nickname: "Elon Musk",
    image: "/yRsRRjGO.jpg",
  };

  return (
    <div className="py-3 h-16 flex">
      <div>
        <div className="w-10 mr-3">
          <Image
            src={user.image}
            alt={user.id}
            width={40}
            height={40}
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className=" text-base font-bold leading-5">{user.nickname}</div>
        <div className="text-[#536471] text-sm leading-4">@{user.id}</div>
      </div>
      <div className="w-[76px]">
        <button
          onClick={onFollow}
          className="border-none cursor-pointer w-full text-white bg-black text-sm font-bold h-8 rounded-2xl hover:bg-[#272c30]"
        >
          Follow
        </button>
      </div>
    </div>
  );
}
