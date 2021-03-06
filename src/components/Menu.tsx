import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { checkbox, home, images, people } from 'ionicons/icons';

interface AppPage {
  title: string;
  url: string;
  icon: string;
}

const appPages: AppPage[] = [
  {
    title: 'Kodu',
    url: '/home',
    icon: home,
  },
  {
    title: 'Liikmed',
    url: '/members',
    icon: people,
  },
  {
    title: 'Kodukord',
    url: '/rules',
    icon: checkbox,
  },
  {
    title: 'Galerii',
    url: '/gallery',
    icon: images,
  },
];

const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main" side="start" type="overlay">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menüü</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  routerLink={appPage.url}
                  routerDirection="root"
                  lines="none"
                >
                  <IonIcon slot="start" icon={appPage.icon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
