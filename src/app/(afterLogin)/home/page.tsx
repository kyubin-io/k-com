import Post from "../_component/Post";
import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";

export default function Home() {
  return (
    <main className="">
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
      </TabProvider>
    </main>
  );
}
