import { IconTrash } from "@tabler/icons-react";
import { ActionIcon, Card, Group, Text } from "@mantine/core";
import { IPost } from "../../interfaces";

type Props = {
  post: IPost;
  onDelete: (id: number) => void;
};

const PostCard = ({ post, onDelete }: Props) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Group position="apart" mb="xs">
        <Text weight={500}>{post.title}</Text>
        <ActionIcon onClick={() => onDelete(post.id)}>
          <IconTrash size={14} />
        </ActionIcon>
      </Group>

      <Text size="sm" color="dimmed">
        {post.body}
      </Text>
    </Card>
  );
};

export default PostCard;
