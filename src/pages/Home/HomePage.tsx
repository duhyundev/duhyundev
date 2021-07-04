import './HomePage.scss';
import { OnlyLeftSideBarLayout } from '@layouts';
import { Sidebar } from '@components';

const HomePage = () => {
  return (
    <OnlyLeftSideBarLayout sidebar={<Sidebar />}>
      <div className="HomePage"></div>
    </OnlyLeftSideBarLayout>
  );
};

export default HomePage;
