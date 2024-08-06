declare interface Dish {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
}

declare interface Store {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Dish[];
}

declare interface Order {
  products: Array<{ id: number; price: number }>;
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: string;
      complement?: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: string;
      expires: {
        month: string;
        year: string;
      };
    };
  };
}

declare interface OrderResponse {
  orderId: string;
}
