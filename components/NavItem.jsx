import Link from "next/link";

export default function NavItem({ text, href, active }) {
    return (
       <Link href={href} legacyBehavior>
      <a
        className={`nav__item hover-underline ${
          active ? "active" : ""
        }`}
      >
        {text}
      </a>
    </Link>
    );
};