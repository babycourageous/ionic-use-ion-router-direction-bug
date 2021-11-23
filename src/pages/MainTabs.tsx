import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react'
import { Route, Redirect } from 'react-router'
import { calendar, location, people } from 'ionicons/icons'
import Tab1 from './tab1'
import Tab2 from './tab2'
import Tab3 from './tab3'

function MainTabs() {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/schedule" />

        <Route path="/tabs/tab1" exact>
          <Tab1 />
        </Route>
        <Route path="/tabs/tab2" exact>
          <Tab2 />
        </Route>
        <Route path="/tabs/tab3" exact>
          <Tab3 />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/tab1">
          <IonIcon icon={calendar} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/tab2">
          <IonIcon icon={people} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/tab3">
          <IonIcon icon={location} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default MainTabs
