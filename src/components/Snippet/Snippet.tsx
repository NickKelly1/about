import Prism from 'prismjs';
import { FC, useMemo } from 'react';
import styles from './Snippet.module.scss';
import clsx from 'clsx';

interface SnippetProps {
  code: string;
  className?: null | string;
}
export const Snippet: FC<SnippetProps> = (props) => {
  const {
    code,
    className,
  } = props;

  const highlighted = useMemo(() => Prism.highlight(
    code,
    Prism.languages.javascript,
    'typescript'), [code,]);

  return (
    <div className={clsx(className, styles.snippet)}>
      <div className={styles.top}>
        <span className={clsx(styles.dot, styles.minimize)}>
        </span>
        <span className={clsx(styles.dot, styles.maximize)}>
        </span>
        <span className={clsx(styles.dot, styles.close)}>
        </span>
      </div>
      <code dangerouslySetInnerHTML={{ __html: highlighted, }} />
    </div>
  );
};
