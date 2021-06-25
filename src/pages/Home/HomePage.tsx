import './HomePage.scss';
import { OnlyLeftSideBarLayout } from '@layouts';
import { ReactComponent as ActivityIcon } from '@assets/icons/activity.svg';
import { ReactComponent as HomeIcon } from '@assets/icons/home.svg';
import { ReactComponent as BookIcon } from '@assets/icons/book.svg';
import { ReactComponent as PeopleIcon } from '@assets/icons/people.svg';
import { ReactComponent as MessageCircleIcon } from '@assets/icons/message-circle.svg';
import { ReactComponent as PriceTagIcon } from '@assets/icons/price-tag.svg';
import { Misc, ListElement } from '@components';

const HomePage = () => {
  return (
    <OnlyLeftSideBarLayout
      sidebar={
        <div className="sidebarComponents">
          <Misc.Account />
          <section className="body">
            <div className="list-group">
              <ListElement status="selected" hasMenu={true} icon={<HomeIcon />} text="홈" />
              <ListElement status="normal" hasMenu={true} icon={<ActivityIcon />} text="스토리" />
              <ListElement status="normal" hasMenu={true} icon={<BookIcon />} text="포스팅" />
              <ListElement status="disabled" hasMenu={true} icon={<PeopleIcon />} text="네트워크" />
            </div>
          </section>

          <div className="footer">
            <ListElement status="normal" icon={<PriceTagIcon />} text="라이센스 & 저작권" />
            <ListElement status="normal" icon={<MessageCircleIcon />} text="문의하기" />
          </div>
        </div>
      }
    >
      <div className="HomePage"></div>
    </OnlyLeftSideBarLayout>
  );
};

export default HomePage;
