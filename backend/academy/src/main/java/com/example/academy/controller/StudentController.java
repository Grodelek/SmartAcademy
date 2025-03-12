package com.example.academy.controller;

import com.example.academy.model.Student;
import com.example.academy.model.StudentRegistrationRequest;
import com.example.academy.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {
  private StudentService studentService;

  @Autowired
  public StudentController(StudentService studentService) {
    this.studentService = studentService;
  }

  @GetMapping("/all")
  public List<Student> getAllStudents() {
    return studentService.getAllStudents();
  }

  @PostMapping("/add")
  public ResponseEntity<?> registerStudent(@RequestBody StudentRegistrationRequest request) {
    Student student = studentService.addStudent(request);
    return ResponseEntity.ok("Student registrated successfully, you can now log in");
  }

  @GetMapping("/{id}")
  public ResponseEntity<Student> getStudent(@PathVariable Long id) {
    try {
      Optional<Student> optionalStudent = studentService.getStudentById(id);
      if (optionalStudent.isPresent()) {
        Student student = optionalStudent.get();
        return ResponseEntity.ok(student);
      } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
      }
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  @PutMapping("/update/{id}")
  public ResponseEntity<Student> updateStudent(@RequestBody StudentRegistrationRequest request, @PathVariable Long id) {
    try {
      Optional<Student> optionalStudent = studentService.getStudentById(id);
      if (optionalStudent.isPresent()) {
        Student student = optionalStudent.get();
        student.setName(request.getName());
        student.setSurname(request.getSurname());
        student.setAge(request.getAge());
        studentService.saveStudent(student);
        return ResponseEntity.ok(student);
      } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
      }
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
}
