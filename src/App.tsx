import styles from './App.module.css'
import { Infoboks } from './Infoboks.tsx'
import { Kalkulator } from './Kalkulator.tsx'

export default function App() {
  return (
    <main>
      <div className={styles.hovedinnehold}>
        <div>
          <h1>Katteting</h1>
        </div>
        <div>
          <Infoboks navn={'Pølsa'} vekt={{ verdi: 6, enhet: 'kg' }} />
          <Infoboks navn={'Luci'} vekt={{ verdi: 4, enhet: 'kg' }} />
        </div>
        <div>
          <Kalkulator navn={'Pølsa'} />
        </div>
      </div>
    </main>
  )
}
