# Nakji Todo App

## Stack

- Node.js, express
- MySQL
- React
- SCSS

## Directory Structure

```
client/ # react app
server/ # express app
.gitignore
```

## REST API

- `GET /todos` - show all todos
- `POST /todo` - create a new todo
- `PATCH /todo/:todoId` - edit a specific todo
- `DELETE /todo/:todoId` - remove a specific todo

## Start Project

```
git clone [url]
cd server/
npm i
npm start # PORT NUM: 8008
cd ../client
npm i
npm start # PORT NUM: 3000
```