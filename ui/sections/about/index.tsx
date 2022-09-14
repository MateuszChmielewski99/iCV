import { SectionIds } from "../sectionIds";
import commonStyles from '../../../styles/sections/Common.module.css';
import styles from '../../../styles/sections/About.module.css';


export const About = () => {
    return <section id={SectionIds.About} className={`${commonStyles.section} ${styles.section__about}`}>About</section>
}