# vulnerable-api

It`s a simple API to study XSS tests

## How to install

`npm install`

`node index.js`

## How to use

Create comment with payload

`curl --location 'http://localhost:3000/api/comment' \
--header 'Content-Type: application/json' \
--data '{
    "comment": "<b>Insert TAG HTML</b>"
}'`

<br>

Return comment with payload

`curl --location 'http://localhost:3000/api/comment/xss'`

<br>

With this feedback, you can display it on an HTML page to test it out