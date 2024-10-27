import SearchForm from "../_component/SearchForm";
import Trend from "../_component/Trend";

export default function Home() {
  return (
    <main className="w-[600px] border-[#eff3f4] border-r border-l border-solid flex flex-col items-stretch">
      <div className="pl-4 w-[566px] mb-[60px]">
        <SearchForm />
      </div>
      <div className="border-[#eff3f4] border-t border-solid text-xl font-bold mb-3">
        <h3 className="py-3 px-4">Trend for Me</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </main>
  );
}
