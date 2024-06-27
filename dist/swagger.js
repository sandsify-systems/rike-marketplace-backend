"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSetup = exports.swaggerSpec = void 0;
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var path = __importStar(require("path")); // Ensure path is imported for resolving file paths
var swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Welcome to Rike-MarketPlace Node TypeScript API with TypeORM and Express',
        version: '1.0.0',
        description: 'API documentation for managing products, categories, users, customers, orders, and transactions.',
    },
    servers: [
        {
            url: 'https://rike-marketplace-backend.onrender.com', // Replace with your server URL
            description: 'Development server',
        },
    ],
};
// Adjust paths to include API routes correctly
var options = {
    swaggerDefinition: swaggerDefinition,
    apis: [path.resolve(__dirname, './src/controllers/*.ts')], // Absolute path to the API routes folder
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(options);
var swaggerSetup = function (app) {
    app.get('/swagger.json', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(exports.swaggerSpec);
    });
};
exports.swaggerSetup = swaggerSetup;
