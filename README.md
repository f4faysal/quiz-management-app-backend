# fQuiz Backend Documentation

## Overview

**fQuiz Backend** serves as the server-side component for the fQuiz Quiz Management App. It is built using Express, Typescript, PostgreSQL, and Prisma, providing a robust foundation for managing quizzes, user authentication, and data storage.

## Technologies Used

- **Express:** A minimal and flexible Node.js web application framework.
- **Typescript:** Adds static typing to JavaScript for improved code quality.
- **PostgreSQL:** A powerful, open-source relational database system.
- **Prisma:** Modern database access toolkit with an ORM layer for seamless database interactions.

## Setup

1. Clone the repository:

   ```bash
   git clone <backend-repo-url>
   ```

2. Install dependencies:

   ```bash
   cd fQuiz-backend
   npm yarn
   ```

3. Configure environment variables:

   Create a `.env` file in the root directory and set the following variables:

   ```env
   PORT=5000
   DATABASE_URL=postgresql://user:password@localhost:5432/fquiz
   ```

4. Run the server:

   ```bash
   yarn dev
   ```

   The server will be running at `http://localhost:3001`.

## Endpoints

### Authentication

- **Sign Up:**
  - Endpoint: `/api/auth/signup`
  - Method: `POST`
  - Request Body:
    ```json
    {
      "username": "example",
      "password": "securepassword",
      "role": "performer"
    }
    ```
- **Log In:**
  - Endpoint: `/api/auth/login`
  - Method: `POST`
  - Request Body:
    ```json
    {
      "username": "example",
      "password": "securepassword"
    }
    ```

### Quiz Management

- **Get All Quizzes:**
  - Endpoint: `/api/quizzes`
  - Method: `GET`

- **Get Quiz by ID:**
  - Endpoint: `/api/quizzes/:quizId`
  - Method: `GET`

- **Create Quiz:**
  - Endpoint: `/api/quizzes`
  - Method: `POST`
  - Request Body:
    ```json
    {
      "title": "Example Quiz",
      "category": "frontend",
      "questions": [
        {
          "text": "What is fQuiz?",
          "type": "multiple-choice",
          "options": ["A", "B", "C"],
          "correctAnswer": "A"
        },
        // Additional questions
      ]
    }
    ```

- **Update Quiz:**
  - Endpoint: `/api/quizzes/:quizId`
  - Method: `PUT`
  - Request Body:
    ```json
    {
      "title": "Updated Quiz Title",
      "category": "fullstack",
      // Additional updated fields
    }
    ```

- **Delete Quiz:**
  - Endpoint: `/api/quizzes/:quizId`
  - Method: `DELETE`

### Quiz Taking

- **Get Random Quiz Questions:**
  - Endpoint: `/api/quiz/:category/questions`
  - Method: `GET`

- **Submit Quiz Answers:**
  - Endpoint: `/api/quiz/submit`
  - Method: `POST`
  - Request Body:
    ```json
    {
      "quizId": "exampleQuizId",
      "answers": [
        { "questionId": "q1", "selectedOption": "A" },
        // Additional answers
      ]
    }
    ```

- **Get User Scores:**
  - Endpoint: `/api/scores`
  - Method: `GET`

## Error Handling

The backend includes robust error handling mechanisms, providing informative error messages for a smooth user experience.

## Database Schema

- **User Table:**
  - id (Primary Key)
  - username
  - password (hashed)
  - role (admin or performer)

- **Quiz Table:**
  - id (Primary Key)
  - title
  - category
  - questions (JSONB)

- **Score Table:**
  - id (Primary Key)
  - userId (Foreign Key)
  - quizId (Foreign Key)
  - score

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License - [Details](../LICENSE)

Feel free to open issues for feature requests, bug reports, or general feedback. Happy coding!
