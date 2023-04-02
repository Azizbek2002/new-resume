import style from "./Services.module.css";
import icon1 from "./assets/images/coding.png";
import icon2 from "./assets/images/services22.png";
import icon3 from "./assets/images/device.png";
import coding from "./assets/images/coding.jpeg";
import creative from "./assets/images/creative.jpg";
import responsive from "./assets/images/responsive.jpg";
import "./App.css";

const Services = () => {
  return (
    <div className={style.Services}>
      <div className={style.container}>
        <div className={style.title}>
          <h5>Services</h5>
          <h1>
            What actually <br></br> I love to do
          </h1>
        </div>
        <div className={style.works}>
          <div className={style.work}>
            <div className={style.work_icon}>
              <img src={icon1} alt="icon" />
              <h3>
                Coding in Html,Css <br />
                JavaScript and React.js
              </h3>
            </div>
            <div className={style.work_title}>
              <img src={coding} alt="</>" />
            </div>
          </div>
          <div className={style.work}>
            <div className={style.work_icon}>
              <img src={icon2} alt="icon" />
              <h3>Create Creative web sites</h3>
            </div>
            <div className={style.work_title}>
              <img src={creative} alt="</>" />
            </div>
          </div>
          <div className={style.work}>
            <div className={style.work_icon}>
              <img src={icon3} alt="icon" />

              <h3>Create adaptive and <br /> responsive web sites</h3>
            </div>
            <div className={style.work_title}>
              <img src={responsive} alt="</>" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
