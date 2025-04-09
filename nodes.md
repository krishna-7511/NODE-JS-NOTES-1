node js:
javascript runtime environment 

it is used for server side programming

node js is not a language, library or framework

node -v to verify node is installed are not


Create a New Node.js File
Use the following command to create a new file:


echo console.log("Hello, Node.js!"); > app.js


This command creates a file named app.js and writes console.log("Hello, Node.js!"); inside it.

to run it on cmd: node filename(app.js)

enter node  in cli

enter pocess

enter process.version

enter process.release

enter process.cwd(); current working directory

enter process.cwd();   current working directory

./ means same directory


1. Process Information
process.pid → Returns the process ID.
process.version → Returns the Node.js version.
process.platform → Returns the operating system platform (win32, linux, darwin).
process.arch → Returns the processor architecture (x64, arm, etc.).
process.cwd() → Returns the current working directory.


Instead of process.version, run the following command in cmd:

node -v

node --version

node

after run above process information


Command-line Arguments (process.argv)
process.argv provides an array of command-line arguments passed when running the script.
The first element is the Node.js binary path, the second is the script path, and the rest are user-provided arguments.
Example:

console.log("Command-line Arguments:", process.argv);

in nodejs file enter node app.js hello bye

again   C:\NODE JS NOTES 1>node app.js hello bye krishna apnacollege 1


to install npm on :npm install figlet  

Npm official site : https://www.npmjs.com/

dir Lists all files in windows for mac ls command

suppose if node modules have been deleted and we will retrive with the help of pacakge.json

simply type: npm install (node modules have been installed automtically)

//or follow this approach

suppose node modules have been deleted, go to the package.son check which dependencies are needed

after that cmd enter : npm install, in which folder do you want to install



npm init :package installed on MyProject

look at last one import modules two types