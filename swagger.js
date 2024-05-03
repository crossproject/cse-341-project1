const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "Contacts Api",
        description: "Contacts Api"
    },
    host: "https://cse-341-project1-mz42.onrender.com",
    schemes: ["https"]
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);