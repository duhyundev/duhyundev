import './Sidebar.scss';

import { Misc, ListElement } from '@components';
import { useHistory } from 'react-router-dom';

const Sidebar = () => {
  const history = useHistory();
  const path = window.location.pathname;

  return (
    <div className="Sidebar">
      <Misc.Account />
      <section className="body">
        <div className="list-group">
          <ListElement
            status={path === '/' ? 'selected' : 'normal'}
            hasMenu
            icon="home"
            text="홈"
            onClick={() => {
              history.push('/');
            }}
          />
          <ListElement
            status={path.includes('/story') ? 'selected' : 'normal'}
            hasMenu
            icon="story"
            text="스토리"
            onClick={() => {
              history.push('/story');
            }}
          />
          <ListElement
            status={path.includes('/post') ? 'selected' : 'normal'}
            hasMenu
            icon="book"
            text="포스팅"
            onClick={() => {
              history.push('/post');
            }}
          />
          <ListElement
            status={path.includes('/network') ? 'selected' : 'normal'}
            hasMenu
            icon="people"
            text="네트워크"
            onClick={() => {
              history.push('/network');
            }}
          />
        </div>
      </section>

      <div className="footer">
        <ListElement
          status={path.includes('/license') ? 'selected' : 'normal'}
          icon="priceTag"
          text="라이센스 & 저작권"
          onClick={() => {
            history.push('/license');
          }}
        />
        <ListElement
          status={path.includes('/ask') ? 'selected' : 'normal'}
          icon="messageCircle"
          text="문의하기"
          onClick={() => {
            history.push('/ask');
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
