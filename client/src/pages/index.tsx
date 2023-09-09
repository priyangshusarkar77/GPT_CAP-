import * as React from "react";
import FlexTile from "@/components/flex-tile";
import Layout from "@/components/layouts/secondary";

const Home: React.FC = () => {
  return (
    <Layout title="Landing">
      <div className="h-full w-full flex flex-col justify-start items-center overflow-x-hidden">
        <FlexTile className={"gap-16 p-32"}>
          <div className="flex-[0.5] flex flex-col p-4 rounded-md h-[70%] items-start justify-center">
            <div className="text-4xl">
              GPTCAP, where intelligence of AI and security of blockchain meets.
            </div>
            <span className="text-gray-400">
              AI solution that helps on-boarding users
            </span>
          </div>
          <div className="flex-[0.4] h-[70%] ">
            <img
              src="/images/intro.png"
              alt="Intro image"
              className="object-fill rounded-md"
            />
          </div>
        </FlexTile>
        <FlexTile color="bg-white" textColor="text-black">
          Feature
        </FlexTile>
        <FlexTile>Products</FlexTile>
        <FlexTile color="bg-white" textColor="text-black">
          Security
        </FlexTile>
        <FlexTile>Footer</FlexTile>
      </div>
    </Layout>
  );
};

export default Home;
