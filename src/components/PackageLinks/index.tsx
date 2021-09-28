import { h, FunctionComponent } from 'preact';
import { GitHub } from '../Icons/GitHub';
import { Npm } from '../Icons/Npm';
import clsx from 'clsx';

export interface PackageLinksProps {
  links: PackageLinks;
  size?: string;
}
export const PackageLinks: FunctionComponent<PackageLinksProps> = (props) => {
  const {
    links,
    size = '2em',
  } = props;
  //

  return (
    <>
      {
        (links?.repository?.type === 'github')
        ? (<a href={links.repository?.url ?? ''}><GitHub size={size}/></a>)
        : null
      }
      {links?.npm && <a href={links.npm}><Npm height={size} /></a>}
    </>
  );
}
