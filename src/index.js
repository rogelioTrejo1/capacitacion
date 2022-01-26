// Dependencias
const app = require('./app');
require('./config/keys');

function main() {
    
    app.listen(app.get('port'), () => {
        console.log("Server on port " + app.get('port'));
    });
}

if (require.main === module)
    main();
