import styles from '@/styles/Home.module.css'

export default function Headline(props) {
    return (
        <p>
            Get started by editing&nbsp;
            <code className={styles.code}>{props.title}</code>
        </p>
    );
}
