import { useState } from "react";

const IndexPage = () => {
    const firstURL = "https://idolmaster-official.jp/idolmaster/jp/article/1002/SHINYCOLORS/2022/04/%E7%94%BB%E5%83%8F%E2%91%A0_%E6%9D%9C%E9%87%8E%E5%87%9B%E4%B8%96%E3%83%95%E3%82%A3%E3%82%AE%E3%83%A5%E3%82%A2.jpg?_=1665931560";
    const secondURL = "https://product.amiami.jp/amiami/project/rinze/assets/img/slider/1.jpg";
    const [catImageUrl, setCatImageUrl] = useState(firstURL);
    const [isFlag, setFlag] = useState(false);
    
    const getNewImage = () => {
        setCatImageUrl(isFlag ? firstURL : secondURL);
        setFlag(!isFlag);
    }
    
    return (
        <div>
            <h1>Hello, Next.js</h1>
            <button onClick={getNewImage}>画像が変わるよ</button>
            <img src={catImageUrl}></img>
        </div>
    );
};

export default IndexPage;