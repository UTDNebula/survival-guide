import React from 'react';
import { RWebShare } from 'react-web-share';
import ShareIcon from '../assets/Share.svg';

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
      <button className="inline-flex p-2 space-x-2 bg-[#EFEFEF] rounded-lg font-display text-lg hover:bg-[#E0E0E0] transition ease-linear">
        <img className="" src={ShareIcon.src} alt="" width="24" height="24" />
        Share
      </button>
    </RWebShare>
  );
}
