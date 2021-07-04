import { ReactComponent as ActivityIcon } from '@assets/icons/activity.svg';
import { ReactComponent as HomeIcon } from '@assets/icons/home.svg';
import { ReactComponent as BookIcon } from '@assets/icons/book.svg';
import { ReactComponent as PeopleIcon } from '@assets/icons/people.svg';
import { ReactComponent as MessageCircleIcon } from '@assets/icons/message-circle.svg';
import { ReactComponent as PriceTagIcon } from '@assets/icons/price-tag.svg';
import { ReactComponent as MenuIcon } from '@assets/icons/menu.svg';

// TODO : the 좋은방법 필요
const Icon = (props: IconProps) => {
  switch (props.icon) {
    case 'activity':
      return <ActivityIcon className={props.className} />;
    case 'home':
      return <HomeIcon className={props.className} />;
    case 'story':
      return <ActivityIcon className={props.className} />;
    case 'book':
      return <BookIcon className={props.className} />;
    case 'people':
      return <PeopleIcon className={props.className} />;
    case 'messageCircle':
      return <MessageCircleIcon className={props.className} />;
    case 'priceTag':
      return <PriceTagIcon className={props.className} />;
    case 'menu':
      return <MenuIcon className={props.className} />;
    default:
      throw Error('not defined icon');
  }
};

export default Icon;
