import {
  IonActionSheet,
  IonAlert,
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import { Member, Presence, useMembers } from '../member-hook';
import {
  eye,
  eyeOffOutline,
  personOutline,
  trash,
  close,
  ellipsisHorizontalOutline,
  chevronForwardOutline,
} from 'ionicons/icons';

const Members: React.FC = () => {
  const emptyMember: Member = { id: '', firstName: '', lastName: '' };
  const [selectedMember, setSelectedMember] = useState(emptyMember);
  const [members, setMembers] = useMembers();
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);

  function deleteMember(member: Member) {
    setMembers(members.filter((x) => x.id !== member.id));
    setShowDeleteToast(true);
  }

  function clickMember(member: Member) {
    setSelectedMember(member);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Liikmed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard class="ion-padding-bottom">
          <img src="assets/images/meeting.jpeg" alt="koosolek" />
          <IonCardHeader>
            <IonCardTitle>Liikmed</IonCardTitle>
          </IonCardHeader>
          <IonList>
            {members.map((member) => {
              return (
                <IonItemSliding key={personOutline}>
                  <IonItem>
                    <IonIcon slot="start" icon={personOutline}></IonIcon>
                    <IonLabel>
                      {member.firstName}, {member.lastName}
                    </IonLabel>
                    {member.status === Presence.Present && (
                      <IonIcon slot="end" icon={eye}></IonIcon>
                    )}
                    {member.status === Presence.Absent && (
                      <IonIcon slot="end" icon={eyeOffOutline}></IonIcon>
                    )}
                    <IonButtons slot="end">
                      <IonButton onClick={() => clickMember(member)}>
                        <IonIcon
                          slot="icon-only"
                          icon={ellipsisHorizontalOutline}
                        ></IonIcon>
                        <IonButton>
                          <IonIcon
                            slot="icon-only"
                            icon={chevronForwardOutline}
                          ></IonIcon>
                        </IonButton>
                      </IonButton>
                    </IonButtons>
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption
                      color="danger"
                      onClick={() => setShowDeleteAlert(true)}
                    >
                      Kustuta
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              );
            })}
          </IonList>
          <IonActionSheet
            isOpen={!!selectedMember.id}
            header={`${selectedMember.firstName} ${selectedMember.lastName}`}
            onDidDismiss={() => setSelectedMember(emptyMember)}
            buttons={[
              {
                text: 'Kustuta',
                role: 'destructive',
                icon: trash,
                handler: () => {
                  setShowDeleteAlert(true);
                },
              },
              {
                text: 'Märgi kohalolevaks',
                icon: eye,
                handler: () => {
                  selectedMember.status = Presence.Present;
                },
              },
              {
                text: 'Märgi puudujaks',
                icon: eyeOffOutline,
                handler: () => {
                  selectedMember.status = Presence.Absent;
                },
              },
              {
                text: 'Katkesta',
                icon: close,
                role: 'cancel',
              },
            ]}
          ></IonActionSheet>
          <IonAlert
            isOpen={showDeleteAlert}
            onDidDismiss={() => setShowDeleteAlert(false)}
            header="Kas kustutan liikme nimekirjast?"
            message="Seda käsklust enam tagasi võtta ei saa"
            subHeader={`${selectedMember.firstName} ${selectedMember.lastName}`}
            buttons={[
              {
                text: 'Kustuta',
                handler: () => {
                  deleteMember(selectedMember);
                },
              },
              {
                text: 'Ei, ära kustuta',
                role: 'Katkesta',
              },
            ]}
          ></IonAlert>
          <IonToast
            isOpen={showDeleteToast}
            onDidDismiss={() => setShowDeleteToast(false)}
            message="Liige on kustutatud"
            duration={3000}
            position="top"
          ></IonToast>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Members;
