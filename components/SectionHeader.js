import styles from './SectionHeader.module.css';

function SectionHeader(props) {
  return (
    <section>
      <h3 className={styles.text}>{props.title}</h3>
    </section>
  );
}
export default SectionHeader;
