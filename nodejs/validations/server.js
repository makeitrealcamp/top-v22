const express = require("express");
const cors = require("cors");
const { connect } = require("./src/db");
const userRouter = require("./src/routes/user");
const swaggerUi = require("swagger-ui-express");

const port = 8080;
const app = express();
connect();

app.use(express.json());
app.use(cors());

const swaggerDocument = {
  swagger: "2.0",
  info: {
    description: "Este es un ejemplo de un crud de usuario",
    version: "1.0.0",
    title: "API user",
    contact: {
      email: "apiteam@swagger.io",
    },
  },
  paths: {
    "api/users": {
      post: {
        description: "This post for created user",
        produces: ["application/json"],
        parameters: [
          {
            name: "rol",
            in: "body",
            description: "descriiption rol",
            required: true,
            type: "string",
          },
          {
            name: "name",
            in: "body",
            description: "description rol",
            required: true,
            type: "string",
          },
          {
            name: "age",
            in: "body",
            description: "description age",
            required: false,
            type: "integer",
          },
          {
            name: "email",
            in: "body",
            description: "description email",
            required: true,
            type: "string",
          },
          {
            name: "working",
            in: "body",
            description: "description wroking",
            required: false,
            type: "bool",
          },
        ],
        responses: {
          200: {
            description: "successful operation",
            schema: {
              $ref: "#/definitions/userCreateResponse",
            },
          },
        },
      },
    },
  },
  definitions: {
    userCreateResponse: {
      type: "object",
      required: ["rol", "name", "email", "age"],
      properties: {
        rol: {
          type: "string",
        },
        name: {
          type: "string",
        },
        age: {
          type: "integer",
        },
        email: {
          type: "string",
        },
        working: {
          type: "bool",
        },
      },
    },
  },
};

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//endpoints
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
