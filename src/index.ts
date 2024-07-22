import net from "net";
import { PORT } from "./constants";
import { routes } from "./app";

const server = net.createServer();

server.on("connection", (socket) => {
  socket.on("data", async (message) => {
    const resp = await routes(message);
    socket.write(resp);
  });
});
server.listen(PORT, () =>
  console.log("servidor escuchando en puerto: " + PORT)
);

// COMIENZA SIEMPRE DESDE EL CLIENTE ==> CLIENTE <-> VISTA <-> CONTROLADOR <-> MODELO <-> BB.DD/API
