import { h, FunctionComponent } from 'preact';
import styles from './styles.module.scss';
import clsx from 'clsx';

interface BadgeProps {
  badge: Badge
  class?: string;
}
export const Badge: FunctionComponent<BadgeProps> = (props) => {
  const {
    badge,
    class: className,
  } = props;

  const {
    alt,
    image,
    link
  } = badge;
  //

  if (link) {
    return (
      <a className={clsx(styles.badge, className)} href={link}>
        <img
          alt={alt}
          src={image}
        />
      </a>
    );
  }

  return (
    <img
      className={clsx(styles.badge, className)}
      alt={alt}
      src={image}
    />
  )
}
