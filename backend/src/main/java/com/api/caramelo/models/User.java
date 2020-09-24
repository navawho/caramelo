import java.util.Set;

public class User {
  private Long id;

  Set<Pet> adoptedPets; 
  Set<Pet> solicitedPets; 

  private String username;
  private String password;
  private String email;
  private String phone;
}