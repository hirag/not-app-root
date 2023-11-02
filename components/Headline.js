import styles from '@/components/Headline.module.css'

export function Headline(props) {
    return (
        <div>
            <p>
                Get started by editing&nbsp;
                <code className={styles.code}>{props.code}.js</code>
            </p>
        </div>
    );
}
