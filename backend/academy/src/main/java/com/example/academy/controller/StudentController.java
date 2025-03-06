package com.example.academy.controller;
import com.example.academy.model.Student;
import com.example.academy.model.StudentRegistrationRequest;
import com.example.academy.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/students")
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
        return ResponseEntity.ok("Student zarejestrowany pomyślnie. Możesz się teraz zalogować.");
    }
}