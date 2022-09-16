import React from "react";

import FacebookSVG from "./SocialMediaIcons/FacebookSvg";
import TwiterSVG from "./SocialMediaIcons/Twiter";
import RssSVG from "./SocialMediaIcons/RssSvg";
import PinterestSVG from "./SocialMediaIcons/Pinterest";
import GooglePlusSVG from "./SocialMediaIcons/GooglePlusSvg";
import DribbbleSVG from "./SocialMediaIcons/DribbbleSvg";

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
