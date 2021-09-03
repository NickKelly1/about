import clsx from 'clsx';
import { FC } from 'react';
import { Description } from '../Description/Description';
import { Fresh } from '../Fresh/Fresh';
import { IPostable } from './copy/post.interface';
import styles from './Post.module.scss';

interface PostProps {
  post: IPostable;
}

export const Post: FC<PostProps> = (props) => {
  const {
    post,
  } = props;

  const {
    title,
    date,
    body,
  } = post;

  return (
    <article className={styles.post}>
      <h3 className={clsx('h3', styles.title)}>
        <Fresh>
          {title}
        </Fresh>
      </h3>

      <div className={clsx('h3', styles.date)}>
        {date}
      </div>

      <Description
        className={styles.description}
        text={body}
      />
    </article>
  );
};
