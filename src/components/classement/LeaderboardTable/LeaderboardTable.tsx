import styles from './LeaderboardTable.module.css'

interface Player {
    rank: number
    username: string
    rating: number
    wins: number
    losses: number
    winRate: number
}

const mockPlayers: Player[] = [
    { rank: 1, username: 'Magnus', rating: 2847, wins: 234, losses: 45, winRate: 83.9 },
    { rank: 2, username: 'Hikaru', rating: 2812, wins: 198, losses: 52, winRate: 79.2 },
    { rank: 3, username: 'Fabiano', rating: 2804, wins: 187, losses: 48, winRate: 79.6 },
    { rank: 4, username: 'Wesley', rating: 2788, wins: 176, losses: 54, winRate: 76.5 },
    { rank: 5, username: 'Levon', rating: 2775, wins: 165, losses: 49, winRate: 77.1 },
    { rank: 6, username: 'Maxime', rating: 2764, wins: 158, losses: 56, winRate: 73.8 },
    { rank: 7, username: 'Anish', rating: 2751, wins: 149, losses: 51, winRate: 74.5 },
    { rank: 8, username: 'Teimour', rating: 2743, wins: 142, losses: 58, winRate: 71.0 },
    { rank: 9, username: 'JALBISER', rating: 2732, wins: 138, losses: 52, winRate: 72.6 },
    { rank: 10, username: 'Sergey', rating: 2728, wins: 135, losses: 55, winRate: 71.1 },
]

export default function LeaderboardTable() {
    return (
        <div className={styles.leaderboard}>
            <div className={styles.header}>
                <h2>Leaderboard</h2>
                <div className={styles.filters}>
                    <button className={`${styles.filterBtn} ${styles.active}`}>All Time</button>
                    <button className={styles.filterBtn}>This Month</button>
                    <button className={styles.filterBtn}>This Week</button>
                </div>
            </div>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>Rating</th>
                            <th>Wins</th>
                            <th>Losses</th>
                            <th>Win Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockPlayers.map((player) => (
                            <tr key={player.rank} className={player.username === 'JALBISER' ? styles.highlighted : ''}>
                                <td>
                                    <div className={styles.rankCell}>
                                        {player.rank <= 3 && (
                                            <span className={`${styles.medal} ${styles[`medal${player.rank}`]}`}>
                                                {player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : '🥉'}
                                            </span>
                                        )}
                                        <span>#{player.rank}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.playerCell}>
                                        <div className={styles.playerAvatar}>
                                            {player.username.charAt(0).toUpperCase()}
                                        </div>
                                        <span className={styles.playerName}>{player.username}</span>
                                    </div>
                                </td>
                                <td><span className={styles.rating}>{player.rating}</span></td>
                                <td>{player.wins}</td>
                                <td>{player.losses}</td>
                                <td><span className={styles.winRate}>{player.winRate}%</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
