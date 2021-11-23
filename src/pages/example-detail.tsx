import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react'
import { useParams } from 'react-router-dom'

function ExampleDetail() {
  const params = useParams<{ id: string }>()
  const router = useIonRouter()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{params.id}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{params.id}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          {params.id === 'start' ? (
            <IonButton
              onClick={() => {
                router.push('/example/end', 'none', 'replace')
              }}
            >
              Redirect to another detail
            </IonButton>
          ) : null}
        </div>
        <p>This is a detail</p>
      </IonContent>
    </IonPage>
  )
}

export default ExampleDetail
