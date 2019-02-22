import * as React from 'react';
import styles from './Link.css';

export class Link extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <a className={styles.link} href="#">{this.props.children}</a>
    );
  }
}