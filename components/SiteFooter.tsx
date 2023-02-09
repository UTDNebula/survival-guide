export default function SiteFooter(): JSX.Element {
  return (
    <footer className="bg-gray-700 text-gray-200">
      {/* TODO: Update footer once more pages have been created */}
      {/* <div className="max-w-6xl mx-auto md:grid md:grid-cols-3 md:grid-gap-2 lg:grid-gap-4 "> */}
      <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:grid-gap-2 lg:grid-gap-4 ">
        <div className="p-4">
          <h1 className="text-subtitle1 py-2 font-semibold font-display text-gray-100">
            Academic Resources
          </h1>
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
          <h1 className="text-subtitle1 py-2 font-semibold font-display text-gray-100">
            More from Nebula Labs
          </h1>
          <ul>
            <li>
              <a className="hover:text-secondary" href="https://utdnebula.com">
                Nebula Labs Website
              </a>
            </li>
            <li>
              <a className="hover:text-secondary" href="https://github.com/UTDNebula">
                Nebula Labs GitHub
              </a>
            </li>
            <li>
              <a className="hover:text-secondary" href="https://planner.utdnebula.com">
                Nebula Planner
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondary"
                href="https://github.com/UTDNebula/survival-guide"
              >
                Survival Guide on GitHub
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondary"
                href="https://github.com/UTDNebula/survival-guide/blob/main/CONTRIBUTING.md"
              >
                How to contribute
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4 text-center text-caption bg-gray-800">
        <div className="font-semibold">Built with ❤️ and 💻 by Nebula Labs</div>
        <div className="mt-1">Last updated some time ago.</div>
      </div>
    </footer>
  );
}
