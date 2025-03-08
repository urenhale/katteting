import styles from './Infoboks.module.css'

type Props = {
  navn: string
  vekt: {
    verdi: number
    enhet: string
  }
}

export const Infoboks = ({ navn, vekt }: Props) => {
  return (
    <div className={styles.infoBoks}>
      <h2>{navn}</h2>
      <div className={styles.vektinfo}>
        <p>Vekt:</p>
        <p>
          {vekt.verdi} {vekt.enhet}
        </p>
      </div>
    </div>
  )
}
