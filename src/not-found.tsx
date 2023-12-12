import { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <div>
      <div>Not Found</div>
      <Link href={"/search"}>Search</Link>
    </div>
  );
};

export default NotFound;
