package org.project.todolist.controller;

import org.project.todolist.entity.Task;
import org.project.todolist.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/task")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getAll(){
        return taskService.findAll();
    }

    @PostMapping("/add")
    public Task addTask(@RequestBody Task task){
        return taskService.save(task);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id,@RequestBody Task updatedTask){
        Optional<Task> optionalTask = taskService.findById(id);
        if(optionalTask.isEmpty()){
           return ResponseEntity.notFound().build();
        }
        Task taskToUpdate = optionalTask.get();
        taskToUpdate.setName(updatedTask.getName());
        taskToUpdate.setDescription(updatedTask.getDescription());
        Task task = taskService.save(taskToUpdate);
        return ResponseEntity.ok(task);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTask(@PathVariable Long id){
        Optional<Task> optionalTask = taskService.findById(id);
        if(optionalTask.isPresent()){
            Task taskToDelete = optionalTask.get();
            taskService.delete(taskToDelete);
        }
    }
}
