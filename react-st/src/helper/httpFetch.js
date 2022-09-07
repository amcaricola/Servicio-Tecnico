export const httpFetch = {
  get: async (url) => {
    try {
      let data = await fetch(url);

      let info = await data.json();

      return info;
    } catch (err) {
      console.log(err);
    }
  },

  post: async (url, newData) => {
    try {
      let data = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      let info = await data.json();

      return info;
    } catch (err) {
      console.log(err);
    }
  },
};
