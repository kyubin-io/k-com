"use client";

import { useRef, useState } from "react";

export default function TweetModal() {
  const [content, setContent] = useState();
  const imageRef = useRef<HTMLInputElement>(null);
  const onSubmit = () => {};
  const onClickClose = () => {};
  const onClickButton = () => {};
  const onChangeContent = () => {};

  const me = {
    id: "test",
    image: "/images/logo_black.png",
  };

  return (
    <div className="w-screen h-full flex justify-center absolute z-10 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40">
      <div className="bg-white relative t-[5%] max-w-[80vw] min-w-[600px] max-h-[400px] rounded-2xl flex flex-col">
        <button
          className="w-[34px] h-[34px] rounded-2xl border-none cursor-pointer bg-white absolute left-2 top-2 flex items-center justify-center hover:bg-[#0f1419] hover:bg-opacity-10"
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
        <form className="flex flex-col flex-1" onSubmit={onSubmit}>
          <div className="px-4 flex-1 mt-14 flex flex-row">
            <div className="mr-3 w-10">
              <div className="w-10 h-10 rounded-[20px]">
                <img src={me.image} alt={me.id} />
              </div>
            </div>
            <div className="flex-1">
              <textarea
                className="w-full border-none outline-none text-xl"
                placeholder="무슨 일이 일어나고 있나요?"
                value={content}
                onChange={onChangeContent}
              />
            </div>
          </div>
          <div className="p-4">
            <div className="w-full border-b border-solid border-gray-200" />
            <div className="flex flex-row items-center">
              <div className="flex-1">
                <input
                  type="file"
                  name="imageFiles"
                  multiple
                  hidden
                  ref={imageRef}
                />
                <button
                  className="w-[34px] h-[34px] border-none cursor-pointer rounded-2xl bg-[#1d9bf0] bg-opacity-5 transition-{background-color} duration-200 flex justify-center items-center hover:bg-opacity-15"
                  type="button"
                  onClick={onClickButton}
                >
                  <svg
                    width={24}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="fill-[#1d9bf0]"
                  >
                    <g>
                      <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                    </g>
                  </svg>
                </button>
              </div>
              <button
                className="cursor-pointer w-24 h-9 rounded-2xl border-none my-2 mx-0 bg-[rgb(29,155,240)] text-white text-lg"
                disabled={!content}
              >
                게시하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
