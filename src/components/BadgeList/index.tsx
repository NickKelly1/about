import clsx from 'clsx';
import { h, FunctionComponent } from 'preact';
import styles from './styles.module.scss';
import { Badge } from '../Badge';

interface BadgeListProps {
  badges: Badge[]
  centered?: boolean;
  class?: string;
}

export const BadgeList: FunctionComponent<BadgeListProps> = (props) => {
  const {
    class: className,
    centered,
    badges,
  } = props;

  return (
    <ul className={clsx(
      'wrap-list',
      centered && 'centered',
      styles.badgeList,
      className,
    )}>
      {badges.map((badge, i) => <li key={i}><Badge badge={badge} /></li>)}
    </ul>
  )
}
