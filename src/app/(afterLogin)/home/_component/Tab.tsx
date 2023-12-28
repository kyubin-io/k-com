"use client";
import { useState } from "react";

const HOME_TAB_CLASS =
  "flex-1 flex items-center justify-center text-base cursor-pointer relative";

const TAB_INDICATOR_CLASS =
  "h-1 self-center bg-[#1d9bf0] min-w-[56px] w-14 absolute bottom-0 border-r-[9999px] scale-x-75";

export default function Tab() {
  const [tab, setTab] = useState("rec");

  const onClickRec = () => {
    setTab("rec");
  };
  const onClickFol = () => {
    setTab("fol");
  };

  return (
    <div className="fixed z-[1] w-[598px] bg-white bg-opacity-80 backdrop-blur-md border-[#eff3f4] border-b border-solid">
      <div className="text-xl leading-6 font-bold py-3 px-4">홈</div>
      <div className="h-14 flex">
        <div onClick={onClickRec} className={HOME_TAB_CLASS}>
          Recommend
          <div className={TAB_INDICATOR_CLASS} hidden={tab === "fol"}></div>
        </div>
        <div onClick={onClickFol} className={HOME_TAB_CLASS}>
          Following
          <div className={TAB_INDICATOR_CLASS} hidden={tab === "rec"}></div>
        </div>
      </div>
    </div>
  );
}
