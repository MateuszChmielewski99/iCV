import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import { SectionIds } from "../../../sections/sectionIds";

export const Nav = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollHandler = useCallback(() => {
    if (!ref.current) return;
    if (window.scrollY >= 50) ref.current.className = "nav nav-scrolled";
    else ref.current.className = "nav nav-top";
  }, [ref]);

  const setNavigationCssProps = useCallback(() => {
    if (!ref.current) return;
    const navHeight = ref.current.offsetHeight;
    document.documentElement.style.setProperty(
      "--scroll-padding",
      `${navHeight}px`
    );
  }, [ref]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    setNavigationCssProps();

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [ref, scrollHandler, setNavigationCssProps]);

  return (
    <nav className="nav nav-top" ref={ref}>
      <Link href={`#${SectionIds.About}`}>
        <a>About</a>
      </Link>
      <Link href={`#${SectionIds.Exp}`}>
        <a>Experience</a>
      </Link>
      <Link href={`#${SectionIds.Footer}`}>
        <a>Contact</a>
      </Link>
    </nav>
  );
};
