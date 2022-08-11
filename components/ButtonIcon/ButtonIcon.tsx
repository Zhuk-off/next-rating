import { IButtonIconProps, icons } from './ButtonIcon.props';
import styles from './ButtonIcon.module.css';
import cn from 'classnames';

export const ButtonIcon = ({
  appearance,
  icon,
  className,
  ...props
}: IButtonIconProps): JSX.Element => {
  /** мы фактически берем наш объект иконок, который у нас есть в пропсах
   * и берем оттуда нужный up, close, menu элемент
   */
  const IconComponent = icons[icon];
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.white]: appearance == 'white',
      })}
      {...props}
    >
      <IconComponent />
    </button>
  );
};
