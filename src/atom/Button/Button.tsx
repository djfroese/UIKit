import * as React from 'react';
import styles from './Button.scss';

export interface IButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
}

export interface IButtonState {
}

export class Button extends React.Component<IButtonProps, IButtonState> {
  constructor(props: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <button 
        className={styles.button}
        type='button'
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >{this.props.children}</button>
    );
  }
}