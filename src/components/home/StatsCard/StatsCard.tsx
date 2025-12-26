import styles from './StatsCard.module.css'

interface StatsCardProps {
    title: string
    value: string | number
    icon: React.ReactNode
    trend?: {
        value: number
        isPositive: boolean
    }
}

export default function StatsCard({ title, value, icon, trend }: StatsCardProps) {
    return (
        <div className={styles.statsCard}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.value}>{value}</div>
                {trend && (
                    <div className={`${styles.trend} ${trend.isPositive ? styles.positive : styles.negative}`}>
                        {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
                    </div>
                )}
            </div>
        </div>
    )
}
