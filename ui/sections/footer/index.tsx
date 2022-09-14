import { SectionIds } from "../sectionIds";
import commonStyles from '../../../styles/sections/Common.module.css';
import styles from '../../../styles/sections/Footer.module.css';

export const Footer = () => {
  return (
    <section id={SectionIds.Footer} className={`${commonStyles.section} ${styles.section__footer}`}>
      <footer>Footer</footer>
    </section>
  );
};
