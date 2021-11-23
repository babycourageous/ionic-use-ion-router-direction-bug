import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { Link } from 'react-router-dom'

function Example() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Example</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ul>
          <li>
            <Link to="/example/d1">Detail 1 - It's button uses "replace"</Link>
          </li>

          <li>
            <Link to="/example/d2">
              Detail 2 - It's button uses "push" (default behavior)
            </Link>
          </li>

          <li>
            <Link to="/example/d3">Detail 3</Link>
          </li>
        </ul>
      </IonContent>
    </IonPage>
  )
}

export default Example
