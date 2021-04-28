import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import "./database";
import { routes } from "./routes";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

app.get("/pages/admin", (request, response) => {
  return response.render("html/admin.html");
});

const http = createServer(app); //Criando protocolo http

const io = new Server(http); //Criando protocolo ws

io.on("connection", (socket: Socket) => {
  //console.log("Conectou-se ", socket.id);
});

/*
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
 */

app.use(express.json());

app.use(routes);

export { http, io };
