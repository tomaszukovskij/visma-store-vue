const http = {
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw response;
    }

    return data;
  },

  async getSingle(url, id) {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    if (!response.ok) {
      throw response;
    }
    return data;
  },

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw response;
    }

    const resData = await response.json();

    return resData;
  },

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw response;
    }

    const resData = await response.json();

    return resData;
  },

  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw response;
    }

    const resData = "Product deleted";

    return resData;
  },
};

export default http;
