import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonMenuButton,
} from '@ionic/react';

const Rules: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Kodukord</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <img src="assets/images/rules.webp" alt="Telliskivi 54" />
          <IonCardHeader>
            <IonCardTitle>KÜ Telliskivi 54 kodukord</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <ul>
              <li>Koridoris on suitsetamine ja laulmine keelatud</li>
              <li>Peeter siiski võib</li>
              <li>Jaan ja Annika peavad ära leppima</li>
              <li>Saamo ei tohi kive koju tassida</li>
              <li>Lapsed võivad teha, mis tahavad</li>
            </ul>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Rules;
