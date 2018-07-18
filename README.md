# todo-fancy

to see this project visit https://todo.bramaprasetyo.co/


| Route Customer/user | Http   | Description                       | Parameter                              |
|---------------------|--------|-----------------------------------|----------------------------------------|
| /customers          | GET    | get all data customers            |                                        |
| /signup             | POST   | add new customer                  | fullname,username,email,password,phone |
| /customers/:id      | GET    | get one customer                  |                                        |
| /customers/:id      | PUT    | edit one customer                 |                                        |
| /signin             | POST   | login for customer                | email,password                         |
| /customers/:id      | DELETE | Delete one customer               |                                        |
| /loginwithfb        | POST   | login with facebook for customer  |                                        |


| Route Todo          | Http   | Description       | Parameter |
|---------------------|--------|-------------------|-----------|
| /content            | POST   | post new Todo     | content   |
| /content/show       | GET    | get Todo one user |           |
| /content/all        | GET    | get all Todo      |           |
| /content/edit/:id   | PUT    | edit one Todo     | content   |
| /content/delete/:id | DELETE | delete one Todo   |           |
