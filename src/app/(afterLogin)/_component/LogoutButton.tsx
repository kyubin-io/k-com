"use client";

import Image from "next/image";

export default function LogoutButton() {
  const me = {
    // temporary variable
    id: "kb",
    nickname: "kei",
    image: "/images/logo_black.png",
  };

  const onLogout = () => {};

  return (
    <button
      className="w-64 h-16 p-3 flex my-3 cursor-pointer border-none items-center bg-white text-left hover:rounded-[33px] hover:bg-[#0f1419] hover:bg-opacity-10"
      onClick={onLogout}
    >
      <div className="flex items-center">
        <Image
          src={me.image}
          alt={me.id}
          width={40}
          height={40}
          className="border-r-[50%]"
        />
      </div>
      <div className="mx-3">
        <div className="font-bold">{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
