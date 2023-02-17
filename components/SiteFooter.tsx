import logo2 from '../public/Images/guide_logo2.png';
import websiteLogo from '../public/Images/website_logo.png';
import discordLogo from '../public/Images/discord_logo.png';
import instagramLogo from '../public/Images/instagram_logo.png';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="p-4 bg-white bg-Neutral-50 border-2 border-slate-200 text-black">
      <div className="container w-9/12 mx-auto">
        <div className="grid grid-cols-3 gap-0 divide-x divide-slate-400">
          <img className="w-30 h-20 self-center	" src={logo2.src} alt="Nebula logo" />
          <div className="pl-10 pr-0 mr-0 pt-1">
            <h2 className="mb-2 text-lg font-semibold underline pb-2">Contact Us</h2>
            <ul>
              <li className="mb-2 pr-6">
                Nebula Labs
                <Link href="https://www.utdnebula.com/" className="hover:underline float-right">
                  <img className="w-8 h-8 " src={websiteLogo.src} alt="Nebula logo" />
                </Link>
              </li>
              <li className="mb-2 pr-6">
                Nebula Labs Instagram
                <Link href="https://www.instagram.com/" className="hover:underline float-right">
                  <img className="w-8 h-8" src={instagramLogo.src} alt="instagram logo" />
                </Link>
              </li>
              <li className="pr-6">
                Nebula Labs Discord
                <Link href="https://www.discord.com/" className="hover:underline float-right">
                  <img className="w-8 h-8" src={discordLogo.src} alt="discord logo" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="pl-10 pr-0">
            <h2 className="mb-2 text-lg font-semibold underline pb-2">Copyright Information</h2>
            <ul className="">
              <li>
                <p className="text-sm">
                  Survival Guide is published by Nebula Labs, a registered student organization at
                  The University of Texas at Dallas. The UTD Survival Guide is not an official
                  publication of UT Dallas and does not represent the views of the university or its
                  officers.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
