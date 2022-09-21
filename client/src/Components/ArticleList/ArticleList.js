import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Article from "./Article";
import axios from "axios";

const ArticleList = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    try {
      const articles = await axios.get("/articles");
      if (articles.data.length > 0) {
        setArticles(articles.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="text-center">
                <h1 className="text-4xl font-semibold text-white">Articles</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute top-0 left-0 z-[-1]">
            <svg
              width="495"
              height="470"
              viewBox="0 0 495 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="55"
                cy="442"
                r="138"
                stroke="white"
                strokeOpacity="0.04"
                strokeWidth="50"
              />
              <circle
                cx="446"
                r="39"
                stroke="white"
                strokeOpacity="0.04"
                strokeWidth="20"
              />
              <path
                d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
                stroke="white"
                strokeOpacity="0.08"
                strokeWidth="12"
              />
            </svg>
          </span>
          <span className="absolute top-0 right-0 z-[-1]">
            <svg
              width="493"
              height="470"
              viewBox="0 0 493 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="462"
                cy="5"
                r="138"
                stroke="white"
                strokeOpacity="0.04"
                strokeWidth="50"
              />
              <circle
                cx="49"
                cy="470"
                r="39"
                stroke="white"
                strokeOpacity="0.04"
                strokeWidth="20"
              />
              <path
                d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
                stroke="white"
                strokeOpacity="0.06"
                strokeWidth="13"
              />
            </svg>
          </span>
          <Link
            to={`/create`}
            className="absolute bottom-5 right-3 inline-flex items-center justify-center rounded-md border border-emerald-500 py-4 px-10 text-center text-base text-emerald-400 transition hover:border-primary hover:bg-emerald-800 hover:text-white lg:px-8 xl:px-10 cursor-pointer"
          >
            Create
          </Link>
        </div>
      </div>

      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {articles.map((art) => (
              <Article
                key={art.id}
                heading={art.heading}
                content={art.content}
                created_at={art.created_at}
                id={art.id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleList;
