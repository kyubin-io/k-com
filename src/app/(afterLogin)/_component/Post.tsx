import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// import "dayjs/locale/ko";
// import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import Image from "next/image";

// dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Post() {
  const target = {
    User: {
      id: "elonmusk",
      nickname: "Elon Musk",
      image: "/images/logo_black.png",
    },
    content: "Now or Never!",
    createdAt: new Date(),
    Images: [],
  };
  return (
    <article className="flex flex-col py-3 px-4 border-[#eff3f4] border-b border-solid transition-[background-color,box-shadow] duration-200 cursor-pointer hover:bg-black hover:bg-opacity-5">
      <div className="flex flex-row">
        <div className="mr-3 w-10 relative">
          <Link
            href={`/${target.User.id}`}
            className="inline-block w-10 h-10 rounded-[20px] absolute top-0 left-0 hover:bg-[#1a1a1a] hover:bg-opacity-10"
          >
            <Image
              src={target.User.image}
              alt={target.User.nickname}
              width={40}
              height={40}
              className="rounded-[20px]"
            />
            <div className="inline-block w-10 h-10 rounded-[20px]" />
          </Link>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row">
            <Link href={`/${target.User.id}`}>
              <span className="font-bold hover:underline">
                {target.User.nickname}
              </span>
              &nbsp;
              <span>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className="text-[#536471] hover:underline">
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <div></div>
          {/* <ActionButtons /> */}
        </div>
      </div>
    </article>
  );
}
