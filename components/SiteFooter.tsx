import logo2 from '../public/Images/guide_logo2.png';
import websiteLogo from '../public/Images/website_logo.png';
import discordLogo from '../public/Images/discord_logo.png';
import instagramLogo from '../public/Images/instagram_logo.png';
import Link from 'next/link';
import Image from 'next/image';

export default function SiteFooter() {
  return (
    <footer className="p-4 bg-white border-2 border-slate-200 text-black">
      <div className="container max-w-6xl mx-auto">
        <div className="md:grid md:grid-cols-3 md:gap-0 md:divide-x md:divide-slate-400">
          <div className="px-4">
            <Image className="my-4 w-30 h-20 self-center" src={logo2} alt="Nebula Labs" />
          </div>
          <div className="px-4">
            <h2 className="my-2 text-lg font-semibold font-display">Contact Us</h2>
            <ul className="space-y-1">
              <li className="group">
                <Link
                  href="https://www.utdnebula.com/"
                  className="px-2 py-1 flex justify-between align-center space-x-4 hover:bg-slate-200 focus:bg-slate-200 focus:outline-none focus:ring focus:ring-blue-200 rounded-lg transition"
                >
                  <div className="align-middle">Nebula Labs</div>
                  <Image
                    className="relative w-8 h-8 object-contain"
                    src={websiteLogo}
                    alt="Visit the Nebula Labs website"
                  />
                </Link>
              </li>
              <li className="group">
                <Link
                  href="https://www.instagram.com/utdnebula"
                  className="px-2 py-1 flex justify-between align-center space-x-4 hover:bg-slate-200 focus:bg-slate-200 focus:outline-none focus:ring focus:ring-blue-200 rounded-lg transition"
                >
                  Nebula Labs Instagram
                  <Image
                    className="w-8 h-8 object-contain"
                    src={instagramLogo}
                    alt="Check out Nebula Labs on Instagram"
                  />
                </Link>
              </li>
              <li className="group flex flex-col justify-center">
                <Link
                  href="https://discord.gg/tcpcnfxmeQ"
                  className="px-2 py-1 flex justify-between align-center space-x-4 hover:bg-slate-200 focus:bg-slate-200 focus:outline-none focus:ring focus:ring-blue-200 rounded-lg transition"
                >
                  <div>Nebula Labs Discord</div>
                  <Image
                    className="w-8 h-8 object-contain"
                    src={discordLogo}
                    alt="Join the Nebula Labs Discord server"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4">
            <h2 className="my-2 text-lg font-semibold font-display">Copyright Notice</h2>
            <p className="text-sm">
              Survival Guide is published by Nebula Labs, a registered student organization at The
              University of Texas at Dallas. The UTD Survival Guide is not an official publication
              of UT Dallas and does not represent the views of the university or its officers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
