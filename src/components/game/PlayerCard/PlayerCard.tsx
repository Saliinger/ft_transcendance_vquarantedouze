import styles from './PlayerCard.module.css'
import Image from 'next/image'

interface PlayerCardProps {
    name: string
    rating: number
    avatar?: string
    time: string
    isWhite?: boolean
}

export default function PlayerCard({ name, rating, avatar, time, isWhite = true }: PlayerCardProps) {
    return (
        <div className={styles.playerCard}>
            <div className={styles.playerInfo}>
                <div className={styles.avatar}>
                    {avatar ? (
                        <Image src={avatar} alt={name} width={40} height={40} />
                    ) : (
                        <div className={styles.defaultAvatar}>
                            {name.charAt(0).toUpperCase()}
                        </div>
                    )}
                </div>
                <div className={styles.details}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.rating}>{rating}</span>
                </div>
            </div>
            <div className={styles.timer}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                </svg>
                <span>{time}</span>
            </div>
        </div>
    )
}
