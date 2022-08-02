import { ITextAreaProps } from './TextArea.props';
import styles from './TextArea.module.css';
import cn from 'classnames';

export const TextArea = ({
  className,
  ...props
}: ITextAreaProps): JSX.Element => {
  return <textarea className={cn(className, styles.textArea)} {...props} />;
};
