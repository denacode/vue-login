import api from "@/services/api";

export default {
  login(data) {
    return api.post("/login", { ...data });
  },

  register(data) {
    return api.post("/users", { ...data });
  }
};
