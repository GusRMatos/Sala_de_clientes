package com.Sala_de_Reunioes.SaladeReuniao.Repository;

import com.Sala_de_Reunioes.SaladeReuniao.Model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {

}
