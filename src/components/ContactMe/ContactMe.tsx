import { FC } from "react";
import { Fresh } from "../Fresh/Fresh";
import { Title } from "../Title/Title";
import { Vessel } from "../Vessel/Vessel";
import styles from './ContactMe.module.scss';

export interface ContactMeProps {
  //
}

export const ContactMe: FC<ContactMeProps> = (props) => {
  //

  return (
    <Vessel className={styles.contactMe}>
      <Title className={'stretch'}>
        <Fresh>
          Contact Me
        </Fresh>
      </Title>

      <form className={styles.form}>
        <div className={styles.fieldName}>
          <label>name:</label>
          <input id="name" type="area" />
        </div>
        <div className={styles.fieldEmail}>
          <label>email:</label>
          <input type="area" />
        </div>
        <div className={styles.fieldMessage}>
          <label>message:</label>
          <textarea />
        </div>
      </form>
    </Vessel>
  );
}