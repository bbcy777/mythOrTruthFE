# Myth or Truth Frontend

backend repo: https://github.com/bbcy777/mythOrTruthBE.git

render link: https://mythortruth.onrender.com/
work on: edit/add not working for now

A simple true or false game to test your knowledge (right now I have only a few environment, energy or health related category). 

Upon page load, one statement will present with true and false button. Once user click a button, answer page will show if they are correct and another button for next question. Registered user can add question(s) to their favorite list in answer page.

After 10 questions, result page will show all questions user answered and number they were correct.

If user log in, they can see their favorite questions list, edit, delete and add new questions. 

4 Route Pages:

- Home page: Random 10 questions are fetched when page load. Home page controls Answer/Question/Result components.
  ![image](https://github.com/user-attachments/assets/1674502d-9cdd-4e77-81d1-26e67887f211)

- Login/singup form that authorize user.
- User Dashboard: when user login, they can be route back to quiz, see favorite list, edit/delete/add questions.
![image](https://github.com/user-attachments/assets/b5533db0-0582-495a-a9a2-d46f821a79d6)

- Edit question page, before I build dashboard, all question CRUD was under this page.
- About page.

Components:
- Navbar: normally only shows about link and option to log in. Logged in user has dashboard/edit/logout link. 

- Question with True of False option.
- Answer with explaination, registered user has option to add question to favorite list.
  ![image](https://github.com/user-attachments/assets/5d712042-96df-4b9c-9bad-c4872268f0ed)

- Result component shows user an overview of 10 questions they took.
![image](https://github.com/user-attachments/assets/a0818253-7451-4773-80f3-a9a59cbb985e)

- user login and signup forms

- edit question should be a protected route. Authorized user can edit, post, delete questions.


Future update:
- User can save results and pause at anytime(not only shown after 10 questions)
- Dashboard should show history of all questions
- Some interaction with other user (send to a friend etc.)
- If user is separated to be admin, need another component to flag question form to suggest edit/add

source: [icons](https://www.flaticon.com/)
