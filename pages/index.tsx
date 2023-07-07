import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl text-gray-700 mt-5">Next.js課題</h1>
      <p className="mt-5">環境：Next.js（ver13以前）,TypeScript,TailwindCSS</p>
      <p className="mt-5">猫画像をＳＳＲとＣＳＲを使って表示する</p>
    </div>
  );
};

export default IndexPage;
