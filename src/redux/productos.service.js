import http from "../http-common";

class ProductosDataService {
  getAll() {
    return http.get("/api/products");
  }

  get(id) {
    return http.get(`/api/products/get/${id}`);
  }

  create(data) {
    return http.post("/api/products/add", data);
  }

  update(id, data) {
    return http.put(`/api/products/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/api/products/delete/${id}`);
  }

}

export default new ProductosDataService();