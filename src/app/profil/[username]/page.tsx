'use client';

import { use } from 'react';
import Link from 'next/link';
import styles from '../Profil.module.css';
import ProfileHeader from '@/components/profile/ProfileHeader/ProfileHeader';
import ProfileStats from '@/components/profile/ProfileStats/ProfileStats';
import MatchHistory from '@/components/profile/MatchHistory/MatchHistory';
import FriendsList from '@/components/profile/FriendsList/FriendsList';

// Base de données fictive d'utilisateurs
const usersDatabase = {
  Magnus: {
    username: 'Magnus',
    avatar: 'M',
    status: 'online' as const,
    bio: 'World Chess Champion, always ready for a challenge 🏆',
    stats: {
      wins: 156,
      losses: 23,
      winRate: 87.2,
      gamesPlayed: 179,
    },
    matchHistory: [
      { opponent: 'JALBISER', result: 'loss' as const, score: '0-1', date: '2025-12-21' },
      { opponent: 'Hikaru', result: 'win' as const, score: '1-0', date: '2025-12-20' },
      { opponent: 'Fabiano', result: 'win' as const, score: '1-0', date: '2025-12-19' },
      { opponent: 'Wesley', result: 'win' as const, score: '1-0', date: '2025-12-18' },
    ],
    friends: [
      { username: 'JALBISER', avatar: 'J' },
      { username: 'Hikaru', avatar: 'H' },
      { username: 'Fabiano', avatar: 'F' },
      { username: 'Wesley', avatar: 'W' },
    ],
  },
  Hikaru: {
    username: 'Hikaru',
    avatar: 'H',
    status: 'online' as const,
    bio: 'Speed chess specialist, streaming daily on Twitch 🎮',
    stats: {
      wins: 203,
      losses: 45,
      winRate: 81.9,
      gamesPlayed: 248,
    },
    matchHistory: [
      { opponent: 'JALBISER', result: 'loss' as const, score: '0-1', date: '2025-12-20' },
      { opponent: 'Magnus', result: 'loss' as const, score: '0-1', date: '2025-12-20' },
      { opponent: 'Levon', result: 'win' as const, score: '1-0', date: '2025-12-19' },
      { opponent: 'Fabiano', result: 'win' as const, score: '1-0', date: '2025-12-18' },
    ],
    friends: [
      { username: 'JALBISER', avatar: 'J' },
      { username: 'Magnus', avatar: 'M' },
      { username: 'Wesley', avatar: 'W' },
    ],
  },
  Fabiano: {
    username: 'Fabiano',
    avatar: 'F',
    status: 'offline' as const,
    bio: 'Classical chess master, precision is key 🎯',
    stats: {
      wins: 134,
      losses: 52,
      winRate: 72.0,
      gamesPlayed: 186,
    },
    matchHistory: [
      { opponent: 'JALBISER', result: 'win' as const, score: '1-0', date: '2025-12-19' },
      { opponent: 'Magnus', result: 'loss' as const, score: '0-1', date: '2025-12-19' },
      { opponent: 'Hikaru', result: 'loss' as const, score: '0-1', date: '2025-12-18' },
      { opponent: 'Wesley', result: 'win' as const, score: '1-0', date: '2025-12-17' },
    ],
    friends: [
      { username: 'JALBISER', avatar: 'J' },
      { username: 'Magnus', avatar: 'M' },
      { username: 'Maxime', avatar: 'M' },
    ],
  },
  Wesley: {
    username: 'Wesley',
    avatar: 'W',
    status: 'online' as const,
    bio: 'Tactical genius, playing for the win every time 💪',
    stats: {
      wins: 98,
      losses: 41,
      winRate: 70.5,
      gamesPlayed: 139,
    },
    matchHistory: [
      { opponent: 'JALBISER', result: 'loss' as const, score: '0-1', date: '2025-12-18' },
      { opponent: 'Magnus', result: 'loss' as const, score: '0-1', date: '2025-12-18' },
      { opponent: 'Fabiano', result: 'loss' as const, score: '0-1', date: '2025-12-17' },
      { opponent: 'Levon', result: 'win' as const, score: '1-0', date: '2025-12-16' },
    ],
    friends: [
      { username: 'JALBISER', avatar: 'J' },
      { username: 'Magnus', avatar: 'M' },
      { username: 'Hikaru', avatar: 'H' },
    ],
  },
  Levon: {
    username: 'Levon',
    avatar: 'L',
    status: 'offline' as const,
    bio: 'Endgame specialist, patient and deadly 👑',
    stats: {
      wins: 112,
      losses: 38,
      winRate: 74.7,
      gamesPlayed: 150,
    },
    matchHistory: [
      { opponent: 'JALBISER', result: 'win' as const, score: '1-0', date: '2025-12-17' },
      { opponent: 'Hikaru', result: 'loss' as const, score: '0-1', date: '2025-12-19' },
      { opponent: 'Wesley', result: 'loss' as const, score: '0-1', date: '2025-12-16' },
      { opponent: 'Maxime', result: 'win' as const, score: '1-0', date: '2025-12-15' },
    ],
    friends: [
      { username: 'JALBISER', avatar: 'J' },
      { username: 'Maxime', avatar: 'M' },
      { username: 'Fabiano', avatar: 'F' },
    ],
  },
  Maxime: {
    username: 'Maxime',
    avatar: 'M',
    status: 'online' as const,
    bio: 'French chess prodigy, rising star ⭐',
    stats: {
      wins: 87,
      losses: 44,
      winRate: 66.4,
      gamesPlayed: 131,
    },
    matchHistory: [
      { opponent: 'JALBISER', result: 'loss' as const, score: '0-1', date: '2025-12-16' },
      { opponent: 'Levon', result: 'loss' as const, score: '0-1', date: '2025-12-15' },
      { opponent: 'Fabiano', result: 'win' as const, score: '1-0', date: '2025-12-14' },
      { opponent: 'Wesley', result: 'win' as const, score: '1-0', date: '2025-12-13' },
    ],
    friends: [
      { username: 'JALBISER', avatar: 'J' },
      { username: 'Levon', avatar: 'L' },
      { username: 'Fabiano', avatar: 'F' },
    ],
  },
};

type UserData = typeof usersDatabase[keyof typeof usersDatabase];

export default function UserProfilPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = use(params);
  const user: UserData | undefined = usersDatabase[username as keyof typeof usersDatabase];

  if (!user) {
    return (
      <div className={styles.wrapper}>
        <div style={{ background: '#21201D', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>Utilisateur non trouvé</h1>
          <p style={{ color: '#90908E', marginBottom: '1.5rem' }}>L'utilisateur "{username}" n'existe pas.</p>
          <Link href="/profil" style={{ color: '#739552', textDecoration: 'none' }}>
            ← Retour à mon profil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <ProfileHeader 
        username={user.username}
        bio={user.bio}
        isOnline={user.status === 'online'}
      />
      
      <ProfileStats 
        wins={user.stats.wins}
        losses={user.stats.losses}
        winRate={user.stats.winRate}
        gamesPlayed={user.stats.gamesPlayed}
      />

      <div className={styles.grid}>
        <div className={styles.leftColumn}>
          <MatchHistory matches={user.matchHistory} />
        </div>
        <div className={styles.rightColumn}>
          <FriendsList friends={user.friends} />
        </div>
      </div>
    </div>
  );
}
