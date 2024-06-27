"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_1 = require("../swagger"); // Import swaggerSetup and swaggerSpec
(0, typeorm_1.createConnection)()
    .then(function (db) {
    console.log('Database connection established successfully.');
    var app = (0, express_1.default)();
    var port = 8000;
    app.use((0, cors_1.default)({
        origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
    }));
    app.use(express_1.default.json());
    // Swagger setup
    (0, swagger_1.swaggerSetup)(app);
    // API routes (assuming you have these defined)
    // Replace these with your actual route definitions
    app.get('/', function (req, res) {
        res.send('Hello World');
    });
    // Serve Swagger UI
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
    app.listen(port, function () {
        console.log("Server is running at http://localhost:".concat(port));
        console.log("Swagger UI is available at http://localhost:".concat(port, "/api-docs"));
    });
})
    .catch(function (error) {
    console.error('Error connecting to the database', error);
});
