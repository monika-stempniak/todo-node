# todo-node

console todo app in node.js

```
cd src
```

### ADD command

```node
node app.js add --tag 'shopping' --title 'Buy milk'
```

### GET command

```node
node app.js get
```

### GET + filter command

```node
node app.js get --tag 'shopping'
```

```node
node app.js get --done true
```

### UPDATE command

```node
node app.js update --id 'MLh_l1oJu' --done true
```

### DELETE command

```node
node app.js delete --id 'MLh_l1oJu'
```

### UPLOAD command

```node
node app.js upload
```

### DOWNLOAD command

```node
node app.js download
```
