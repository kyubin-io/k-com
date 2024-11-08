import BackButton from "../_component/BackButton";
import Post from "../_component/Post";
import SearchForm from "../_component/SearchForm";

type Props = {
  searchParams: { q: string; f?: string; pf?: string };
};
export default function Search({ searchParams }: Props) {
  return (
    <main className="w-[600px] border-[#eff3f4] border-r border-l border-solid flex flex-col items-stretch">
      <div className="bg-white bg-opacity-85 backdrop-blur-lg border-b border-gray-200 w-[600px] fixed">
        <div className="flex items-center">
          <div className="w-14">
            <BackButton />
          </div>
          <div className="flex-1 h-[53px] w-[526px]">
            <SearchForm q={searchParams.q} />
          </div>
        </div>
        <Tab />
      </div>
      <div className="mt-[110px]">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/*<SearchResult searchParams={searchParams} />*/}
      </div>
    </main>
  );
}
