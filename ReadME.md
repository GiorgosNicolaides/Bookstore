# BookStore project

The purpose of this project is to implement a frontend and a backend that allow the user to manage a remote database containing books.

Frontend:
The presentation and management of all functionalities will be done using a single "index.html" page, which will send data through HTTP requests to the API implemented by the server.

The page will support two operations:

Registering a new book:
The user will be able to enter data (author, title, genre, price) into four input fields. The genre field will be a dropdown list with pre-defined options. The system will perform appropriate checks to ensure that the user has provided valid input, and will notify the user of any necessary corrections.

Upon clicking a button, an HTTP request will be sent to the corresponding endpoint of the API implemented in the server's backend to register the book. The HTTP response will inform the user about the success or failure of the operation.

Searching for a book using a keyword:
The user can enter a keyword in a textbox, and upon clicking a button, an HTTP request will be sent to the respective endpoint on the server. The webpage will display the search results or notify the user if no books were found.

Backend:
The backend consists of a RESTful API on the server, allowing the management of a database where the books are stored. The API consists of two endpoints:

Endpoint 1:
URL: http://<yourdomain>:<yourport>/books/{keyword}
Method: GET
Input: The keyword as part of the URL
Output: A JSON containing the details of the book(s) that match the keyword.

Endpoint 2:
URL: http://<yourdomain>:<yourport>/books/
Method: POST
Input: A JSON describing the details of the book to be registered.
Output: A JSON message indicating whether the operation was successful or not.

# Install sqlite3 
## Linux 

### Ubuntu/Debian: Open the terminal and run the following command:

    sudo apt-get update
    sudo apt-get install sqlite3

### Fedora/RHEL: Open the terminal and run the following command:


    sudo dnf install sqlite

## macOS

### macOS comes with SQLite pre-installed. Open the Terminal and run the following command to check the SQLite version:


    sqlite3 --version

#### If SQLite is not installed or you want to upgrade it, you can use a package manager like Homebrew. Open the Terminal and run the following command to install Homebrew if you don't have it already:

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

#### Once Homebrew is installed, run the following command to install SQLite:

    brew install sqlite

## Windows 
-   Download the precompiled binaries for SQLite from the official website: https://www.sqlite.org/download.html
-   Choose the appropriate "Precompiled Binaries for Windows" package based on your system architecture (32-bit or 64-bit).
-   Extract the downloaded package.
-   Open the Command Prompt and navigate to the directory where you extracted the SQLite files.

#### Run the following command to check the SQLite version:
    sqlite3 --version

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


## Run the scripts


## To run the server

    node server.js

#### The page can be found in `http://localhost:3000/?
