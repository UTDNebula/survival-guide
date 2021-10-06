import React, { ReactNode } from 'react';
import { useStaticQuery, graphql, PageRendererProps, Link } from 'gatsby';
import Footer from './Footer';

// /**
//  * @see https://usehooks.com/useEventListener/
//  */
// function useEventListener(eventName: string, handler: () => any, element = window) {
//   // Create a ref that stores handler
//   const savedHandler = React.useRef();

//   // Update ref.current value if handler changes.
//   // This allows our effect below to always get latest handler ...
//   // ... without us needing to pass it in effect deps array ...
//   // ... and potentially cause effect to re-run every render.
//   React.useEffect(() => {
//     savedHandler.current = handler;
//   }, [handler]);

//   React.useEffect(
//     () => {
//       // Make sure element supports addEventListener
//       // On
//       const isSupported = element && element.addEventListener;
//       if (!isSupported) return;

//       // Create event listener that calls handler function stored in ref
//       const eventListener = (event: React.ChangeEvent) => savedHandler.current(event);

//       // Add event listener
//       element.addEventListener(eventName, eventListener);

//       // Remove event listener on cleanup
//       return () => {
//         element.removeEventListener(eventName, eventListener);
//       };
//     },
//     [eventName, element], // Re-run if eventName or element changes
//   );
// }

interface SiteLayoutProps extends PageRendererProps {
  title?: string;
  children?: ReactNode;
}

type QuickJumpProps = {
  // onQueryUpdate: (query: string) => void;
  isActive: boolean;
  updateActive: (isActive: boolean) => void;
};

const QUICK_JUMP_KEY = 'm';

/**
 * A component that allows for easy searching across the app.
 *
 * Ctrl + M
 */
function QuickJump({ isActive, updateActive }: QuickJumpProps) {
  const handler = (event: { ctrlKey: boolean; key: string }) => {
    const { ctrlKey, key } = event;
    // preventDefault();
    // stopPropagation();
    const toggled = ctrlKey && key == QUICK_JUMP_KEY;
    if (toggled) {
      updateActive(!isActive);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [window, handler]);

  return (
    isActive && (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center h-screen w-screen bg-[rgba(0,0,0,.50)] z-50">
        <input
          className="w-full mx-auto max-w-3xl bg-white rounded-md shadow-lg p-4"
          placeholder="Find something in the guide"
        />
      </div>
    )
  );
}

/**
 * A site-wide template layout.
 */
export default function Layout(props: SiteLayoutProps): JSX.Element {
  const { children } = props;

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [jumpIsActive, setJumpIsActive] = React.useState(false);

  const handleJumpActive = (isActive: boolean) => {
    console.log('Jump is active called', isActive);
    setJumpIsActive(isActive);
  };

  return (
    <>
      <QuickJump isActive={jumpIsActive} updateActive={handleJumpActive} />
      <div
        className={`min-h-screen h-full ${jumpIsActive ? 'overflow-hidden h-screen' : ''}`}
        tabIndex={jumpIsActive ? -1 : 0}
      >
        {/* <Header siteTitle={data.site.siteMetadata?.title || `UTD Survival Guide`} />
      <div className="flex">
        <div className="flex-1">
          <main>{children}</main>
          <Footer />
        </div>
      </div> */}
        {children}
        <Footer />
      </div>
    </>
  );
}
