import React, {useState} from "react";
import NewsContext from "./NewsContext";

const NewsContextProvider = ({children}) => {
    const [news, setNews] = useState(null)


    const fetchNews = async () => {
        try {
            const response = await fetch("http://localhost:5000/news");
            const json = await response.json();
            setNews(json)
        } catch (error) {
            console.log("Some error occurred", error);
        }
    };


    return (
        <NewsContext.Provider value={{news, setNews, fetchNews}}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsContextProvider