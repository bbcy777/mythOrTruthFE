# Myth or Truth

A simple true of false game to test your knowledge (right now I have only a few environment, energy or health related category). 

Upon page load, one statement will present with true and false button. Once user click a button, answer page will show if they are correct and another button for next question.

After 10 questions, result page will show all questions user answered and number they were correct.

Once user log in, they can edit, delete and add new questions. 

Need 4 Route Pages:

- Home page: Random 10 questions are fetched when page load. Homepage shows one question at a time.
- Result page: Once user complete those 10 questions, result page will show each question with correct answer. 
- Login page: Once user login, they can edit questions(add, delete, update)

Components:
- Navbar gives login option. User can play without logged in.

- Question with True of False option.
- Answer with explaination. 
- Result components show user an overview of all questions and their answers

- user login and signup forms

- edit question should be a protected route. Authorized user can edit, post, delete questions.

<!-- - Login page to authroize user. -->

<!-- - User page shows history of answered questions. User can send those questions to a friend. -->
Future update:
- User can save results and pause at anytime(not only shown after 10 questions)