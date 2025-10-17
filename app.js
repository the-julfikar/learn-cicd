const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.json({
        message: "Welcome to the learning of CI/CD with Github Actions...(:",
        version: "1.0.0",
        tools: "Github-Actions",
        dev: "Julfikar"
    });
});

module.exports = app;

if (require.main === module) {
    app.listen(3000,()=>{
        console.log('Server started on port 3000....');
    });
}