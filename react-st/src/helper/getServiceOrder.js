// import { httpFetch } from "../helper/httpFetch";
// import ServiceOrder from "../helper/ServiceOrder";

// let url = "https://api.amcaricola.com/sertec-slm/db.json";

// const getServiceOrder = async (oldData) => {
//   try {
//     let getOrder = await httpFetch.get(url);

//     let data = [];

//     data = getOrder.map((el) => {
//       return new ServiceOrder(el);
//     });

//     let newData = [oldData, ...data];

//     return newData;
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default getServiceOrder;
