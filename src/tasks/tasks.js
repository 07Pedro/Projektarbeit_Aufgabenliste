const { v4: uuidv4 } = require('uuid')
const express = require('express')
const app = express()

// Von chatgpt generiert
const tasks = require('./data.json')

const timeNow = new Date().toLocaleString('de-CH')

tasks.forEach(aufgabe => {
  aufgabe.id = uuidv4()
  aufgabe.doneAt = timeNow
})

// chatgpt generiert
const oneTask = {
  id: uuidv4(),
  title: 'Marketingkampagne planen',
  description: 'Strategie und Materialien für die neue Marketingkampagne entwickeln.',
  doneAt: timeNow,
  creator: 'sarah.berger@example.com'
}

app.get('/tasks', (request, response) => {
  if (tasks != null) {
    response.setHeader('Content-Type', 'application/json')
    response.send(tasks)
  } else {
    return response.status(204)
  }
})

app.post('/tasks', (request, response) => {
  tasks.push(oneTask)
  if (tasks != null) {
    response.setHeader('Content-Type', 'application/json')
    response.send(tasks)
  } else {
    return response.status(204)
  }
})

app.get('/tasks/:id', (request, response) => {
  const id = request.params.id
  const task = tasks.find(task => task.id === id)

  if (id != null) {
    response.setHeader('Content-Type', 'application/json')
    response.send(task)
  } else {
    return response.status(404)
  }
})

app.put('/tasks/:id', (request, response) => {
  const id = request.params.id
  const task = tasks.find(task => task.id === id)

  // der indexOf teil ist von https://www.shecodes.io/athena/53681-how-to-replace-an-item-in-an-array-in-javascript
  if (id != null) {
    const index = tasks.indexOf(task)
    tasks[index] = oneTask
    tasks[index].doneAt = new Date().toLocaleString('de-CH')
    response.setHeader('Content-Type', 'application/json')
    response.send(tasks)
  } else {
    return response.status(404)
  }
})

app.delete('/tasks/:id', (request, response) => {
  const id = request.params.id

  if (id != null) {
    const task = tasks.find(task => task.id === id)
    const index = tasks.indexOf(task)
    tasks.splice(index, 1)
    response.setHeader('Content-Type', 'application/json')
    response.send(tasks)
  } else {
    return response.status(404)
  }
})

app.listen(3000)
