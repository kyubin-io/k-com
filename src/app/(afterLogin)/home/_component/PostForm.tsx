"use client";

import Image from "next/image";
import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";

export default function PostForm() {
  const imageRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");
  const me = {
    id: "kei",
    image: "/5Udwvqim.jpg",
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const onClickButton = () => {
    imageRef.current?.click();
  };

  return (
    <form
      className="mt-[101px] flex p-4 pb-3 border-[#eff3f4] border-b-[1px] border-solid"
      onSubmit={onSubmit}
    >
      <div className="mr-3 w-10">
        <div className="w-10 h-10 rounded-[20px]">
          <Image
            src={me.image}
            alt={me.id}
            width={40}
            height={40}
            className="rounded-[20px]"
          />
        </div>
      </div>
      <div className="flex-1">
        <textarea
          value={content}
          onChange={onChange}
          placeholder="What's happening now?"
        />
        <div className="w-full">
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
                className="w-8 h-8 border-none cursor-pointer rounded-2xl transition duration-200 bg-[#1d9bf0] bg-opacity-5 flex items-center justify-center hover:bg-opacity-10"
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
              className="w-24 h-9 border-none text-white font-bold text-base rounded-2xl bg-[#1d9bf0] disabled:opacity-50 hover:bg-[#1a8cd8]"
              disabled={!content}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
