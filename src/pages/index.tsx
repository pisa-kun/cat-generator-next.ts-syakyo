import { useState } from "react";

const IndexPage = () => {
    const catImages: string[] = [
        "https://idolmaster-official.jp/idolmaster/jp/article/1002/SHINYCOLORS/2022/04/%E7%94%BB%E5%83%8F%E2%91%A0_%E6%9D%9C%E9%87%8E%E5%87%9B%E4%B8%96%E3%83%95%E3%82%A3%E3%82%AE%E3%83%A5%E3%82%A2.jpg?_=1665931560",
        "https://product.amiami.jp/amiami/project/rinze/assets/img/slider/1.jpg",
        "https://idollist.idolmaster-official.jp/images/character_main/rinze_morino_02.jpg",
        "https://idollist.idolmaster-official.jp/images/character_main/rinze_morino_01.jpg",
        "https://shinycolors.idolmaster.jp/sp/static/img/hokagoclimaxgirls/rinze/gallery_01.jpg?220418"
    ];
    const [catImageUrl, setCatImageUrl] = useState(catImages[0]);

    const getRandomImage = (): string => {
        const index = Math.floor(Math.random() * catImages.length);
        return catImages[index];      
    }

    const getNewImage = () => {
        setCatImageUrl(getRandomImage());
    }
    
    return (
        <div>
            <button onClick={getNewImage}>画像が変わるよ</button>
            <h1>画像が変わるよ</h1>
            <img src={catImageUrl}></img>
        </div>
    );
};

export default IndexPage;