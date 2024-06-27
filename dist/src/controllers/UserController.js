"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var UserService_1 = require("../service/UserService");
var userService = new UserService_1.UserService();
var UserController = /** @class */ (function () {
    function UserController() {
    }
    /**
     * @swagger
     * tags:
     *   name: Users
     *   description: API endpoints for managing users.
     */
    /**
     * @swagger
     * /users:
     *   get:
     *     summary: Retrieve all users
     *     tags: [Users]
     *     responses:
     *       '200':
     *         description: A list of users
     */
    UserController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userService.getAll()];
                    case 1:
                        users = _a.sent();
                        res.json(users);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @swagger
     * /users/{id}:
     *   get:
     *     summary: Retrieve a single user by ID
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the user to retrieve
     *     responses:
     *       '200':
     *         description: A user object
     *       '404':
     *         description: User not found
     */
    UserController.prototype.getById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userService.getById(Number(req.params.id))];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(404).json({ message: 'User not found' })];
                        }
                        res.json(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @swagger
     * /users:
     *   post:
     *     summary: Create a new user
     *     tags: [Users]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               email:
     *                 type: string
     *                 description: Email address of the user
     *               password:
     *                 type: string
     *                 description: Password of the user
     *               accountStatus:
     *                 type: boolean
     *                 description: Status of the user's account
     *                 default: true
     *               role:
     *                 type: string
     *                 enum: [admin, institution, researcher, agent, explorer]
     *                 description: Role of the user
     *                 default: explorer
     *             example:
     *               name: john doe
     *               email: john.doe@example.com
     *               password: mypassword
     *               accountStatus: true
     *               role: explorer
     *     responses:
     *       '200':
     *         description: Created user object
     */
    UserController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userService.create(req.body)];
                    case 1:
                        user = _a.sent();
                        res.json(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @swagger
     * /users/{id}:
     *   put:
     *     summary: Update a user by ID
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the user to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 description: Updated name of the user
     *               email:
     *                 type: string
     *                 description: Updated email address of the user
     *               password:
     *                 type: string
     *                 description: Updated password of the user
     *               accountStatus:
     *                 type: boolean
     *                 description: Updated status of the user's account
     *               role:
     *                 type: string
     *                 enum: [admin, institution, researcher, explorer]
     *                 description: Updated role of the user
     *     responses:
     *       '200':
     *         description: Updated user object
     *       '404':
     *         description: User not found
     */
    UserController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userService.update(Number(req.params.id), req.body)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(404).json({ message: 'User not found' })];
                        }
                        res.json(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @swagger
     * /users/{id}:
     *   delete:
     *     summary: Delete a user by ID
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the user to delete
     *     responses:
     *       '204':
     *         description: User deleted successfully
     *       '404':
     *         description: User not found
     */
    UserController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userService.delete(Number(req.params.id))];
                    case 1:
                        _a.sent();
                        res.sendStatus(204);
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
