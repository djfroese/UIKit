import * as React from 'react';
import styles from './Button.css';

export class Button extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <button className={styles.button} type='button'>{this.props.children}</button>
    );
  }
}