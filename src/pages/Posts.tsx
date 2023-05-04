import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getPostFn } from "../services/posts";
import PostList from "../components/Lists/PostList";

const Posts = () => {
  const params = useParams();
  // should be good to add typeing in react router params
  const userId = params.userId as string;

  const { data, isLoading } = useQuery({
    queryKey: ["getPosts", userId],
    queryFn: () => getPostFn(userId),
  });
  if (isLoading) {
    return <span>User Posts is Loading</span>;
  }
  return <PostList posts={data || []} />;
};

export default Posts;
