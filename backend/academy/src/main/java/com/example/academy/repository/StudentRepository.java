package com.example.academy.repository;

import com.example.academy.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    @Query("SELECT MAX(s.index) FROM Student s")
    Integer getMaxIndex();
}