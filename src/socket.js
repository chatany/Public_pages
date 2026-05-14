import { io } from "socket.io-client";

export const socket = io("https://socket.bitzup.com", {
  transports: ["websocket"], // 🚀 IMPORTANT
  autoConnect: true,
});
