import './ListElement.scss';
import { ReactComponent as MenuIcon } from '@assets/icons/menu.svg';
import classNames from 'classnames';

type Props = {
  icon: any;
  text: string;
  status: 'selected' | 'disabled' | 'normal';
  hasMenu?: boolean;
};

const ListElement = (props: Props) => (
  <div className="ListElement">
    <div className={classNames('element', `element-${props.status}`)}>
      {props.icon}
      <span>{props.text}</span>
      {props.hasMenu && <MenuIcon />}
    </div>
  </div>
);

export default ListElement;
