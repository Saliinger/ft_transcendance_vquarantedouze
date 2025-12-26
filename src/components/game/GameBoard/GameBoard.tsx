import styles from './GameBoard.module.css'

export default function GameBoard() {
    const squares = []
    
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const isLight = (row + col) % 2 === 0
            squares.push(
                <div 
                    key={`${row}-${col}`}
                    className={`${styles.square} ${isLight ? styles.light : styles.dark}`}
                />
            )
        }
    }

    return (
        <div className={styles.game}>
            <div className={styles.chessboard}>
                {squares}
            </div>
        </div>
    )
}
