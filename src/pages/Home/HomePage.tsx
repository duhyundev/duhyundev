import './HomePage.scss';
import { OnlyLeftSideBarLayout } from '@layouts';

const HomePage = () => {
  return (
    <OnlyLeftSideBarLayout sidebar={<div></div>}>
      <div className="HomePage"></div>
    </OnlyLeftSideBarLayout>
  );
};

export default HomePage;
