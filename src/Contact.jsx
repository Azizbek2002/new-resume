import style from "./Contact.module.css";
import "./App.css";
import telegram from "./assets/images/Telegram_logo.svg";
import instagram from "./assets/images/instagram.png";
import whatsapp from "./assets/images/whatsapp.png";
import github from "./assets/images/github.png";


const Contact = () => {
  return (
    <div className={style.Contact_section}>
      <div className={style.container}>
        <div className={style.title}>
          <h5>Contact me</h5>
          <p>
            Let me know if you want to talk about a potential collaboration. I'm
            available for freelance work.
          </p>
        </div>
        <form>
          <input type="text" placeholder="What is your name?" />
          <input type="email" placeholder="Your email" />
          <input type="text" placeholder="Tell me about your project" />
        </form>
        <div className={style.submit_section}>
          <button className={style.submit}>Get a Quote</button>
        </div>
        <div className={style.lets_friends}>
    <h1>Let's be friends</h1>
    <div className={style.social_medias}>
    <a href="https://t.me/AZIKO_12_02"  target="_blank"><img src={telegram} alt="" /></a>
    <a href="https://www.instagram.com/aziko12.02/" target="_blank"><img src={instagram} alt="" /></a>
    <a href="https://whatsapp.com/dl/"  target="_blank"><img src={whatsapp} alt="" /></a>
    <a href="https://github.com/Azizbek2002"  target="_blank"><img src={github} alt="" /></a>
    </div>

  </div>
      </div>
    </div>
  );
};

export default Contact;
