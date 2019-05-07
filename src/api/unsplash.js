import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 45cea227ff8d63eeb7762c3daf343ba1db929e1b9b11e642e50dd166ff4e0101"
  }
});
