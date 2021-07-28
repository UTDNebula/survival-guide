import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/**
 * A footer that displays useful site links.
 */
export default function Footer(): JSX.Element {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        buildTime(formatString: "YYYY-MM-DD hh:mm a z")
      }
    }
  `);

  return (
    <footer className="bg-gray-700 text-gray-200">
      {/* TODO: Update footer once more pages have been created */}
      {/* <div className="max-w-6xl mx-auto md:grid md:grid-cols-3 md:grid-gap-2 lg:grid-gap-4 "> */}
      <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:grid-gap-2 lg:grid-gap-4 ">
        <div className="p-4">
          <h1 className="text-subtitle1 py-2 font-semibold text-gray-100">Academic Resources</h1>
          <ul className="mt-2">
            <li>
              <a className="hover:text-secondary" href="https://www.utdallas.edu/finaid/">
                Office of Financial Aid
              </a>
            </li>
            <li>
              <a className="hover:text-secondary" href="https://bursar.utdallas.edu/">
                Bursar Office
              </a>
            </li>
          </ul>
          <ul className="mt-2">
            <li>
              <a
                className="hover:text-secondary"
                href="https://engineering.utdallas.edu/engineering/academics/undergraduate-majors/undergrad-advising/"
              >
                ECS Advising
              </a>
            </li>
            <li>
              <a className="hover:text-secondary" href="https://bbs.utdallas.edu/advising/">
                BBS Advising
              </a>
            </li>
            <li>
              <a className="hover:text-secondary" href="https://jindal.utdallas.edu/advising/">
                JSOM Advising
              </a>
            </li>
            <li>
              <a className="hover:text-secondary" href="https://nsm.utdallas.edu/advising/">
                NSM Advising
              </a>
            </li>
            <li>
              <a className="hover:text-secondary" href="https://is.utdallas.edu/contact/advisors/">
                IS Advising
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondary"
                href="https://atec.utdallas.edu/people/#_people-advisors"
              >
                ATEC Advising
              </a>
            </li>
          </ul>
          <ul className="mt-2">
            <li>
              <a className="hover:text-secondary" href="https://www.utdallas.edu/veterans/">
                Military and Veteran Center
              </a>
            </li>
          </ul>
        </div>
        {/* TODO: Uncomment once guide structure is ready */}
        {/* <div className="p-4">
          <h1 className="text-subtitle1 py-2 font-semibold text-gray-100">
            Guide Info
          </h1>
          <ul>
            <li>
              <Link to="/">Landing</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div> */}
        <div className="p-4">
          <h1 className="text-subtitle1 py-2 font-semibold text-gray-100">ACM and Co.</h1>
          <ul>
            <li>
              <a className="hover:text-secondary" href="https://acmutd.co">
                ACM UTD website
              </a>
            </li>
            <li>
              <a className="hover:text-secondary" href="https://github.com/acmutd/nebula">
                Project Nebula on GitHub
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondary"
                href="https://github.com/acmutd/comet-data-service"
              >
                The Comet Data Service
              </a>
            </li>
            <li>
              <a className="hover:text-secondary" href="https://github.com/acmutd">
                Other ACM Development Projects
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondary"
                href="https://github.com/acmutd/nebula-guide/blob/master/CONTRIBUTING.md"
              >
                How to contribute
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4 text-center text-caption bg-gray-800">
        <div className="font-semibold">Built with ❤️ and 💻 by ACM Development</div>
        <div className="mt-1">Last updated {data.site.buildTime ?? 'Some time ago.'}</div>
      </div>
    </footer>
  );
}