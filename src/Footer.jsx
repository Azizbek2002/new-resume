import React from 'react'
import style from "./Contact.module.css";
import telegram from "./assets/images/Telegram_logo.svg";
import instagram from "./assets/images/instagram.png";
import whatsapp from "./assets/images/whatsapp.png";
import github from "./assets/images/github.png";

const Footer = () => {
  return (
    <div className={style.lets_friends}>
    <h1>Let's be friends</h1>
    <div className={style.social_medias}>
    <a href="https://t.me/AZIKO_12_02"  target="_blank"><img src={telegram} alt="" /></a>
    <a href="https://www.instagram.com/aziko12.02/" target="_blank"><img src={instagram} alt="" /></a>
    <a href="https://whatsapp.com/dl/"  target="_blank"><img src={whatsapp} alt="" /></a>
    <a href="https://github.com/Azizbek2002"  target="_blank"><img src={github} alt="" /></a>
    </div>

  </div>
  )
}

export default Footer