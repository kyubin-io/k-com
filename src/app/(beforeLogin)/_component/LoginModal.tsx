"use client";
import { useState } from "react";

export default function LoginModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const onSubmit = () => {};
  const onClickClose = () => {};

  const onChangeId = () => {};

  const onChangePassword = () => {};

  return (
    <div className="w-full h-full flex items-center justify-center absolute bg-black bg-opacity-40 inset-0">
      <div className="bg-white relative top-[5%] max-w-[80vw] min-w-[600px] rounded-md flex flex-col h-[450px]">
        <div className="text-3xl font-bold px-20 pt-9 pb-5">
          <button
            className="w-8 h-8 rounded-full border-none cursor-pointer bg-white absolute top-4 left-4 flex items-center justify-center hover:rotate-90 hover:transition-all"
            onClick={onClickClose}
          >
            <svg
              width={24}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
            >
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
          <div>로그인하세요.</div>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col flex-1">
          <div className="flex-1 px-8">
            <div className="flex flex-col h-[56px] relative my-2">
              <label
                className="w-full inline-block border border-solid border-gray-300 rounded-md text-sm absolute top-0 h-[56px] pt-2 px-2 text-gray-600 focus-within:text-red-100"
                htmlFor="id"
              >
                아이디
              </label>
              <input
                id="id"
                className="w-full border-none text-base mt-4 pt-3 px-2 pb-2 outline-none"
                value={id}
                onChange={onChangeId}
                type="text"
                placeholder=""
              />
            </div>
            <div className="flex flex-col h-12 relative my-2">
              <label
                className="w-full inline-block border border-solid border-gray-300 rounded-md text-sm absolute top-0 h-[56px] pt-2 px-2 text-gray-600 focus-within:text-red-100"
                htmlFor="password"
              >
                비밀번호
              </label>
              <input
                id="password"
                className="w-full border-none text-base mt-4 pt-3 px-2 pb-2 outline-none"
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder=""
              />
            </div>
          </div>
          <div>{message}</div>
          <div className="py-6 px-20">
            <button
              className="w-full h-12 rounded-full bg-gray-900 text-white text-base cursor-pointer border-none disabled:opacity-50 hover:bg-gray-700"
              disabled={!id && !password}
            >
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
