import styles from './PlayersInfo.module.css'
import PlayerCard from '../PlayerCard/PlayerCard'

export default function PlayersInfo() {
    return (
        <div className={styles.playersInfo}>
            <PlayerCard 
                name="JALBISER"
                rating={6000}
                time="15:10"
                isWhite={false}
            />
            <PlayerCard 
                name="JALBISER"
                rating={6000}
                time="15:10"
                isWhite={true}
            />
        </div>
    )
}
