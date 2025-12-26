import styles from './FriendsList.module.css'
import Link from 'next/link'

interface Friend {
    username: string
    avatar: string
}

interface FriendsListProps {
    friends: Friend[]
}

export default function FriendsList({ friends }: FriendsListProps) {
    return (
        <div className={styles.friendsList}>
            <h2>Friends</h2>
            <div className={styles.friendsGrid}>
                {friends.map((friend, index) => (
                    <Link key={index} href={`/profil/${friend.username}`} className={styles.friendCard}>
                        <div className={styles.friendAvatar}>
                            {friend.avatar}
                        </div>
                        <span className={styles.friendName}>{friend.username}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
