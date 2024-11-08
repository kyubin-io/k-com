import BackButton from "../_component/BackButton";
import Post from "../_component/Post";

export default function Profile() {
  const user = {
    id: "kei",
    nickname: "Kei",
    image: "/5Udwvqim.jpg",
  };
  return (
    <main className="w-[600px] border-[#eff3f4] border-r border-l border-solid flex flex-col items-stretch">
      <div className="flex h-[53px] items-center">
        <BackButton />
        <h3 className="text-xl font-bold ml-8">{user.nickname}</h3>
      </div>
      <div className="flex items-center border-b border-solid border-[#eff3f4] py-3 px-4">
        <div className="flex items-center mr-3 rounded-[50%]">
          <img
            className="w-[134px] rounded-[50%]"
            src={user.image}
            alt={user.id}
          />
        </div>
        <div className="my-0 mx-3">
          <div className="font-bold text-xl">{user.nickname}</div>
          <div className="text-base">@{user.id}</div>
        </div>
        <button className="border border-solid border-[#cfd9de] py-0 px-4 rounded-2xl h-[34px] bg-black flex items-center justify-center text-base text-white cursor-pointer hover:bg-[#272c30]">
          Follow
        </button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
