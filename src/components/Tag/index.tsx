import clsx from 'clsx';
import { h, FunctionComponent } from 'preact';
import styles from './styles.module.scss';

interface TagProps {
  name: string;
  class?: string,
}

export const Tag: FunctionComponent<TagProps> = (props) => {
  const {
    name,
    class: className,
  } = props;

  return (
    <span
      className={clsx(
        styles.tag,
        `tc-${name.toLowerCase()}`,
        `border-${name.toLowerCase()}`,
        className,
      )}
    >
      {name}
    </span>
  )
  //
}
