# BookStore project

# Install node and npm

## Linux

    sudo apt update
    sudo apt install nodejs npm\

## macOS

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    brew install node

## Windows

- Download the Windows installer for Node.js from the official Node.js website at https://nodejs.org/.
- Run the downloaded installer (.msi file).
- Follow the installation wizard prompts, selecting the desired options.
- After the installation is complete, open a command prompt or PowerShell window.

#### Verify the installation by running the following commands:

    node --version
    npm --version

# Required installations

## Install express

    npm install express

## Install sqlite3

    npm install sqlite3

## install cors

    npm install cors

## Install body-parser

    npm install body-parser

###### Make sure you have Node.js and npm installed on your system before running these commands.

# Run

## Creater .db file and run

    sqlite3 bookstore.db

## Run the scripts

#### While you are in the sqlite shell

    .read create.sql

## To run the server

    node server.js

#### The page can be found in `http://localhost:3000/?
