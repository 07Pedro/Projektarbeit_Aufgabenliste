const { v4: uuidv4 } = require('uuid')
const express = require('express');
const app = express();

// Von chatgpt generiert

let tasks = [
    {
        "id": "",
        "title": "Dokumentation aktualisieren",
        "description": "Die Projektdokumentation auf den neuesten Stand bringen.",
        "doneAt": "2024-05-20T10:00:00Z",
        "creator": "max.mustermann@example.com"
    },
    {
        "id": "",
        "title": "Meeting vorbereiten",
        "description": "Agenda und Präsentation für das Team-Meeting vorbereiten.",
        "doneAt": "2024-05-21T12:30:00Z",
        "creator": "julia.schmidt@example.com"
    },
    {
        "id": "",
        "title": "Code-Review durchführen",
        "description": "Den neuen Code im Repository überprüfen und Feedback geben.",
        "doneAt": "2024-05-22T08:15:00Z",
        "creator": "hans.müller@example.com"
    },
    {
        "id": "",
        "title": "Server-Updates einspielen",
        "description": "Wichtige Sicherheitsupdates auf den Servern installieren.",
        "doneAt": "2024-05-23T14:45:00Z",
        "creator": "anna.klein@example.com"
    },
    {
        "id": "",
        "title": "Kundenfeedback analysieren",
        "description": "Die Rückmeldungen der Kunden der letzten Woche auswerten.",
        "doneAt": "2024-05-24T09:30:00Z",
        "creator": "peter.meier@example.com"
    }
]

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