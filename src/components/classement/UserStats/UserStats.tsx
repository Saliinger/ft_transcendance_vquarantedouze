import styles from './UserStats.module.css'
import Image from 'next/image'

interface UserStatsProps {
    username: string
    rank: number
    rating: number
    wins: number
    losses: number
    winRate: number
    avatar?: string
}

export default function UserStats({ username, rank, rating, wins, losses, winRate, avatar }: UserStatsProps) {
    return (
        <div className={styles.userStats}>
            <div className={styles.header}>
                <h2>Your Stats</h2>
            </div>
            <div className={styles.profileSection}>
                <div className={styles.avatar}>
                    {avatar ? (
                        <Image src={avatar} alt={username} width={80} height={80} />
                    ) : (
                        <div className={styles.defaultAvatar}>
                            {username.charAt(0).toUpperCase()}
                        </div>
                    )}
                </div>
                <div className={styles.userInfo}>
                    <h3>{username}</h3>
                    <div className={styles.rating}>{rating} ELO</div>
                </div>
            </div>
            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statLabel}>Rank</div>
                    <div className={styles.statValue}>#{rank}</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statLabel}>Wins</div>
                    <div className={styles.statValue}>{wins}</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statLabel}>Losses</div>
                    <div className={styles.statValue}>{losses}</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statLabel}>Win Rate</div>
                    <div className={styles.statValue}>{winRate}%</div>
                </div>
            </div>
        </div>
    )
}
