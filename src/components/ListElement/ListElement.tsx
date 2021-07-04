import './ListElement.scss';
import { Misc } from '@components';
import classNames from 'classnames';

const ListElement = ({ icon, text, hasMenu = false, status, onClick }: ListElementProps) => (
  <div className="ListElement">
    <div className={classNames('element', `${status}`)} onClick={onClick}>
      <Misc.Icon className="icon" icon={icon} />
      <span>{text}</span>
      {hasMenu && <Misc.Icon className="icon-menu" icon="menu" />}
    </div>
  </div>
);

export default ListElement;
