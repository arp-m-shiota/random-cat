import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { Button } from "../components";

type Props = {
  initialImageUrl: string;
};

const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // 初期画像表示
  //   fetchImage().then((newImage) => {
  //     setImageUrl(newImage.url);
  //     setLoading(false);
  //   });
  // }, []);

  // ボタン用
  const handleClick = async () => {
    setLoading(true);
    const newImage = await fetchImage();
    setImageUrl(newImage.url);
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-5 mb-5">
        <Button title="他のにゃんこも見る" onClick={handleClick} />
      </div>
      <div className="max-w-[500px]">
        {loading ? (
          <div className="mt-10 text-4xl font-bold">loading...</div>
        ) : (
          <img className="rounded" src={imageUrl} />
        )}
      </div>
    </div>
  );
};

// サーバーサイドで実行する関数
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const image = await fetchImage();
  return {
    props: {
      initialImageUrl: image.url,
    },
  };
};

export default IndexPage;

type Image = {
  url: string;
};

const fetchImage = async (): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  // console.log(images);
  return images[0];
};

fetchImage();
