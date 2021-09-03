import clsx from 'clsx';
import React, { FC } from 'react';
import { Package } from '../Package/Package';
import styles from './Packages.module.scss';
import { Title } from '../Title/Title';
import { Vessel } from '../Vessel/Vessel';
import { IPackageable } from '../Package/copy/package.interface';

export interface PackagesProps {
  className?: string;
  packages: IPackageable[];
}

export const Packages: FC<PackagesProps> = (props) => {
  const { className, packages, } = props;

  return (
    <Vessel className={clsx(styles.packages, className)}>
      <Title>
        Packages
      </Title>

      <ul className={styles.list}>
        {packages.map((pkg, i) => (
          <li key={i}>
            <Package pkg={pkg} />
          </li>
        ))}
      </ul>
    </Vessel>
  );
}