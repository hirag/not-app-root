import styles from "src/components/Headline/Headline.module.css"

export function Headline(props) {
    return (
        <div>
            <p>
                アイテムの数は&nbsp;
                <code className={styles.code}>{props.code}個です。</code>
            </p>
        </div>
    );
}
