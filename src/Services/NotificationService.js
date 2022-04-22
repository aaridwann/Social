import { io } from "socket.io-client";

export const socket = io("http://192.168.100.13:8000", {
  reconnectionDelayMax: 10000,
  auth: {
    token: "123"
  },
  query: {
    "my-key": "my-value"
  }
});


export const likeService = async (params) => {
    console.log(params)
}