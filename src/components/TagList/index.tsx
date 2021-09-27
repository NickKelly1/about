import clsx from 'clsx';
import { h, FunctionComponent } from 'preact';
import styles from './styles.module.scss';
import { Tag } from '../Tag';

interface TagListProps {
  tags: string[]
  centered?: boolean;
  class?: string;
}

export const TagList: FunctionComponent<TagListProps> = (props) => {
  const {
    class: className,
    centered,
    tags,
  } = props;

  return (
    <ul className={clsx(
      'wrap-list',
      centered && 'centered',
      styles.tagList,
      className,
    )}>
      {tags.map((tag, i) => <li key={i}><Tag name={tag} /></li>)}
    </ul>
  )
}
