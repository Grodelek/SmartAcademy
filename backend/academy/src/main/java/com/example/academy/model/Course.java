package com.example.academy.model;

import jakarta.persistence.*;

@Entity
@Table(name = "course")
public class Course {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "course_name", nullable = false, unique = true)
  private String courseName;
  @Column(name = "course_password", nullable = false)
  private String coursePassword;
  @Column(name = "ects", nullable = false)
  private int ects;

  public Course() {
  }

  public Course(String courseName, String coursePassword, int ects) {
    this.courseName = courseName;
    this.coursePassword = coursePassword;
    this.ects = ects;
  }

  public String getCourseName() {
    return courseName;
  }

  public void setCourseName(String courseName) {
    this.courseName = courseName;
  }

  public String getCoursePassword() {
    return coursePassword;
  }

  public void setCoursePassword(String coursePassword) {
    this.coursePassword = coursePassword;
  }

  public int getEcts() {
    return ects;
  }

  public void setEcts(int ects) {
    this.ects = ects;
  }
}
