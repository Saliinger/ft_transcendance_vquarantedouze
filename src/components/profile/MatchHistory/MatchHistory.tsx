import styles from './MatchHistory.module.css'

interface Match {
    opponent: string
    result: 'win' | 'loss'
    score: string
    date: string
}

interface MatchHistoryProps {
    matches: Match[]
}

export default function MatchHistory({ matches }: MatchHistoryProps) {
    return (
        <div className={styles.matchHistory}>
            <h2>Match History</h2>
            <div className={styles.matchList}>
                {matches.map((match, index) => (
                    <div key={index} className={styles.matchItem}>
                        <div className={styles.matchInfo}>
                            <div className={styles.opponent}>
                                <div className={styles.opponentAvatar}>
                                    {match.opponent.charAt(0).toUpperCase()}
                                </div>
                                <span className={styles.opponentName}>{match.opponent}</span>
                            </div>
                            <div className={styles.matchDetails}>
                                <span className={styles.score}>{match.score}</span>
                                <span className={styles.date}>{new Date(match.date).toLocaleDateString()}</span>
                            </div>
                        </div>
                        <div className={`${styles.result} ${styles[match.result]}`}>
                            {match.result === 'win' ? 'Win' : 'Loss'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
