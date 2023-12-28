import Link from "next/link";

export default function Trend() {
  return (
    <Link
      href={`/search?q=trend`}
      className="py-3 px-4 h-20 block hover:bg-opacity-5 hover:bg-black"
    >
      <div className="text-sm text-[##536471] font-light leading-4">Trend</div>
      <div className="text-sm font-bold leading-5 mt-[2px] mb-1">Hello</div>
      <div className="text-sm text-[##536471] font-light leading-4">
        1,234 posts
      </div>
    </Link>
  );
}
