'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navItems = [
  {
    name: 'Play',
    href: '/game',
    icon: '/navbar/playnav.png',
  },
  {
    name: 'Classement',
    href: '/classement',
    icon: '/navbar/classnav.png',
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image 
          src="/logo.png" 
          alt="Logo"
          width={50}
          height={50}
        />
      </Link>

      <div className={styles.nav}>
        {navItems.map((item) => {
          const isActive = pathname === item.href || 
            (item.href !== '/' && pathname?.startsWith(item.href));
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
            
            >
              <div className={styles.iconWrapper}>
                <Image 
                  src={item.icon} 
                  alt={item.name}
                  width={24}
                  height={24}
                  className={styles.icon}
                />
              </div>
              <span className={styles.label}>{item.name}</span>
              <div className={styles.tooltip}>
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
