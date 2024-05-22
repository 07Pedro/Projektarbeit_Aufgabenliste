const { v4: uuidv4 } = require('uuid')
const express = require('express');
const app = express();

// Von chatgpt generiert
const tasks = require('./data.json');

tasks.forEach(aufgabe => {
    aufgabe.id = uuidv4()
})

app.get('/tasks', (request, response) => {

    if (tasks != null) {
        response.setHeader('Content-Type', 'text/json');
        response.send(tasks);
    } else {
        return response.status(204);
    }
    
});

// chatgpt generiert
let oneTask = {
    "id": uuidv4(),
    "title": "Marketingkampagne planen",
    "description": "Strategie und Materialien für die neue Marketingkampagne entwickeln.",
    "doneAt": "2024-05-25T11:00:00Z",
    "creator": "sarah.berger@example.com"
}

app.post('/tasks', (request, response) => {
    tasks.push(oneTask)
    if (tasks != null) {
        response.setHeader('Content-Type', 'text/json');
        response.send(tasks);
    } else {
        return response.status(204);
    }
})



app.listen(3000)