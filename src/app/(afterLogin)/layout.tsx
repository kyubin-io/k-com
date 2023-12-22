import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import Logo from "../../../public/images/logo_black.png";
import NavMenu from "./_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
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
      <div className="flex items-start flex-grow flex-shrink h-screen flex-col">
        <div className="h-full w-[990px] flex justify-between">
          <main className="w-[600px] bg-gray-100">{children}</main>
          <section className="bg-blue-100 w-[350px] h-full">
            <form className="flex h-11 w-full rounded-3xl bg-slate-400 mt-2 mb-3 items-center">
              <svg
                width={20}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="ml-5 fill-[rgb(83,100,113)]"
              >
                <g>
                  <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                </g>
              </svg>
              <input
                type="search"
                className="outline-none bg-inherit border-none p-3 ml-1 text-sm"
              />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
