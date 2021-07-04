import './HomePage.scss';
import { OnlyLeftSideBarLayout } from '@layouts';
import { Misc, ListElement } from '@components';

const HomePage = () => {
  return (
    <OnlyLeftSideBarLayout
      sidebar={
        <div className="sidebarComponents">
          <Misc.Account />
          <section className="body">
            <div className="list-group">
              <ListElement status="selected" hasMenu icon="home" text="홈" />
              <ListElement status="normal" hasMenu icon="story" text="스토리" />
              <ListElement status="normal" hasMenu icon="book" text="포스팅" />
              <ListElement status="disabled" hasMenu icon="people" text="네트워크" />
            </div>
          </section>

          <div className="footer">
            <ListElement status="normal" icon="priceTag" text="라이센스 & 저작권" />
            <ListElement status="normal" icon="messageCircle" text="문의하기" />
          </div>
        </div>
      }
    >
      <div className="HomePage"></div>
    </OnlyLeftSideBarLayout>
  );
};

export default HomePage;
