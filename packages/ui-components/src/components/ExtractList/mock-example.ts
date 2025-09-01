export const mockData = [
  {
    date: 'Hoje',
    data: [
      {
        service: 'Pix Enviado',
        detail: 'Evelyn Almeida Souza',
        value: 'R$ 1000,00',
        type: 'send',
      },
      {
        service: 'Recebimento Pix',
        detail: 'Ryan Melo Cardoso',
        value: 'R$ 550,00',
        type: 'receive',
      },
    ],
  },
  {
    date: 'Qui. 14 de ago.',
    data: [
      {
        service: 'Depósito',
        detail: 'Caixa Eletrônico',
        value: 'R$ 800,00',
        type: 'saveMoney',
      },
      {
        service: 'Resgate',
        detail: 'Fundo Fic Executivo',
        value: 'R$ 550,00',
        type: 'cancellation',
        supportTextValue: 'Cancelado',
      },
      {
        service: 'Seguro Vida',
        detail: 'Caixa Vida e Previdência',
        type: 'send',
        value: 'R$58,00',
      },
    ],
  },
  {
    date: 'Seg. 11 de ago.',
    data: [
      {
        service: 'Pagamento de Boleto',
        detail: 'P&G Com e Serviços',
        value: 'R$ 150,00',
        type: 'barcode',
      },
      {
        service: 'Estorno de Boleto',
        detail: 'P&G Com e Serviços',
        value: 'R$ 150,00',
        type: 'refund',
      },
      {
        service: 'Compra',
        detail: 'DC Empreendimentos',
        value: 'R$ 1.345.550,00',
        type: 'send',
      },
    ],
  },
];
