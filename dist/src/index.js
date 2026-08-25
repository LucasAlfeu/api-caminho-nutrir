"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_js_1 = require("./server/Server.js");
Server_js_1.server.listen(process.env.PORT || 3333, () => {
    console.log(`App rodando na porta: ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map