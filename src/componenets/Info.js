import Profile from "../images/question.png";
import EmailLogo from "../images/email.png";
import LinkLogo from "../images/linked.png";
export default function Info() {
  return (
    <div className="info">
      <img className="Profile" src={Profile} alt="" srcset="" />
      <h2 className="name">Mahesh Ghale</h2>
      <h3 className="title">
        <small>Student</small>
      </h3>
      <p className="weblink">
        <small>
          <a href="http://ReleaseTimer.github.io">ReleaseTimer.github.io </a>
        </small>
      </p>

      <div className="buttons">
        <button className="emailbutton">
          <img src={EmailLogo} alt="" srcset="" />
          Email
        </button>

        <button className="linkedin">
          <img src={LinkLogo} alt="" srcset="" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
