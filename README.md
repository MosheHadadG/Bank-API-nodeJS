# Bank-API-nodeJS

Api Bank 

GET All users:
(Method: GET)

https://bank-api-back.herokuapp.com/admin/users

Delete User :
(Method: DELETE)

https://bank-api-back.herokuapp.com/admin/users/*UserID*

Create New User:
(Method: POST)

https://bank-api-back.herokuapp.com/admin/users/ , NewUser

Example:
NewUser = {cash: 400, credit: 800}

Withdraw money from the user:
(Method: PUT)

https://bank-api-back.herokuapp.com/admin/withdraw ,withdrawDetail

Example: 
withdrawDetail = {id: '13W3wwwd3', cash: 400}

transfer money from one user to another:
(Method: PUT)

https://bank-api-back.herokuapp.com/admin/transfer , transferDetail

Example: 
transferDetail  = {idSend: '13W3wwwd3', idGet: 'e3ref3r34' cash: 400}

deposit cash to a user:
(Method: PUT)

https://bank-api-back.herokuapp.com/admin/deposit , depositDetail

Example: 
depositDetail  = {id: '13W3wwwd3', cash: 400}

withdraw money from the user:
(Method: PUT)

https://bank-api-back.herokuapp.com/admin/withdraw , withdrawDetail

Example: 
withdrawDetail  = {id: '13W3wwwd3', cash: 400}

Can update a users credit:
(Method: PUT)

https://bank-api-back.herokuapp.com/admin/credit , creditDetail

Example: 
creditDetail  = {id: '13W3wwwd3', credit: 400}


