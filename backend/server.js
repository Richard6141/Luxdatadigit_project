const res = require("express/lib/response");
const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const cors = require('cors');



app.use(cors({
    origin: '*'
}));

server.listen(PORT, () => console.log(`Server started on port ${PORT}..`));
