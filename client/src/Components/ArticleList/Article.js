import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/blog-01.jpg";

const Article = (props) => {
  const { heading, content, created_at, id } = props;
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="-mx-4 flex flex-wrap">
        <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
          <div className="mb-8 overflow-hidden rounded">
            <Link to={`/articles/${id}`} className="block">
              <img
                src={img}
                alt="image"
                className="w-full transition group-hover:rotate-6 group-hover:scale-125"
              />
            </Link>
          </div>
          <div>
            <span className="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
              {created_at}
            </span>
            <h3>
              <Link
                to={`/articles/${id}`}
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {heading}
              </Link>
            </h3>
            <p className="text-base text-body-color">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
