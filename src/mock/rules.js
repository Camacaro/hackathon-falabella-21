export const RULES = [
  {
    id: "rule001",
    name: "OPERATOR_TYPE",
    type: "MULTIPLE",
    status: "ACTIVE",
    field: "operatorType",
    weight: 0.5,
    conditions: [
      {
        value: "FALABELLA",
        weight: 0.4,
      },
      {
        value: "SELLER",
        weight: 0.8,
      },
      {
        value: "TOTTUS",
        weight: 0.3,
      },
      {
        value: "SODIMAC",
        weight: 0.1,
      },
      {
        value: "HD CORP",
        weight: 0.05,
      },
    ],
  },
  {
    id: "rule002",
    name: "CARRIER_TYPE",
    type: "MULTIPLE",
    status: "ACTIVE",
    field: "carrier",
    weight: 0.1,
    conditions: [
      {
        value: "DEDICATED",
        weight: 0.1,
      },
      {
        value: "3PL",
        weight: 0.2,
      },
      {
        value: "COLABORATIVE",
        weight: 0.3,
      },
    ],
  },
  {
    id: "rule003",
    name: "AM_I_DELAYED",
    type: "DELAYED_NODE",
    status: "ACTIVE",
    weight: 0.7,
    conditions: [
      {
        value: "DELAYED",
        weight: 1,
      },
      {
        value: "NON_DELAYED",
        weight: 0,
      }
    ],
  }  
];
