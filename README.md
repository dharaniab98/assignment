# assignment

A simple nodejs backend service using typescript, sequlize ,jwt , eslint and prettier.

Note :: All the api end points are jwt authorised.

Setting the config details:

set the credentials for sql here with your local credentials
nano $assignment/src/config/config.ts
username: '',
password: '',
database: '',
host: 'localhost',
port: '3306',

steps To run in local

1. clone the project
2. $npm install #To install all the required modules
3. $npm run seed #This will create the required tables
4. $npm start

To run docker container

step1: change the db credentials has given below
username: 'app_user',
password: 'password',
database: 'myapp',
host: 'mysql1',
port: '3306',

API's

1 create a company

post : http://localhost:8080/api/company/
headers :
{
Content-Type: application/json
authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXBpX2FjZXNzX3Rva2VuIiwiaWF0IjoxNjQxODgzNDI0NDUwLCJleHAiOjE2NDE4ODQwMjkyNTB9.KobYpjPLCgYOvMqhHbBn6r3ZixQtOrwZ0YuRijeDmBA
}
body:
{
"companyName":"mindGames",
"companyCeo":"Kumar3",
"companyAddress":"Hyderabad BanjaraHills"

}

2. search company with name

GET: http://localhost:8080/api/company/search/<search string>
headers : {
Content-Type: application/json
authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXBpX2FjZXNzX3Rva2VuIiwiaWF0IjoxNjQxODgzNDI0NDUwLCJleHAiOjE2NDE4ODQwMjkyNTB9.KobYpjPLCgYOvMqhHbBn6r3ZixQtOrwZ0YuRijeDmBA
}

Note : Note down the companyid we can use it below

3. search company by id

GET: http://localhost:8080/api/company/<uuid of company>
Content-Type: application/json
authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXBpX2FjZXNzX3Rva2VuIiwiaWF0IjoxNjQxODgzNDI0NDUwLCJleHAiOjE2NDE4ODQwMjkyNTB9.KobYpjPLCgYOvMqhHbBn6r3ZixQtOrwZ0YuRijeDmBA
}

4 create a team
POST: http://localhost:8080/api/team/
headers:
{
Content-Type: application/json
authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXBpX2FjZXNzX3Rva2VuIiwiaWF0IjoxNjQxODgzNDI0NDUwLCJleHAiOjE2NDE4ODQwMjkyNTB9.KobYpjPLCgYOvMqhHbBn6r3ZixQtOrwZ0YuRijeDmBA
}
body:
{
"companyId":<use the existing companyid>,
"teamLeadName":"Rameshwar"

}

5 GET ALL teams along with company

GET: http://localhost:8080/api/team/

headers:
{
Content-Type: application/json
authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXBpX2FjZXNzX3Rva2VuIiwiaWF0IjoxNjQxODgzNDI0NDUwLCJleHAiOjE2NDE4ODQwMjkyNTB9.KobYpjPLCgYOvMqhHbBn6r3ZixQtOrwZ0YuRijeDmBA
}

Note: we can run in docker also with the help of docker-compose
