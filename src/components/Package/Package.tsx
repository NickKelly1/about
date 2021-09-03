import { FC } from 'react';
import styles from './Package.module.scss';
import clsx from 'clsx';
import { Snippet } from '../Snippet/Snippet';
import { IPackageable } from './copy/package.interface';
import { Fresh } from '../Fresh/Fresh';

export interface PackageProps {
  pkg: IPackageable;
}
export const Package: FC<PackageProps> = (props) => {
  const {
    pkg,
  } = props;

  const {
    name,
    date,
    description,
    snippet,
  } = pkg;

  return (
    <article className={styles.package}>
      <h3 className={clsx('h3', styles.name)}>
        <Fresh>
          {name}
        </Fresh>
      </h3>
      <div className={clsx('h3', styles.date)}>
        {date}
      </div>
      <div className={clsx(styles.description)}>
        {description.split('\n').map((desc ,i) => (
          <p key={i}>
            {desc}
          </p>
        ))}
      </div>
      <Snippet className={styles.snippet} code={snippet} />
    </article>
  );
};
