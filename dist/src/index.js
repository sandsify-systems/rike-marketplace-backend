"use strict";
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var data_source_1 = require("./data-source");
var productRoutes_1 = __importDefault(require("./routes/productRoutes"));
var productCategoryRoutes_1 = __importDefault(
	require("./routes/productCategoryRoutes")
);
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var customerRoutes_1 = __importDefault(require("./routes/customerRoutes"));
var orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
var transactionRoutes_1 = __importDefault(
	require("./routes/transactionRoutes")
);
var ResearchInstitutionRoutes_1 = __importDefault(
	require("./routes/ResearchInstitutionRoutes")
);
var EquipmentRoutes_1 = __importDefault(require("./routes/EquipmentRoutes"));
var TaxonomyRoutes_1 = __importDefault(require("./routes/TaxonomyRoutes"));
var swagger_1 = require("../swagger");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express")); // Import swaggerUI
data_source_1.AppDataSource.initialize()
	.then(function () {
		console.log("Database connection established successfully.");
		var app = (0, express_1.default)();
		var port = 8000;
		app.use(
			(0, cors_1.default)({
				origin: [
					"http://localhost:3000",
					"http://localhost:8080",
					"http://localhost:4200",
				],
			})
		);
		app.use(express_1.default.json());
		// Swagger setup
		(0, swagger_1.swaggerSetup)(app);
		// API routes
		app.use("/products", productRoutes_1.default);
		app.use("/product-categories", productCategoryRoutes_1.default);
		app.use("/users", userRoutes_1.default);
		app.use("/customers", customerRoutes_1.default);
		app.use("/orders", orderRoutes_1.default);
		app.use("/transactions", transactionRoutes_1.default);
		app.use("/research-institutions", ResearchInstitutionRoutes_1.default);
		app.use("/equipment", EquipmentRoutes_1.default);
		app.use("/taxonomy", TaxonomyRoutes_1.default);
		// Serve Swagger UI
		app.use(
			"/api-docs",
			swagger_ui_express_1.default.serve,
			swagger_ui_express_1.default.setup(swagger_1.swaggerSpec)
		);
		app.listen(port, function () {
			console.log("Server is running at http://localhost:".concat(port));
			console.log(
				"Swagger UI is available at http://localhost:".concat(port, "/api-docs")
			);
		});
	})
	.catch(function (error) {
		console.error("Error connecting to the database", error);
	});
