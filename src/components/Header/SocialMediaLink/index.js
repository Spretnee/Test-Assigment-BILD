import React from "react";

import FacebookSVG from "./SocialMediaIcons/FacebookSvg.js";
import TwiterSVG from "./SocialMediaIcons/Twiter.js";
import RssSVG from "./SocialMediaIcons/RssSvg.js";
import PinterestSVG from "./SocialMediaIcons/Pinterest.js";
import GooglePlusSVG from "./SocialMediaIcons/GooglePlusSvg.js";
import DribbbleSVG from "./SocialMediaIcons/DribbbleSvg.js";

export default function SocialMediaLinks() {
  return (
    <div className="social-media">
      <FacebookSVG />
      <TwiterSVG />
      <RssSVG />
      <PinterestSVG />
      <GooglePlusSVG />
      <DribbbleSVG />
    </div>
  );
}
