import "./loginPage.css";
import LoginCard from "../../components/loginCard";

const loginPage = () => {
  return (
    <div className="bg__img">
      <div className="login__card">
        <div className="card__body">
          <LoginCard />
          <div className="below__text">
            <p className="text_one"> Don't have a account? </p>
            <p className="text_two"> Forgot Password? </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
