import java.sql.Date;
import java.util.Set;

public class Pet {
  private Long id;

  Set<User> adoptedBy;
  Set<User> solicitedBy; 

  private String name;
  private String port;
  private String type;
  private String sex;
  private Date birthDate;
}