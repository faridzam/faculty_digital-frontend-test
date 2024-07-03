interface IGroupedData {
  current_price: number,
  time: string
}
export interface IGroupedStock {
  id: number,
  code: string,
  name: string,
  price_leap: number,
  initial_price: number,
  data: IGroupedData[]
}

export interface IStock {
  id: number,
  code: string,
  name: string,
  price_leap: number,
  initial_price: number,
  current_price: number,
  time: string
}

export interface IStockState {
  selected: number,
  stocks: IStock[]
}