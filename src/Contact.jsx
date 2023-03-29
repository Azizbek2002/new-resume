import style from "./Contact.module.css";
import "./App.css";


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
      </div>
    </div>
  );
};

export default Contact;
