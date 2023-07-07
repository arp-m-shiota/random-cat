import { GetServerSideProps, NextPage } from "next";
import { Button } from "../../components";
import { fetchImage } from "../../utils";
import { useState } from "react";

type Props = {
  initialImageUrl: string;
};

const CatImage: NextPage<Props> = ({ initialImageUrl }) => {
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
        <Button title="今日のにゃんこも見る" onClick={handleClick} />
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

export default CatImage;

// サーバーサイドで実行する関数
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const image = await fetchImage();
  return {
    props: {
      initialImageUrl: image.url,
    },
  };
};
