import './HomePage.scss';
import { OnlyLeftSideBarLayout } from '@layouts';
import Activity from '@assets/icons/activity.svg';

const HomePage = () => {
  return (
    <OnlyLeftSideBarLayout
      sidebar={
        <div className="list-group">
          <div className="list-active">
            <img src={Activity} />
            <span>홈</span>
            <img src={Activity} />
          </div>
          <div className="list">
            <img src={Activity} />
            <span>스토리</span>
            <img src={Activity} />
          </div>
          <div className="list">
            <img src={Activity} />
            <span>포스팅</span>
            <img src={Activity} />
          </div>
          <div className="list-inactive">
            <img src={Activity} />
            <span>네트워크</span>
            <img src={Activity} />
          </div>
        </div>
      }
    >
      <div className="HomePage"></div>
    </OnlyLeftSideBarLayout>
  );
};

export default HomePage;
