import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";
import {initialData} from './data'

faker.seed(123);

export default function setupMockServer() {
    console.log("dsscsd");
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      product: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 1000;
      this.resource("products");
    },

    seeds(server) {
      [...initialData].forEach(({name,image,price,catagory}) => {
        server.create("product", {
          id: faker.datatype.uuid(),
          name: name,
          image: image,
          price: price,
          description:faker.commerce.productDescription,
          catagory:catagory,
          rating:faker.datatype.float({'min':1,'max':5}).toFixed(1),
          hasDiscount:faker.datatype.boolean(),
          discount:faker.datatype.number({'min': 5,'max': 25}),
          fastDelivery:faker.datatype.boolean(),
          inStock:faker.datatype.boolean()
         
        });
      });
    }
  });
}