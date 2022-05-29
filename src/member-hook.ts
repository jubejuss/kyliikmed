import { useState } from 'react';

export enum Presence {
  Absent,
  Present,
}

export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  photoUrl?: string;
  status?: Presence;
}

const mockMembers: Member[] = [
  { id: '1', firstName: 'Jaan', lastName: 'Bajaan' },
  { id: '2', firstName: 'Anne', lastName: 'Mai' },
  { id: '3', firstName: 'Ervin', lastName: 'Saan' },
  { id: '4', firstName: 'Õie', lastName: 'Ketas' },
];

export const useMembers = () => {
  const useMemberState = useState(mockMembers);
  return useMemberState;
};
