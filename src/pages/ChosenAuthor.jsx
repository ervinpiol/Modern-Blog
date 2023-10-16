import React from "react";
import { useParams } from "react-router-dom";

import { blogsData } from "../data/blogsData";
import BlogCard from "../common/BlogCard";
import { teamData } from "../data/teamData";

import SectionTitle from "../common/SectionTitle";
import AuthorDetails from "../components/ChosenAuthor/AuthorDetails";
import Transition from "../layouts/Transition";

const ChosenAuthor = () => {
  const { authorName } = useParams();

  const author = teamData.find(
    (t) => t.name.toLowerCase().replace(/\s+/g, "-") === authorName
  );

  const authorWorks = blogsData.filter(
    (blog) => blog.author.toLowerCase().replace(/\s+/g, "-") === authorName
  );

  return (
    <div>
      <div className="xl:w-[1440px] mx-auto">
        <div className="xl:w-[90%] mx-auto flex justify-center flex-col items-start pt-40 px-[5%] xl:px-0">
          <AuthorDetails author={author} />
          <div className="w-full pt-28 xl:px-[5%] pb-20 glow">
            <SectionTitle title="Latest Post" isSolo />
            <div className="grid w-full gap-4 pt-10 lg:grid-cols-2">
              <BlogCard data={authorWorks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transition(ChosenAuthor);
