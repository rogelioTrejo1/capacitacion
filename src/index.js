// Dependencias
const app = require('./app');
const { newConnection } = require('./config/database');

async function main() {

    await newConnection();
    
    app.listen(app.get('port'), () => {
        console.log("Server on port " + app.get('port'));
    });
}

if (require.main === module)
    main();
