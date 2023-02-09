import React from 'react';
import { RWebShare } from 'react-web-share';
import shareImg from '../public/Images/share.png';
import '../styles/Share_Button.css';

interface ShareButtonProps {
  url: string;
}

export default function ShareButton({ url }: ShareButtonProps) {
  return (
    <RWebShare
      data={{
        url: url,
        text: 'Share this Article',
        title: 'Survival Guide',
      }}
    >
      <button className="Share_Button">
        <img className="Share_Button_Img" src={shareImg.src} alt="?" width="20" height="13" />
        SHARE
      </button>
    </RWebShare>
  );
}
