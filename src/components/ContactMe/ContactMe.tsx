import { FC, FormEventHandler, useCallback } from 'react';
import { Fresh } from '../Fresh/Fresh';
import { Title } from '../Title/Title';
import { Container } from '../Container/Container';
import styles from './ContactMe.module.scss';
import clsx from 'clsx';

export interface ContactMeProps {
  //
}

export const ContactMe: FC<ContactMeProps> = (props) => {
  //

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback((evt) => {
    evt.preventDefault();
  }, []);

  return (
    <Container>
      <div className={styles.contactMe}>
        <Title>
          <Fresh>
            Contact Me
          </Fresh>
        </Title>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={clsx(styles.field)}>
            <label>name:</label>
            <input className={styles.control} id="name" type="area" />
          </div>
          <div className={clsx(styles.field)}>
            <label>email:</label>
            <input className={styles.control} type="email" />
          </div>
          <div className={clsx(styles.field)}>
            <label>message:</label>
            <textarea className={styles.control} cols={50} rows={10} />
          </div>
          <button className={clsx(styles.control, styles.submit)}>send</button>
        </form>
      </div>
    </Container>
  );
};
