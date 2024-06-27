"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSetup = exports.swaggerSpec = void 0;
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Welcome to Rike-MarketPlace Node TypeScript API with TypeORM and Express',
        version: '1.0.0',
        description: 'API documentation for managing products, categories, users, customers, orders, and transactions.',
    },
    servers: [
        {
            url: 'http://localhost:8000', // Replace with your server URL
            description: 'Development server',
        },
    ],
};
var options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['./src/controllers/*.ts'], // Path to the API routes folder
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(options);
var swaggerSetup = function (app) {
    app.get('/swagger.json', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(exports.swaggerSpec);
    });
};
exports.swaggerSetup = swaggerSetup;
