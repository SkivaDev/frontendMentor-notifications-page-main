import React from "react";
import chessPicture from "../../assets/images/image-chess.webp";
import userIconOne from "../../assets/images/avatar-mark-webber.webp";
import userIconTwo from "../../assets/images/avatar-angela-gray.webp";
import userIconThree from "../../assets/images/avatar-jacob-thompson.webp";
import userIconFour from "../../assets/images/avatar-rizky-hasanuddin.webp";
import userIconFive from "../../assets/images/avatar-kimberly-smith.webp";
import userIconSix from "../../assets/images/avatar-nathan-peterson.webp";
import userIconSeven from "../../assets/images/avatar-anna-kim.webp";

import "./notifications.scss";

function Notifications() {
  return (
    <section className="notifications">
      <div className="notifications__container">
        <div className="notifications__header">
          <div className="notifications__header-left">
            <h1 className="title">Notifications</h1>
            <div className="account">3</div>
          </div>
          <div className="notifications__header-right">
            <button className="btn">Mark all as read</button>
          </div>
        </div>
        <div className="notifications__items">
          <div className="notifications__item">
            <div className="notifications__item-message">
              <img src={userIconOne} alt="" className="picture" />
              <div className="notification__item-info">
                <p className="notifications__item-text">
                  <strong className="name">Mark Webber</strong>
                  {` reacted to your recent post `}
                  <a href="#" className="link">
                    {` My first tournament today! `}
                  </a>
                  <span className={`ntf-unopened`} />
                </p>
                <p className="notifications__item-time">1m ago</p>
              </div>
            </div>
          </div>
          <div className="notifications__item">
            <div className="notifications__item-message">
              <img src={userIconTwo} alt="" className="picture" />
              <div className="notification__item-info">
                <p className="notifications__item-text">
                  <strong className="name">Angela Gray</strong>
                  {` followed you `}
                  <span className={`ntf-unopened`} />
                </p>
                <p className="notifications__item-time">5m ago</p>
              </div>
            </div>
          </div>
          <div className="notifications__item">
            <div className="notifications__item-message">
              <img src={userIconThree} alt="" className="picture" />
              <div className="notification__item-info">
                <p className="notifications__item-text">
                  <strong className="name">Jacob Thompson</strong>
                  {` has joined your group `}
                  <a href="#" className="link">
                    {` Chess Club `}
                  </a>
                  <span className={`ntf-unopened`} />
                </p>
                <p className="notifications__item-time">1 days ago</p>
              </div>
            </div>
          </div>
          <div className="notifications__item">
            <div className="notifications__item-message">
              <img src={userIconFour} alt="" className="picture" />
              <div className="notification__item-info">
                <p className="notifications__item-text">
                  <strong className="name">Rizky Hasanuddin</strong>
                  {` commented on your post `}
                </p>
                <p className="notifications__item-time">5 days ago</p>
              </div>
            </div>
            <div className="notifications__item-extra">
              <div className="message">
                <p className="text">
                  Hello, thanks for setting up the Chess Club. I've been a member
                  for a few weeks now and I'm already having lots of fun and
                  improving my game.
                </p>
              </div>
            </div>
          </div>
          <div className="notifications__item">
            <div className="notifications__item-message">
              <img src={userIconFive} alt="" className="picture" />
              <div className="notification__item-info">
                <p className="notifications__item-text">
                  <strong className="name">Kimberly Smith</strong>
                  {` commented on your picture `}
                </p>
                <p className="notifications__item-time">1 weeks ago</p>
              </div>
            </div>
            <div className="notifications__item-extra picture">
              <div className="picture">
                <img src={chessPicture} alt="chessPicture" />
              </div>
            </div>
          </div>
          <div className="notifications__item">
            <div className="notifications__item-message">
              <img src={userIconSix} alt="" className="picture" />
              <div className="notification__item-info">
                <p className="notifications__item-text">
                  <strong className="name">Nathan Peterson</strong>
                  {` reacted to your recent `}
                  <a href="#" className="link">
                    {` 5 end-game strategies to increase your win rate `}
                  </a>
                </p>
                <p className="notifications__item-time">2 weeks ago</p>
              </div>
            </div>
          </div>
          <div className="notifications__item">
            <div className="notifications__item-message">
              <img src={userIconSeven} alt="" className="picture" />
              <div className="notification__item-info">
                <p className="notifications__item-text">
                  <strong className="name">Anna Kim</strong>
                  {` left the group `}
                  <a href="#" className="link">
                    {` Chess Club `}
                  </a>
                </p>
                <p className="notifications__item-time">2 weeks ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Notifications;
