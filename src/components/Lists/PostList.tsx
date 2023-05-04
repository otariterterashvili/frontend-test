import { Container, Grid, Input } from "@mantine/core";
import { IPost } from "../../interfaces";
import PostCard from "../Card/PostCard";

import {  useEffect, useMemo, useState } from "react";

type Props = {
  posts: IPost[];
};

const PostList = ({ posts }: Props) => {
  const [updatePosts, setUpdatePosts] = useState<IPost[]>(posts)

  const [searchTerm, setSearchTerm] = useState('');

  const onDelete = (id: number) => {
    const fPosts = updatePosts.filter(p => p.id !== id)
    setUpdatePosts(fPosts)
  }
  

  

  const filteredPosts = useMemo(() => {
    return updatePosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [updatePosts, searchTerm])

  useEffect(() => {
    setUpdatePosts(posts)
  }, [posts])
  return (
    <Container>
      <Input onChange={(e) => setSearchTerm(e.target.value)} mt="xl" mb="xl" />
      <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
        {filteredPosts.map((post) => (
          <Grid.Col span={4} key={post.id}>
            <PostCard post={post} onDelete={onDelete} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default PostList;
