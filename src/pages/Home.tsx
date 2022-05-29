import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonRouterLink,
  IonButtons,
  IonMenuButton,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Telliskivi 54</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <img src="assets/images/house.jpg" alt="Telliskivi 54" />
          <IonCardHeader>
            <IonCardSubtitle>Ühistu liikmete haldaja</IonCardSubtitle>
            <IonCardTitle>KÜ Telliskivi 54</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Telliskivi 54 koos Telliskivi 52 hoonega moodustab kinnismälestise
              nr 8822. Tegemist on arhitekt Artur Perna projekteeritud Tallinna
              tüüpi elamuga.
            </p>
            <IonRouterLink href="/members" routerDirection="forward">
              Vaata liikmeid
            </IonRouterLink>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
