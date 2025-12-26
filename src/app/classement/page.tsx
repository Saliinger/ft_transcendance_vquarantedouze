import styles from './Classement.module.css'
import LeaderboardTable from '@/components/classement/LeaderboardTable/LeaderboardTable'
import UserStats from '@/components/classement/UserStats/UserStats'

export default function Classement() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                <div className={styles.leftColumn}>
                    <LeaderboardTable />
                </div>
                <div className={styles.rightColumn}>
                    <UserStats 
                        username="JALBISER"
                        rank={9}
                        rating={2732}
                        wins={138}
                        losses={52}
                        winRate={72.6}
                    />
                </div>
            </div>
        </div>
    )
}