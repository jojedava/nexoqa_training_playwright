# nexoQA training playwright

# Abouts

- Forked client and server from git@github.com:codyseibert/tab-tracker.git

## Tab Tracker

A web application for keeping track songs

## Setup

You need to have Node Js installed: [https://nodejs.org/en/](https://nodejs.org/en/)

You must at least have **NODE version latest**

To navigate the SQLite DB, you can use an application such as [THIS](https://sqlitebrowser.org/dl/) one

### Install Playwright

```
npm init playwright@latest
```

### Start Server and Client

```bash
docker-compose up -d
```

### Stope Server and Client

```bash
docker-compose down
```

### Start only Client

```bash
docker-compose -f docker-compose-client.yaml up -d
```

### Stop only Client

```bash
docker-compose -f docker-compose-client.yaml down
```

### Exercises

[Playwright API docs](https://playwright.dev/docs/api/class-playwright)

1. **Implement the following scenarios**
   - Add a new song and validate is present on the home page
   - Edit a new song and validate the changes are present on the home page
   - Search any song
     - Validate the case when the song has been created
     - Validate the case when the song has not been created
   - Implement the user registration
   - Validate the user can login into the app
   - The users can create a bookmark
   - The users can check the songs' history
2. **Create helper functions to reuse flows**
   - Create command to complete the registration flow
   - Create command to complete the login flow
   - Create command to add a new song
   - Create command to edit a new song
   - Create command to search a new song
3. **Implement an interception to validate the UI without backend enabled** `<br>`**Starting only the front-end (Client)**, implement a router to return your own reponses to validate the UI behaviours.
   Implemente the following scenarios:
   - Add a new song and validate is present on the home page
   - Edit a new song and validate the changes are present on the home page
   - Implement the user registration
   - Validate the user can login into the app
