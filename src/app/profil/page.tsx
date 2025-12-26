import styles from './Profil.module.css'
import ProfileHeader from '@/components/profile/ProfileHeader/ProfileHeader'
import ProfileStats from '@/components/profile/ProfileStats/ProfileStats'
import MatchHistory from '@/components/profile/MatchHistory/MatchHistory'
import FriendsList from '@/components/profile/FriendsList/FriendsList'

const currentUser = {
  username: 'JALBISER',
  bio: 'Passionné d\'échecs depuis toujours ! Toujours prêt pour une partie enflammée ♟️',
  stats: {
    wins: 42,
    losses: 15,
    winRate: 73.7,
    gamesPlayed: 57,
  },
  matchHistory: [
    { opponent: 'Magnus', result: 'win' as const, score: '1-0', date: '2025-12-21' },
    { opponent: 'Hikaru', result: 'win' as const, score: '1-0', date: '2025-12-20' },
    { opponent: 'Fabiano', result: 'loss' as const, score: '0-1', date: '2025-12-19' },
    { opponent: 'Wesley', result: 'win' as const, score: '1-0', date: '2025-12-18' },
    { opponent: 'Levon', result: 'loss' as const, score: '0-1', date: '2025-12-17' },
  ],
  friends: [
    { username: 'Magnus', avatar: 'M' },
    { username: 'Hikaru', avatar: 'H' },
    { username: 'Fabiano', avatar: 'F' },
    { username: 'Wesley', avatar: 'W' },
    { username: 'Levon', avatar: 'L' },
    { username: 'Maxime', avatar: 'M' },
  ],
}

export default function Profil() {
  return (
    <div className={styles.wrapper}>
      <ProfileHeader 
        username={currentUser.username}
        bio={currentUser.bio}
        isOnline={true}
      />
      
      <ProfileStats 
        wins={currentUser.stats.wins}
        losses={currentUser.stats.losses}
        winRate={currentUser.stats.winRate}
        gamesPlayed={currentUser.stats.gamesPlayed}
      />

      <div className={styles.grid}>
        <div className={styles.leftColumn}>
          <MatchHistory matches={currentUser.matchHistory} />
        </div>
        <div className={styles.rightColumn}>
          <FriendsList friends={currentUser.friends} />
        </div>
      </div>
    </div>
  )
}
