import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import './News.scss'
const News = () => {
    const { news, getNews } = useContext(GlobalContext);
    useEffect(() => {
        getNews();
    }, []);
    const New = news.map((element) => {
        console.log(element)
            return (
                <div className="new" key={element.id}>
                    <div>
                    <h1>{element.display_title}</h1>
                    <p>{element.byline}</p>
                    <p>{element.headline}</p>
                    <p>{element.summary_short}</p>
                    {
                        element.multimedia ? (
                            <img src={element.multimedia.src} />
                        ) : ''
                    }
                    </div>
                </div>
            );
        });
    return <div className="New">{New }</div>;

}
export default News;