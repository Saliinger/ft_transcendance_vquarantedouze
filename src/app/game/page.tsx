import styles from './Game.module.css'
import PartInfo from '@/components/game/PartInfo/PartInfo'
import Chat from '@/components/game/Chat/Chat'
import GameBoard from '@/components/game/GameBoard/GameBoard'
import PlayersInfo from '@/components/game/PlayersInfo/PlayersInfo'

export default function Game() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                <div className={styles.col}>
                    <div className={styles.grdBsh}>
                        <GameBoard />
                        <PlayersInfo />
                    </div>
                </div>
                <div className={styles.cold}>
                    <div className={styles.grdBza}>
                        <div className={styles.row}>
                            <PartInfo />
                        </div>
                        <div className={styles.row}>
                        <Chat />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}