interface IGroupedData {
  initial_price: number,
  current_price: number,
  time: string
}
export interface IGroupedStock {
  id: number,
  code: string,
  name: string,
  data: IGroupedData[]
}

export interface IStock {
  id: number,
  code: string,
  name: string,
  initial_price: number,
  current_price: number,
  time: string
}

export interface IStockState {
  selected: number,
  stocks: IStock[]
}