import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

const EditArticle = (props) => {
  const [article, setArticle] = useState({ heading: "", content: "" });
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (params.id) {
      getArticle(params.id);
    }
  }, []);

  const getArticle = async (id) => {
    try {
      const article = await axios.get(`/articles/${id}`);
      if (article.data.length > 0) {
        setArticle({
          heading: article.data[0].heading,
          content: article.data[0].content,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (params.id) {
      await axios.put(`/articles/${params.id}`, article);
    } else {
      await axios.post(`/articles`, article);
    }
    navigate("/");
  };

  return (
    <>
      <div className="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="text-center">
                <h1 className="text-4xl font-semibold text-white">
                  {params.id ? "Edit Article" : "Create Article"}
                </h1>
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
        </div>
      </div>
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container justify-center">
          <div className="w-full px-4 md:w-1/2 lg:w-2/3 m-auto">
            <div className="mb-12">
              <label
                htmlFor=""
                className="mb-3 block text-base font-medium text-black"
              >
                Default Input
              </label>
              <input
                type="text"
                placeholder="Default Input"
                name="heading"
                value={article.heading}
                onChange={handleChange}
                className="w-full rounded-lg border-[1.5px] border-htmlForm-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
              />
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-2/3 m-auto">
            <div className="mb-12">
              <label
                htmlFor=""
                className="mb-3 block text-base font-medium text-black"
              >
                Default textarea
              </label>
              <textarea
                rows="5"
                placeholder="Default textarea"
                value={article.content}
                name="content"
                onChange={handleChange}
                className="w-full rounded-lg border-[1.5px] border-htmlForm-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
              ></textarea>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3 m-auto">
            <div className="mb-12">
              <span
                className="inline-flex items-center justify-center rounded-md border border-emerald-500 py-4 px-10 text-center text-base text-emerald-400 transition hover:border-primary hover:bg-emerald-800 hover:text-white lg:px-8 xl:px-10 cursor-pointer"
                onClick={handleSubmit}
              >
                {params.id ? "Update" : "Create"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default EditArticle;
