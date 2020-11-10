const loginCard = () => {
  return (
    <>
      <div className="logo__section">
        <h1> Logo </h1>
      </div>
      <div className="box">
        <div>
          <h4> Login To Your Account </h4>
        </div>
        <form>
          <div className="form__Inputs">
            <div>
              <input type="email" placeholder="Enter Your Email" required />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter Your password"
                required
              />
            </div>
          </div>
          <div className="submit">
            <button className="btn__submit"> Submit </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default loginCard;
