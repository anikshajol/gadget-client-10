import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Y0ZbMKH/medium-shot-man-wearing-vr-glasses.jpg)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Technology has become a part of our daily lives, and we depend on
              tech products daily for a vast portion of our lives. There is
              hardly a home in Bangladesh without a tech product. This is where
              we come in.
            </p>
            <Link to={"/register"}>
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
