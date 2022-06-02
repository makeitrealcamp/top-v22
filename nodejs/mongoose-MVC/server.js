const express = require("express");
const cors = require("cors");
const { connect } = require("./src/db");
const videoRouter = require("./src/routes/video");
const swaggerUi = require("swagger-ui-express");

const port = 8080;
const app = express();
connect();

app.use(express.json());
app.use(cors());
const swaggerDocument = {
  swagger: "2.0",
  info: {
    description: "Esto es una práctica",
    version: "1.0.0",
    title: "Swagger Práctica",
    contact: {
      email: "sergio.jaramillo@makeitreal.camp",
    },
  },
  paths: {
    "/api/videos": {
      get: {
        description: "Get all videos",
        produces: ["application/json"],
        parameters: [
          {
            name: "petId",
            in: "path",
            description: "ID of pet to update",
            required: true,
            type: "integer",
            format: "int64",
          },
          {
            name: "additionalMetadata",
            in: "formData",
            description: "Additional data to pass to server",
            required: false,
            type: "string",
          },
          {
            name: "file",
            in: "formData",
            description: "file to upload",
            required: false,
            type: "file",
          },
        ],
        responses: {
          200: {
            description: "successful operation",
            schema: {
              description: "array",
              items: {
                $ref: "#/definitions/ApiResponse",
              },
            },
          },
        },
      },
    },
  },
  definitions: {
    ApiResponse: {
      type: "object",
      required: ["title"],
      properties: {
        title: {
          type: "string",
          example: "Jhon",
        },
      },
    },
  },
};

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Rutas - endpoint
app.use("/videos", videoRouter);

app.listen(port, () => {
  console.log("App running OK");
});

//MVC
// Model View Controller
