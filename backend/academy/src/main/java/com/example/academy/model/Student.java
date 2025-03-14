package com.example.academy.model;

import jakarta.persistence.*;

@Entity
@Table(name="students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", nullable = true)
    private String name;
    @Column(name = "surname", nullable = false)
    private String surname;
    @Column(name = "index_number", nullable = false, unique = true)
    private int index;
    @Column(name = "age", nullable = false)
    private int age;

    public Student() {
    }

    public Student(String name, String surname, int index, int age) {
        this.name = name;
        this.surname = surname;
        this.index = index;
        this.age = age;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public int getIndex() {
        return index;
    }
    public String getIndexStr(){
        return String.valueOf(index);
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}