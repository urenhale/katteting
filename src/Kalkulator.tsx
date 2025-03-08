import styles from './Kalkulator.module.css'

export const Kalkulator = () => {
  return (
    <div className={styles.kalkulator}>
      <select>
        <option>Luci</option>
        <option>Pølsa</option>
      </select>
    </div>
  )
}
