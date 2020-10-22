import Pet from './Pet';
import User from './User';

export default interface Adoption {
  id: Number;
  pet: Pet;
  user: User;
  returned: boolean;
}