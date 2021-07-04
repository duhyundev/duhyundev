type Icon = 'activity' | 'home' | 'story' | 'book' | 'people' | 'messageCircle' | 'priceTag' | 'menu';

type ListElementProps = {
  icon: Icon;
  text: string;
  status: 'selected' | 'disabled' | 'normal';
  hasMenu?: boolean;
};

type IconProps = {
  icon: Icon;
  className: string;
};
