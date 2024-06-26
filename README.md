# Projektarbeit: Aufgabenliste von Petr Cerny

Entwickeln Sie mit den in diesem Modul behandelten Technologien ein funktionstüchtiges Backend, welches die nachfolgenden Anforderungen erfüllt.

## Hauptanforderungen

Das Backend stellt folgende HTTP-Endpunkte im JSON-Format bereit:

1.  `GET /tasks`-Endpunkt, der eine Liste aller Aufgaben zurück gibt.
    -   Der Endpunkt antwortet mit einem passenden Statuscode für Erfolge (200 - 299).
    -   Der Endpunkt antwortet mit einem gültigen JSON-Dokument, sowie dem passenden `Content-Type` Header.
    -   Die Antwort enthält eine aktuelle Liste aller Aufgaben.
2.  `POST /tasks`-Endpunkt, der eine neue Aufgabe erstellt und diesen zurück gibt.
    -   Der Endpunkt antwortet mit einem passenden Statuscode für Erfolge (200 - 299).
    -   Der Endpunkt antwortet mit einem gültigen JSON-Dokument, sowie dem passenden `Content-Type` Header.
    -   Die Antwort enthält die erstellte Aufgabe, inklusive einer im Backend generierten einzigartigen ID.
3.  `GET /tasks/{id}`-Endpunkt, der eine einzelne Aufgabe zurück gibt.
    -   Der Endpunkt antwortet mit einem passenden Statuscode für Erfolge (200 - 299) oder clientseitige Fehler (400 - 499), falls es die angegebene ID nicht gibt.
    -   Der Endpunkt antwortet mit einem gültigen JSON-Dokument, sowie dem passenden `Content-Type` Header.
    -   Die erfolgreiche Antwort enthält die aktuelle Aufgabe zur angegebenen ID.
4.  `PUT /tasks/{id}`-Endpunkt, der eine bestehende Aufgabe verändert und diesen zurück gibt.
    -   Der Endpunkt antwortet mit einem passenden Statuscode für Erfolge (200 - 299) oder clientseitige Fehler (400 - 499), falls es die angegebene ID nicht gibt.
    -   Der Endpunkt antwortet mit einem gültigen JSON-Dokument, sowie dem passenden `Content-Type` Header.
    -   Die Daten werden aktualisiert und die veränderte Aufgabe wird zurückgegeben.
5.  `DELETE /tasks/{id}`-Endpunkt, der einen bestehenden Aufgabe aus der Liste löscht.
    -   Der Endpunkt antwortet mit einem passenden Statuscode für Erfolge (200 - 299) oder clientseitige Fehler (400 - 499), falls es die angegebene ID nicht gibt.
    -   Der Endpunkt antwortet mit einem gültigen JSON-Dokument, sowie dem passenden `Content-Type` Header.
    -   Die Aufgabe wird gelöscht oder als erledigt markiert und zurückgegeben.

## Anforderungen an die Authentifizierung

Das Backend stellt zusätzlich folgende HTTP-Endpunkte bereit:

1.  `POST /login`-Endpunkt, der die Credentials entgegennimmt, überprüft und ein Token oder Cookie zurück gibt.
    -   Der Endpunkt antwortet mit einem passenden Statuscode für Erfolge (200 - 299) oder clientseitige Fehler (400 - 499), falls die Credentials ungültig sind.
    -   Der Endpunkt antwortet mit einem gültigen JSON-Dokument, sowie dem passenden `Content-Type` Header und gibt ein Cookie oder Token zurück.
    -   Als Credentials werden gültige E-Mail-Adressen mit dem Passwort `m295` akzeptiert.
2.  `GET /verify`-Endpunkt, der ein Token oder Cookie auf Gültigkeit überprüft und das Ergebnis zurück gibt.
    -   Der Endpunkt antwortet mit einem passenden Statuscode für Erfolge (200 - 299) oder clientseitige Fehler (400 - 499), falls es keine Session gibt.
    -   Der Endpunkt antwortet mit einem gültigen JSON-Dokument, sowie dem passenden `Content-Type` Header und gibt ein Cookie oder Token zurück.
    -   Der Endpunkt reflektiert den aktuellen Stand der Session.
3.  `DELETE /logout`-Endpunkt, der das mitgegeben Token oder Cookie als ungültig markiert.
    -   Der Endpunkt antwortet mit einem passenden Statuscode für Erfolge (200 - 299).
    -   Der Endpunkt gibt keinen Inhalt zurück.
    -   Der Endpunkt beendet die aktuelle Session des Benutzers.
4.  Das mitgegebene Token oder Cookie wird beim Aufruf aller bestehenden Endpunkte überprüft.
    -   Alle Endpunkte aus den Hauptanforderungen antworten mit einem passenden Statuscode für clientseitige Fehler (400 - 499), falls keine gültige Session vorliegt.
    -   Alle Endpunkte aus den Hauptanforderungen reflektieren den aktuellen Stand der Session.
    -   Bei einem Fehler wird eine passende Nachricht als JSON zurück gegeben.

## Zusätzliche Anforderungen

1.  Fehlerhafte Eingaben werden durch das Backend validiert.
    -   Abfragen an inexistente Endpunkte werden mit dem Statuscode 404 beantwortet.
    -   Aufgaben, die kein `title` werden beim Erstellen oder Verändern mit einem passenden clientseitigen Statuscode (400 - 499) abgewiesen.
    -   Für Fehler aufgrund eines fehlenden `title` werden mit einer Fehlermeldung im JSON-Format erklärt.
2.  Fehler und Ausnahmen werden im Code behandelt, abgefangen und geloggt.
    -   Fehler in Endpunkten werden behandelt und führen nicht zu einem Absturz.
    -   Serverseitige Fehler werden mit einem passenden serverseitigen Statuscode (500 - 599) beantwortet.
    -   Alle Anfragen werden auf der Konsole in einem sinnvollen Detailgrad (min. 1 Eintrag pro Endpunkt und für alle Fehler) geloggt.
3.  Das Projekt wurde sauber aufgesetzt und ist in einer sinnvollen Ordnerstruktur organisiert.
    -   Quellcode wird im Ordner `src` abgelegt. Im Hauptverzeichnis befindet sich eine `README.md`-Datei, die die Projektdokumentation enthält.
    -   Dateien sind erklärend benannt und in Ordner eingeordnet.
    -   Der Quellcode wird in mind. zwei Dateien aufgeteilt.
4.  Der Quellcode wird mit git versioniert.
    -   Als Nachweis ist ein Auszug aus der Historie von git im Hauptverzeichnis der Abgabe mit dem Namen `vcs.txt` erbracht.
    -   Pro Halbtag wird mind. ein Commit erstellt.
    -   Die Commit-Nachrichten sind aussagekräftig und erklären die Änderung.
5.  Coderichtlinien werden eingehalten und automatisch überprüft.
    -   Der Code genügt den von der Kursleitung festgelegten Kriterien für sauberen Code (2 Punkte).
    -   Es wurde geeignetes Werkzeug zur automatisierten Überprüfung von Coderichtlinien eingerichtet.
6.  Die Funktionsweise der Applikation wird mit Tests geprüft.
    -   Testfälle für die Hauptanforderungen wurden via Postman oder Hoppscotch geprüft.
    -   Testfälle für die Anforderungen an die Authentifizierung wurden via Postman oder Hoppscotch geprüft.
    -   Die Testfälle laufen fehlerfrei durch oder wurden sauber protokolliert indem die Postman oder Hoppscotch Anfragen in der Abgabe als `api.json` begelegt wurden.
7.  Das Projekt wurde sauber dokumentiert.
    -   Die Applikation verfügt über eine `README.md`-Datei mit Namen des Projektes und Autor.
    -   Die `README.md`-Datei beinhaltet die Dokumentation der Entwicklungsumgebung, in der erklärt wird, wie ein Entwickler das Projekt starten kann.
    -   Die Dokumentation der Endpunkte via OpenAPI-Swagger oder von Hand geschrieben in `api.md` wurde im Projekt mitgeliefert.

## Starten des Projekts
Um das Projekt erfolgreich zu starten, braucht man node. Dies kann man z.B. als Docker-Container herunterladen und nutzen. \
Wenn der Container läuft, geht man im Terminal zum gewünsten File. \
Dieses kann nun Gestartet werden indem man `node <filename.js>` ins Terminal tippt. \
Mit z.B. Postman kann man nun die verschiedenen requests erstellen und das Programm testen.

## Achtung 
Die ID's bei den Tasks werden bei jedem start neu generiert. Wenn möglich die js files nur einmal starten und laufen lassen.


## Swagger
Ich habe mich dazu entschieden die SwaggerAPI nur für `tasks` zu erstellen. Dies habe ich getan, da es nur noch eine Wiederholübung währe da ich genau das gleiche für die login.js Datei machen müsste. \
Um zum Swagger-UI zu gelangen, kann man die Datei OpenAPI_swagger.js ausführen und auf `http://localhost:3002/swagger-ui/` das generierte UI vorfinden.

## Schlusswort
Ich habe die Hauptanforderungen und Authentifizierung in eigene Files aufgeteilt, was ich nicht denke das es so vorgesehen war. Ich könnte alles ins gleiche file packen aber das würde nicht so gut aussehen und es würde weniger struktur in den Dateien geben. \
Ansonsten denke ich habe ich keine so schlechte arbeit abgeliefert.
