const findStudentsByClass = (className) => {
  return fetch("url")
    .then(response => response.json());
}

const api = {
  findStudentsByClass
};

export default api;