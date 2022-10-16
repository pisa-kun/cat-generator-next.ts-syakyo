import type { NextPage, GetServerSideProps } from "next";
import { useState } from "react";

interface CatCategory {
  id: number;
  name: string;
}

interface SearchCatImage {
  breeds: string[];
  categories: CatCategory[];
  id: string;
  url: string;
  width: number;
  height: number;
}

interface IndexPageProps {
  initialCatImageUrl: string;
}

type SearchCatImageResponse = SearchCatImage[];

const IndexPage: NextPage<IndexPageProps> = ({
  initialCatImageUrl,
}: IndexPageProps) => {
  // 初期値として引数で受け取ったinitialCatImageUrlをセットする
  // getServerSidePropsの返り値がページ読み込み時に受け取る
  const [catImageUrl, setCatImageUrl] = useState(initialCatImageUrl);

  const getNewImage = async () => {
    //setCatImageUrl(getRandomImage());
    const image = await fetchCatImage();
    setCatImageUrl(image.url);
  };

  return (
    <div>
      <button onClick={getNewImage}>画像が変わるよ</button>
      <h1>画像が変わるよ</h1>
      <img src={catImageUrl} width={500} height="auto"></img>
    </div>
  );
};

const fetchCatImage = async (): Promise<SearchCatImage> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = (await res.json()) as SearchCatImageResponse;
  return result[0];
};

export const getServerSideProps: GetServerSideProps<
  IndexPageProps
> = async () => {
  const catImage = await fetchCatImage();
  return {
    props: {
      initialCatImageUrl: catImage.url,
    },
  };
};

export default IndexPage;
