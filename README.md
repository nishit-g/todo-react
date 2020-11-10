# Objectives of the project
1. Add Todo - Done
2. Remove Todo - Done
3. Modify Todo - Done
4. State Management - Done


## Step A - Project Setup

### Step 1 - Clone these repos in a directory 
``` 
git clone https://github.com/nishit-g/todo-react
git clone https://github.com/nishit-g/fake-server.git

```

### Step 2 - Change to project directory
```
cd todo-react
```

### Step 3 - Run npm install to install dependencies
```
npm install
```

# Note : Don't run the project yet, first start the local server for data.


## Step B - Run the local server

### Step 4 - Move to fake-server repo directory
(this might be different for you depending on where you cloned the repo)
```
cd ../fake-server   
```

### Step 5 - Run npm install to install dependencies
```
npm install
```

### Step 6 - Run the server
```
npm run json:server
```
(this will start local server at port 8000 you can check it in your browser)

## Run the project
### Step 7 - Move back 'todo-react' repo and make sure the server is still running
```
npm start
```

(Project will run at port 3000)
