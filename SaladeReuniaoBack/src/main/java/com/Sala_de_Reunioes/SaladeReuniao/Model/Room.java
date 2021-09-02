package com.Sala_de_Reunioes.SaladeReuniao.Model;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@Builder
@Entity
@Getter
@NoArgsConstructor
@Setter
@Table(name = "mattingroom")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column (nullable = false)
    private String name;

    @Column (nullable = false)
    private String date;

    @Column (nullable = false)
    private String startHour;

    @Column (nullable = false)
    private String endHour;
}
