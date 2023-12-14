import Image from "next/image";
import logo from "../../public/images/logo_black.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex-1 flex justify-center items-center">
        <Image src={logo} alt="logo" width={350} height={350} />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="font-bold text-4xl	my-12">{`See what's happening in the world right now`}</h1>
        <h2 className="font-bold text-2xl mb-8">Join K-World today</h2>
        <Link
          href="/i/flow/signup"
          className="w-[300px] h-[40px] text-sm rounded-2xl px-4 bg-[#1d9bf0] flex items-center justify-center border-none text-white hover:bg-[#1a8cd8]"
        >
          Sign up
        </Link>
        <h3 className="font-bold text-lg mb-5 mt-10">Already signed in?</h3>
        <Link
          href="/login"
          className="w-[300px] h-[40px] text-sm rounded-2xl px-4 flex items-center justify-center text-[#1d9bf0] border border-solid	border-[#cfd9de] hover:bg-[#1a8cd8] hover:bg-opacity-10"
        >
          Log in
        </Link>
      </div>
    </>
  );
}
