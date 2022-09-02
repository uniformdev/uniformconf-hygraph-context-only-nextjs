import Link from 'next/link';

const NavMenu = () => (
  <ul className="list-reset lg:flex justify-end flex-1 items-center space-x-2 lg:mr-4">
    <li>
      <Link prefetch={false} href="/">
        <a className="inline-block py-2 px-4 text-black font-bold no-underline">Home</a>
      </Link>
    </li>
    <li>
      <Link prefetch={false} href="/developers">
        <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
          For Developers
        </a>
      </Link>
    </li>
    <li>
      <Link prefetch={false} href="/marketers">
        <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
          For Marketers
        </a>
      </Link>
    </li>
    <li>
      <Link prefetch={false} href="/registration">
        <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
          Registration
        </a>
      </Link>
    </li>
    <li>
      <Link prefetch={false} href="/?utm_campaign=unfrmconf">
        <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
          Call for papers
        </a>
      </Link>
    </li>
  </ul>
);

export default NavMenu;
