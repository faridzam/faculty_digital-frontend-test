import { defineStore } from "pinia";
import { IGroupedStock, IStock, IStockState } from "../models/stock";

export const useStockStore = defineStore("stock", {

  state: () : IStockState => ({
    selected: 1,
    stocks: [],
  }),
  getters: {
    getStockState: (state) => state,
    getGroupedStock: (state) : IGroupedStock[] => groupStocks(state.stocks)
  },
  actions: {
    addStock(data: IStock[]) {
      let newState = {...this.$state};
      newState.stocks.push(...data);
      if (newState.stocks.length > 40) {
        newState.stocks.splice(0, 4)
      }
      this.$state = newState;
    },
    setSelected(id: number) {
      this.$state.selected = id;
    },
  },
});

function groupStocks(stocks: IStock[]): IGroupedStock[] {
  const groupedStocks = stocks.reduce((acc, stock) => {
    if (!acc[stock.id]) {
      acc[stock.id] = {
        id: stock.id,
        code: stock.code,
        name: stock.name,
        price_leap: stock.price_leap,
        initial_price: stock.initial_price,
        data: []
      };
    }

    acc[stock.id].data.push({
      current_price: stock.current_price,
      time: stock.time
    });

    return acc;
  }, {} as { [key: number]: IGroupedStock });

  // Convert the grouped object to an array
  return Object.values(groupedStocks);
}