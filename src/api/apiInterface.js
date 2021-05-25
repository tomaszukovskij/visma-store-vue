const http = {
  async get(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch (err) {
      alert(err); // TypeError: failed to fetch
    }
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