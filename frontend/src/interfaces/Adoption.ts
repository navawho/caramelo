import Pet from './Pet';
import User from './User';

export interface Adoption {
  pet: Pet;
  user: User;
  returned: boolean;
}