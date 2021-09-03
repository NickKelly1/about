import clsx from 'clsx';
import { FC } from 'react';
import { IProjectable } from '../Project/copy/project.interface';
import { Project } from '../Project/Project';
import { Title } from '../Title/Title';
import { Vessel } from '../Vessel/Vessel';
import styles from './Projects.module.scss';

interface ProjectsProps {
  className?: string;
  projects: IProjectable[]
}


export const Projects: FC<ProjectsProps> = (props) => {
  const { className, projects, } = props;
  //

  return (
    <Vessel className={clsx(styles.projects, className)}>
      <Title className={styles.title}>
        Projects
      </Title>
      <ul className={styles.list}>
        {projects.map((project, i) => (
          <li key={i} className={styles.project}>
            <Project
              project={project}
            />
          </li>
        ))}
      </ul>
    </Vessel>
  )
}
