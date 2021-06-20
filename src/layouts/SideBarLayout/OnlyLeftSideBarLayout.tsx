import './OnlyLeftSideBarLayout.scss';

type Props = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
};
const OnlyLeftSideBarLayout = (props: Props) => {
  const { sidebar, children } = props;
  return (
    <div className="OnlyLeftSideBarLayout">
      <div className="sidebar">{sidebar}</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default OnlyLeftSideBarLayout;
