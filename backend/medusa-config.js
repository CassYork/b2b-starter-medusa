const { QUOTE_MODULE } = require("./src/modules/quote");
const { RENT_MODULE } = require("./src/modules/rent");
const { loadEnv, defineConfig, Modules } = require("@medusajs/framework/utils");

loadEnv(process.env.NODE_ENV, process.cwd());

module.exports = defineConfig({
  admin: {
    backendUrl: process.env.MEDUSA_BACKEND_URL || "http://localhost:9000"
  },
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS,
      adminCors: process.env.ADMIN_CORS,
      authCors: process.env.AUTH_CORS,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    
  },
  modules: {
    companyModuleService: {
      resolve: "./modules/company",
    },
    [QUOTE_MODULE]: {
      resolve: "./modules/quote",
    },
    [RENT_MODULE]: {
      resolve: "./modules/rent",
    },
    [Modules.CACHE]: {
      resolve: "@medusajs/medusa/cache-inmemory",
    },
    [Modules.WORKFLOW_ENGINE]: {
      resolve: "@medusajs/medusa/workflow-engine-inmemory",
    },
  },
});
