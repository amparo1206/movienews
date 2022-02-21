import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import './News.scss'
const News = () => {
    const { news, getNews } = useContext(GlobalContext);
    useEffect(() => {
        getNews();
    }, []);
    const New = news.map((element) => {
        return (
            <div className="new-container">
                <div className="card">
                    <div className="new" key={element.id}>
                        <article>
                            <h1 className="title">{element.title.toUpperCase()}</h1>
                            <h3>Section: {element.section.toUpperCase()}</h3>
                            <p className="">{element.subsection.toUpperCase()}</p>
                            <p className="">{element.abstract}</p>
                            <img src={element.multimedia[1].url} />
                            <a href="{element.url}"></a>
                        </article>
                    </div>
                </div>
            </div>
        );
    });
    return <div className="New">{New}</div>;

}
export default News;