import styles from './RecentGames.module.css'
import Link from 'next/link'

interface Game {
    id: number
    opponent: string
    result: 'win' | 'loss' | 'draw'
    date: string
    moves: number
}

const mockGames: Game[] = [
    { id: 1, opponent: 'Magnus', result: 'loss', date: '2h ago', moves: 45 },
    { id: 2, opponent: 'Hikaru', result: 'win', date: '5h ago', moves: 38 },
    { id: 3, opponent: 'Fabiano', result: 'win', date: '1d ago', moves: 52 },
    { id: 4, opponent: 'Wesley', result: 'draw', date: '2d ago', moves: 67 },
    { id: 5, opponent: 'Levon', result: 'win', date: '3d ago', moves: 41 },
]

export default function RecentGames() {
    return (
        <div className={styles.recentGames}>
            <div className={styles.header}>
                <h2>Recent Games</h2>
                <Link href="/game" className={styles.viewAll}>View All</Link>
            </div>
            <div className={styles.gamesList}>
                {mockGames.map((game) => (
                    <div key={game.id} className={styles.gameItem}>
                        <div className={styles.gameInfo}>
                            <div className={styles.opponent}>
                                <div className={styles.opponentAvatar}>
                                    {game.opponent.charAt(0)}
                                </div>
                                <span className={styles.opponentName}>{game.opponent}</span>
                            </div>
                            <div className={styles.gameDetails}>
                                <span className={styles.moves}>{game.moves} moves</span>
                                <span className={styles.date}>{game.date}</span>
                            </div>
                        </div>
                        <div className={`${styles.result} ${styles[game.result]}`}>
                            {game.result === 'win' ? 'Win' : game.result === 'loss' ? 'Loss' : 'Draw'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
