import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import { SectionIds } from "../../../sections/sectionIds";

export const Nav = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const setNavigationCssProps = useCallback(() => {
    if (!ref.current) return;
    const navHeight = ref.current.offsetHeight;
    document.documentElement.style.setProperty(
      "--scroll-padding",
      `${navHeight}px`
    );
  }, [ref]);

  useEffect(() => {
    setNavigationCssProps();

  }, [ref, setNavigationCssProps]);

  return (
    <nav className="nav nav-top" ref={ref}>
      <p id="nav__title">Mateusz Chmielewski</p>
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
