import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import Logo from "../../../public/images/logo_black.png";
import NavMenu from "./_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";
import TrendSection from "./_component/TrendSection";
import FollowRecommend from "./_component/FollowRecommend";
import RightSearchZone from "./_component/RightSearchZone";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className="flex items-stretch bg-white">
      <header className="flex items-end flex-grow flex-shrink-0 flex-col">
        <section className="w-72 h-screen">
          <div className="fixed w-72 h-screen flex flex-col">
            <Link href="/home" className="inline-block h-14 mt-1">
              <div className="w-12 h-12 rounded-[50%] flex justify-center items-center hover:bg-slate-300 hover:bg-opacity-10">
                <Image src={Logo} alt="Logo" width={40} height={40} />
              </div>
            </Link>
            <nav className="flex-1">
              <ul>
                <NavMenu />
              </ul>
              <Link
                href="/compose/tweet"
                className="my-4 flex justify-center items-center h-12 shadow-md bg-[#1d9bf0] w-56 border-none text-white font-bold text-base rounded-3xl"
              >
                Post
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className="flex items-start flex-grow h-screen flex-col">
        <div className="h-full w-[990px] flex justify-between">
          <main className="w-[600px] h-[200dvh]">{children}</main>
          <section className="w-[350px] h-full">
            <RightSearchZone />
            <TrendSection />
            <div className="text-xl font-bold bg-slate-100 rounded-2xl my-3 py-3 px-4">
              <h3>팔로우 추천</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
