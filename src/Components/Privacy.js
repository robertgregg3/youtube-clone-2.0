import React from "react";
import "../css/Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy">
      <h1>Privacy</h1>
      <p>
        This is a Youtube clone that youses Google Authorisation to display your
        youtube information, which includes your subscriptions, liked videos,
        watched videos, search terms and other standard pieces of data that you
        would interact with whilst surfing on Youtube. This information is
        locked to your Google/Youtube account and is displayed on the screen
        dynamically and direct from Youtube/Google. No data is stored on our
        servers. In fact, we are not even running any servers for this project.
        This project is just a demo of my skills using Youtube and the Youtube
        Api. I am really not interested in what videos you have watched. But if
        you know of any that i must see then email me at hi@robertgregg.co.uk.
        You can also email me there is you have any concerns.
      </p>
    </div>
  );
};

export default Privacy;
