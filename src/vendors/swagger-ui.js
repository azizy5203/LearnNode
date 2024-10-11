import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "MedSync",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "MedSync",
        url: "https://med-sync-care.vercel.app/",
        email: "info@email.com",
      },
    },
    tags: [
      {
        name: "Users",
        description: "Operations related to users",
      },
    ],
    paths: {
      "/users/GetAll": {
        get: {
          tags: ["Users"],
          description: "Returns all users",
          responses: {
            200: {
              description: "A list of Users.",
              content: {
                "application/json": {
                  schema: {
                    type: "Array",
                    items: {
                      $ref: "#/components/schemas/User",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            Name: {
              type: "string",
            },
            Email: {
              type: "string",
            },
          },
        },
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: ["../router/users.js"],
};
const specs = swaggerJsdoc(options);
export default specs;
