import './Account.scss';
import GoogleIcon from '@assets/icons/google.svg';
import DevonLane from '@assets/icons/UserPic/devon-lane.svg';

const Account = () => {
  return (
    <div className="Account">
      <img className="picture-user" src={DevonLane} />
      <section>
        <div className="welcome">안녕하세요</div>
        <strong className="username">낯선사람51345</strong>
      </section>
      <button>
        <img src={GoogleIcon} />
      </button>
    </div>
  );
};

export default Account;
