import React from "react";
import "./introductionVideo.css";
import playButton from "../../../../images/playButton.svg";

const IntroductionVideo = () => {
  return (
    <section className="introduction-video ">
      <div className="video-section container">
        <div className="video-wrapper">
          <img src={playButton} alt="play" />
        </div>
        <h2>get to know us a little better</h2>
        <p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque
            minus suscipit repudiandae totam fugit assumenda enim nisi id
            consequuntur quod est sit, ut ratione necessitatibus deserunt.
            Inventore quia odit, exercitationem aliquam consequatur et
            perferendis similique eius saepe ipsa. Dolor accusamus est deleniti
            tempore nulla placeat ullam. Rem deleniti cumque sequi? Consectetur
            numquam eius consequuntur quaerat cum ex provident reiciendis
            reprehenderit corporis necessitatibus atque delectus, laudantium
            expedita perferendis voluptate ullam cumque inventore eligendi
            pariatur corrupti, beatae sequi harum!
          </p>
        </p>
      </div>
    </section>
  );
};

export default IntroductionVideo;
