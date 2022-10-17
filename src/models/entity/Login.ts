import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class Login {
  @PrimaryColumn()
  id: Number

  @Column({ name: "login", type: "varchar" })
  login: String

  @Column({ name: "password", type: "varchar" })
  password: String
}
