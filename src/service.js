import api from "./api";

const get = () => {
  return api.get();
};

const create = (data) => {
  return api.post("", data);
};

const update = (id, data) => {
  return api.put(`/${id}`, data);
};

const remove = (id) => {
  return api.delete(`/${id}`);
};

export default {
  get,
  create,
  update,
  remove,
};
