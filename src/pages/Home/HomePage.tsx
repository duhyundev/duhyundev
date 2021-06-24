import './HomePage.scss';
import { OnlyLeftSideBarLayout } from '@layouts';
import Activity from '@assets/icons/activity.svg';
import { ReactComponent as MenuIcon } from '@assets/icons/menu.svg';
import HomeIcon from '@assets/icons/home.svg';
import BookIcon from '@assets/icons/book.svg';
import PeopleIcon from '@assets/icons/people.svg';
import DevonLane from '@assets/icons/UserPic/devon-lane.svg';
import GoogleIcon from '@assets/icons/google.svg';
import MessageCircleIcon from '@assets/icons/message-circle.svg';
import priceTagIcon from '@assets/icons/price-tag.svg';

const HomePage = () => {
  return (
    <OnlyLeftSideBarLayout
      sidebar={
        <div className="sidebarComponents">
          <div className="account">
            <img className="picture-user" src={DevonLane} />
            <section>
              <div className="welcome">안녕하세요</div>
              <div className="username">낯선사람51345</div>
            </section>
            <button>
              <img src={GoogleIcon} />
            </button>
          </div>
          <section className="body">
            <div className="list-group">
              <div className="list-active">
                <img src={HomeIcon} />
                <span>홈</span>
                <MenuIcon />
              </div>
              <div className="list">
                <img src={Activity} />
                <span>스토리</span>
                <MenuIcon />
              </div>
              <div className="list">
                <img src={BookIcon} />
                <span>포스팅</span>
                <MenuIcon />
              </div>
              <div className="list-inactive">
                <img src={PeopleIcon} />
                <span>네트워크</span>
                <MenuIcon />
              </div>
            </div>
          </section>

          <div className="footer">
            <div className="list">
              <img src={priceTagIcon} />
              <span>라이센스 & 저작권</span>
            </div>
            <div className="list">
              <img src={MessageCircleIcon} />
              <span>문의하기</span>
            </div>
          </div>
        </div>
      }
    >
      <div className="HomePage"></div>
    </OnlyLeftSideBarLayout>
  );
};

export default HomePage;
