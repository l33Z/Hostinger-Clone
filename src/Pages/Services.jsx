import "./services.css";
import saly2 from "../assets/Saly2New.png";
import rocket from "../assets/rocketNew.png";

const Services = () => {
  return (
    <>
      <div className="servicesMainContainer">
        <h1>Hosting Service with The Resources You Need</h1>
        <div className="partOne">
          <div className="leftSidePart">
            <img
              src={saly2}
              alt="img"
              className="saly2"
              data-aos="fade-up-right"
              data-aos-duration="600"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
            />
          </div>
          <div className="rightSidePart">
            <div
              className="serviceBox"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-easing="ease"
            >
              <div className="leftSideServiceBox">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <div className="rightSideServiceBox">
                <h2>Unmatched Performance</h2>
                <h3>
                  We care about the performance of your website. That's why we
                  employ cutting-edge technology from HTTP/3 and IPv6 to
                  LiteSpeed web servers and CDNs to power your website. All
                  Premium and Business plans include unmetered bandwidth, so you
                  won't have to worry about your website's speed.
                </h3>
              </div>
            </div>

            <div
              className="serviceBox"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="200"
              data-aos-easing="ease"
            >
              <div className="leftSideServiceBox">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="rightSideServiceBox">
                <h2>Total Security</h2>
                <h3>
                  You don't have to worry about compromising your code or
                  website with Hostinger. Whether you're trying out different
                  PHP versions or looking for ways to optimize your databases,
                  chances are we've got you covered. SSH, WP-CLI, PHP version
                  control, Git integration, MySQL management, and more tools are
                  available to keep you in control of your shared servers.
                </h3>
              </div>
            </div>

            <div
              className="serviceBox"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="300"
              data-aos-easing="ease"
            >
              <div className="leftSideServiceBox">
                <i className="fa-solid fa-wrench"></i>
              </div>
              <div className="rightSideServiceBox">
                <h2>Complete Control</h2>
                <h3>
                  You don't have to worry about compromising your code or
                  website with Hostinger. Whether you're trying out different
                  PHP versions or looking for ways to optimize your databases,
                  chances are we've got you covered. SSH, WP-CLI, PHP version
                  control, Git integration, MySQL management, and more tools are
                  available to keep you in control of your shared server
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="partTwo">
          <div className="leftSidePart">
            <img
              src={rocket}
              alt="img"
              className="saly2 rocket"
              data-aos="fade-up-left"
              data-aos-duration="600"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
            />
          </div>
          <div className="rightSidePart">
            <div
              className="serviceBox"
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-delay="100"
              data-aos-easing="ease"
            >
              <div className="leftSideServiceBox">
                <i className="fa-solid fa-earth-asia"></i>
              </div>
              <div className="rightSideServiceBox">
                <h2>Global Data Centers</h2>
                <h3>
                  Looking for the best hosting in India with local data centres?
                  We've got your back. Here are the locations of our data
                  centres: Europe (the Netherlands, Lithuania, the United
                  Kingdom), Asia (Singapore, India), North America (the USA)
                  South America (Brazil) We also provide self-service data
                  centre location changes. Once a month, you can switch your
                  data centre location for faster website loading for your
                  visitors.
                </h3>
              </div>
            </div>

            <div
              className="serviceBox"
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-delay="200"
              data-aos-easing="ease"
            >
              <div className="leftSideServiceBox">
                <i className="fa-brands fa-wordpress"></i>
              </div>
              <div className="rightSideServiceBox">
                <h2>Managed WordPress</h2>
                <h3>
                  Our managed WordPress hosting comes with ready-to-use
                  features, so you can start building your website right away.
                  Enjoy our user-friendly control panel, 1-click installer, and
                  automatic WordPress patches. In addition, get pre-installed
                  WordPress performance plugins and marketing tools to grow your
                  online presence.
                </h3>
              </div>
            </div>

            <div
              className="serviceBox"
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-delay="300"
              data-aos-easing="ease"
            >
              <div className="leftSideServiceBox">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <div className="rightSideServiceBox">
                <h2>WordPress Staging</h2>
                <h3>
                  Our hosting plans include the WordPress staging environment.
                  As a result, you can create a copy of your website and
                  experiment with alternative layouts, content, and plugins,
                  only publishing your changes when you're ready.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
