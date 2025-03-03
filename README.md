# SmartAcademy

SmartAcademy is a comprehensive web application designed to manage students and academic operations effectively. The system provides functionality for managing student records, authentication via JWT (JSON Web Tokens), and secure role-based access to different parts of the application.

---

## Features

### 🎓 Student Management
- Add, edit, delete, and view student records.
- Each student has associated fields like:
  - Name
  - Surname
  - Index
  - Age

### 🔐 Authentication & Authorization
- Secure login system using JWT tokens.
- Role-based access control:
  - **Admin**: Full access to manage students and system configurations.
  - **Teacher**: Access to managing Courses and Grades.
  - **Student**: Managing own courses and grades. 

### 🛠️ API Endpoints
- RESTful API for seamless integration with the frontend.
- Well-documented endpoints for CRUD operations.

### 🗄️ Database Integration
- Uses MySQL as the primary database.
- Efficient data models built with JPA for seamless interaction between the application and the database.

### 🌐 Modern Tech Stack
- **Backend**: Spring Boot
- **Database**: MySQL
- **Frontend**: React (example provided)
- **Security**: Spring Security with JWT.

---

## Installation

### Prerequisites
- **Java** 17+
- **Maven**
- **MySQL** 8+
- **Node.js** and **npm** (for React frontend)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Grodelek/SmartAcademy.git
   cd SmartAcademy

2.Configure the database: Update the application.properties file in the src/main/resources directory:
   ```bash

spring.datasource.url=jdbc:mysql://localhost:3306/smart_academy
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
spring.jpa.hibernate.ddl-auto=update
```
  
3. Build and run the backend:
```
mvn clean install
mvn spring-boot:run
```
The backend will run at http://localhost:8080.

4. Frontend running
```
npm install
npm start
  ```
Access the frontend at http://localhost:3000.

5.Go to
```
http://localhost:8080/swagger-ui/index.html
```
for Swagger UI endpoints
