import { FC } from 'react';
import styles from './Skills.module.scss';
import clsx from 'clsx';
import { Progress } from '../Progress/Progress';
import { COLOR } from '../../constants';
import { Title } from '../Title/Title';
import { Container } from '../Container/Container';

export interface SkillsProps {
  className?: string,
}


interface ISkill {
  name: string;
  score: number;
  color: string,
}
const skills: ISkill[] = [
  { name: 'JavaScript', score: 90, color: COLOR.JS, },
  { name: 'TypeScript', score: 90, color: COLOR.TS, },
  { name: 'CSS', score: 60, color: COLOR.CSS, },
  { name: 'Laravel', score: 40, color: COLOR.PHP, },
  { name: 'PHP', score: 30, color: COLOR.PHP, },
];

export const Skills: FC<SkillsProps> = (props) => {
  const {
    className,
  } = props;

  return (
    <Container className={clsx(styles.skills, className)}>
      <Title>
        Skills
      </Title>

      <ul className={styles.skillsList}>
        {skills.map((skill, i) => (
          <li key={i} className={styles.skill}>
            <span className={clsx(styles.name)}>
              {skill.name}
            </span>
            <Progress
              max={100}
              color={skill.color}
              value={skill.score}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};
