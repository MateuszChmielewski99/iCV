import { SectionIds } from "../sectionIds"
import styles from '../../../styles/sections/Common.module.css';
import expStyles from '../../../styles/sections/Experience.module.css'

export const Experience = () => {
    return <section id={SectionIds.Exp} className={`${styles.section} ${expStyles.section__experience}`}>Experience</section>
}