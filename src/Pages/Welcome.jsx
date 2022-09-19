import "./welcome.css";
import Navbar from "../Components/Navbar";
import HeroBg from "../assets/salyNew.png";

const Welcome = () => {
  return (
    <>
      <div className="Mainnn">
        <Navbar />
        <div className="welcomeMain">
          <div className="leftSideWelcome">
            <img
              src={HeroBg}
              alt="bg"
              id="heroBg"
              // data-aos="fade-left"
              // data-aos-duration="700"
              // data-aos-delay="300"
              // data-aos-easing="ease-in-out"
            />
          </div>
          <div className="rightSideWelcome">
            <h1>
              Web Hosting as Dynamic as <br />
              Your Business
            </h1>

            <h2>
              <sup>₹</sup>149.00<sub>/mo</sub>
            </h2>

            <h3>
              Start your journey with our Premium plan and get a <br /> personal
              domain and lifetime SSL for free with a <br /> four-year
              subscription.
            </h3>

            <div className="timing">
              <div className="block">
                <p id="TimeValue">01</p>
                <p id="TimeDetails">Days</p>
              </div>
              <div className="block">
                <p id="TimeValue">03</p>
                <p id="TimeDetails">Hour</p>
              </div>
              <div className="block">
                <p id="TimeValue">24</p>
                <p id="TimeDetails">Minutes</p>
              </div>
              <div className="block">
                <p id="TimeValue">53</p>
                <p id="TimeDetails">Secondes</p>
              </div>
            </div>

            <a
              href="https://www.hostinger.in/#pricing"
              target="_blank"
              className="startedBtn"
            >
              Get Strated
            </a>

            <p id="guarantee">✅ 30-day money-back guarantee</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
