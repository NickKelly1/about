import { FC } from 'react';
import styles from './Whoami.module.scss';
import clsx from 'clsx';
import { Container } from '../Container/Container';

export interface WhoamiProps {
  className?: string;
}

const name = 'Hey, I\'m Nick';
const statement = `
I’m a web developer based in the US.

I love working in JavaScript and TypeScript to useful useful web applications.
`.trim();

export const Whoami: FC<WhoamiProps> = (props) => {
  const { className, } = props;

  return (
    <Container className={clsx(styles.whoami, className)}>
      <h1 className={clsx('h1', styles.name)}>
        {name}
      </h1>
      <div className={styles.description}>
        {statement.split('\n').map((desc ,i) => (
          <p key={i}>
            {desc}
          </p>
        ))}
      </div>
    </Container>
  );
};
