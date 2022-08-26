import ServiceOrder from "./ServiceOrder";

export const httpFetch = {
  get: async (url) => {
    try {
      let data = await fetch(url);

      let info = await data.json();

      let getOrder = [];

      getOrder = info.map((el) => {
        return new ServiceOrder(el);
      });

      return getOrder;
    } catch (err) {
      console.log(err);
    }
  },
};
