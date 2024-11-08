"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
export default function Tab() {
  const [current, setCurrent] = useState("hot");
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickHot = () => {
    setCurrent("hot");
    router.replace(`/search?q=${searchParams.get("q")}`);
  };
  const onClickNew = () => {
    setCurrent("new");
    router.replace(`/search?${searchParams.toString()}&f=live`);
  };

  return (
    <div className="fixed z-10 w-[598px] bg-white bg-opacity-85 backdrop-blur-lg border-b border-gray-200">
      <div className="h-[53px] flex">
        <div
          className="cursor-pointer flex-1 flex items-center justify-center text-base relative"
          onClick={onClickHot}
        >
          Popular
          <div
            className="h-1 self-center bg-[#1d9bf0] min-w-14 w-14 absolute bottom-0 rounded-full"
            hidden={current === "new"}
          ></div>
        </div>
        <div
          className="cursor-pointer flex-1 flex items-center justify-center text-base relative"
          onClick={onClickNew}
        >
          Recent
          <div
            className="h-1 self-center bg-[#1d9bf0] min-w-14 w-14 absolute bottom-0 rounded-full"
            hidden={current === "hot"}
          ></div>
        </div>
      </div>
    </div>
  );
}
