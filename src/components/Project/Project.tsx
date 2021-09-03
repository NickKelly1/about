import clsx from 'clsx';
import React, { FC } from 'react';
import { Description } from '../Description/Description';
import { Fresh } from '../Fresh/Fresh';
import { IProjectable } from './copy/project.interface';
import styles from './Project.module.scss';

export interface ProjectProps {
  project: IProjectable;
}

export const Project: FC<ProjectProps> = (props) => {
  const {
    project,
  } = props;

  const {
    title,
    date,
    description,
  } = project;

  return (
    <article className={styles.project}>

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
        text={description}
      />

    </article>
  );
};
