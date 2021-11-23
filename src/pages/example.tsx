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
            <Link to="/example/start">Detail 1 - go here first</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/example/end">Detail 2</Link>
          </li>
        </ul>
      </IonContent>
    </IonPage>
  )
}

export default Example
