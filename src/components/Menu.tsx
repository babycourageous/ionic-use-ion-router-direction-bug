import { useLocation, useHistory } from 'react-router-dom'

import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react'
import {
  calendarOutline,
  hammer,
  mapOutline,
  peopleOutline,
  person,
} from 'ionicons/icons'

import './Menu.css'

const routes = {
  appPages: [
    { title: 'Tab1', path: '/tabs/tab1', icon: calendarOutline },
    { title: 'Tab2', path: '/tabs/tab2', icon: peopleOutline },
    { title: 'Tab3', path: '/tabs/tab3', icon: mapOutline },
  ],
  otherPages: [{ title: 'Example', path: '/example', icon: person }],
}

type MenuProps = { menuEnabled?: boolean }
type Pages = {
  title: string
  path: string
  icon: string
  routerDirection?: string
}

function Menu({ menuEnabled = true }: MenuProps) {
  const location = useLocation()
  const history = useHistory()

  function renderlistItems(list: Array<Pages>) {
    return list
      .filter((route) => !!route.path)
      .map((p) => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem
            detail={false}
            routerLink={p.path}
            routerDirection="none"
            className={
              location.pathname.startsWith(p.path) ? 'selected' : undefined
            }
          >
            <IonIcon slot="start" icon={p.icon} />
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ))
  }

  return (
    <IonMenu type="overlay" disabled={!menuEnabled} contentId="main">
      <IonContent forceOverscroll={false}>
        <IonList lines="none">
          <IonListHeader>Basic</IonListHeader>
          {renderlistItems(routes.appPages)}
        </IonList>
        <IonList lines="none">
          <IonListHeader>Other</IonListHeader>

          {renderlistItems(routes.otherPages)}
        </IonList>
        <IonList lines="none">
          <IonListHeader>Tutorial</IonListHeader>
          <IonItem
            button
            onClick={() => {
              history.push('/tutorial')
            }}
          >
            <IonIcon slot="start" icon={hammer} />
            Show Tutorial
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Menu
