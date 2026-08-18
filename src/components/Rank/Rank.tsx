import { RankProps } from "./RankProps";
import styles from './Rank.module.css'
import cn from 'classnames'

function Rank({ score, className }: RankProps) {
    return (
        <div className={cn(styles['score'], className)}>
            <img className={styles['score__icon']} src='/star.svg' />
            <div>{score}</div>
        </div>
    );
}

export default Rank;