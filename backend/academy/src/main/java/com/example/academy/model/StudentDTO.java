package com.example.academy.model;

public class StudentDTO {
    private Long id;
    private String name;
    private String surname;
    private int age;
    private int index;

    public StudentDTO(Long id, String name, String surname,int age, int index) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.index = index;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
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

    public void setIndex(int index) {
        this.index = index;
    }
}
