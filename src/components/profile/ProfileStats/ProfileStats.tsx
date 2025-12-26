import styles from './ProfileStats.module.css'

interface ProfileStatsProps {
    wins: number
    losses: number
    winRate: number
    gamesPlayed: number
}

export default function ProfileStats({ wins, losses, winRate, gamesPlayed }: ProfileStatsProps) {
    return (
        <div className={styles.profileStats}>
            <h2>Statistics</h2>
            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statValue}>{gamesPlayed}</div>
                    <div className={styles.statLabel}>Games Played</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statValue}>{wins}</div>
                    <div className={styles.statLabel}>Wins</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statValue}>{losses}</div>
                    <div className={styles.statLabel}>Losses</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statValue}>{winRate}%</div>
                    <div className={styles.statLabel}>Win Rate</div>
                </div>
            </div>
        </div>
    )
}
