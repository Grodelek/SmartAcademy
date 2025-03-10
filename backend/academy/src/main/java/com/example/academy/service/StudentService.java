package com.example.academy.service;
import com.example.academy.model.Student;
import com.example.academy.model.StudentRegistrationRequest;
import com.example.academy.model.User;
import com.example.academy.repository.StudentRepository;
import com.example.academy.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    private final PasswordEncoder passwordEncoder;
    private  final UserRepository userRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository, PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.studentRepository = studentRepository;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Transactional
    public Student addStudent(StudentRegistrationRequest request){
        if (request.getName() == null || request.getName().trim().isEmpty()) {
            throw new IllegalArgumentException("Student name cannot be null or empty!");
        }
        Integer maxIndex = studentRepository.getMaxIndex();
        int newIndex = (maxIndex == null) ? 1 : maxIndex + 1;
        Student student = new Student();
        student.setName(request.getName());
        student.setSurname(request.getSurname());
        student.setAge(request.getAge());
        student.setIndex(newIndex);
        studentRepository.save(student);
        User userStudent = new User();
        userStudent.setUsername(student.getIndexStr());
        userStudent.setPassword(passwordEncoder.encode(request.getPassword()));
        userStudent.setRoles("STUDENT");
        userRepository.save(userStudent);
        return student;
    }

    public Optional<Student> getStudentById(Long id) {
        Optional<Student> student = studentRepository.findById(id);
        return Optional.ofNullable(student.orElseThrow(() -> new NoSuchElementException("No such Student")));
    }
}