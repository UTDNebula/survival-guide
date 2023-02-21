import React from 'react';
import { RWebShare } from 'react-web-share';
import shareImg from '../public/Images/share.png';

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
      <button className="inline-flex p-3 bg-[#EFEFEF] rounded-lg space-x-4 font-display text-lg hover:bg-[#E0E0E0] transition ease-linear">
        <img className="" src={shareImg.src} alt="?" width="24" height="24" />
        SHARE
      </button>
    </RWebShare>
  );
}
