"use client";

import { usePathname } from "next/navigation";
import Trend from "@/app/(afterLogin)/_component/Trend";

export default function TrendSection() {
  const pathname: string = usePathname();
  const onChangeFollow = () => {};
  const onChangeAll = () => {};
  if (pathname === "/explore") {
    return null;
  }
  if (pathname === "/search") {
    return (
      <div>
        <h5 className="bg-white py-3 px-4 text-[rgba(15,20,25,1.00)] text-xl font-bold mb-4 rounded-2xl border border-solid border-[rgb(239,243,244)] mt-3">
          Search Filter
        </h5>
        <div className="pt-0 px-4 pb-3 mb-4 rounded-2xl border border-solid border-[rgb(239,243,244)]">
          <div>
            <label className="text-base font-bold h-9 flex items-center">
              User
            </label>
            <div className="flex">
              <div>All User</div>
              <input
                type="radio"
                name="pf"
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className="flex">
              <div>Following</div>
              <input
                type="radio"
                name="pf"
                value="on"
                onChange={onChangeFollow}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-slate-100 rounded-2xl mt-3">
      <div className="text-xl font-bold py-3">
        <h3 className="mb-3 px-4">Trend For Me</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
