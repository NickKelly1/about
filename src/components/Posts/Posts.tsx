import clsx from 'clsx';
import { FC } from 'react';
import { IPostable } from '../Post/copy/post.interface';
import { Post } from '../Post/Post';
import { Title } from '../Title/Title';
import { Container } from '../Container/Container';
import styles from './Posts.module.scss';

interface PostsProps {
  posts: IPostable[]
  className?: string;
}
export const Posts: FC<PostsProps> = (props) => {
  const { posts, className, } = props;

  return (
    <Container className={clsx(styles.posts, className)}>
      <Title className={styles.title}>
        Posts
      </Title>
      <ul className={styles.list}>
        {posts.map((post, i) => (
          <li key={i} className={styles.post}>
            <Post
              post={post}
            />
          </li>
        ))}
      </ul>

    </Container>
  );
};
