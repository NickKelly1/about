import clsx from 'clsx';
import { h, FunctionComponent } from 'preact';
import styles from './styles.module.scss';

export interface TopBarProps {
  //
}
export const TopBar: FunctionComponent<TopBarProps> = (props) => {

  return (
    <header class={clsx(styles.topBar)}>
      <nav class="container">
        <div class={styles.monogram}>
          NK
        </div>
      </nav>
      {/* <div>
        logo
      </div>
      <nav>
        <ul>
          <li>
            <a>
              nav1
            </a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}
