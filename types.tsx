export interface StockItem {
  timeStamp: string;
  data: StockItemDataArray;
}

export type StockItemDataArray = Array<StockItemData>;

export interface StockItemData {
  code: string;
  price: number;
}

export type StocksData = Array<StockItem>;

export interface LogComponent {
  data: StocksData;
  changePause: () => void;
  logPaused: boolean;
}

export interface SummaryComponent {
  data: StocksData;
}

export interface LogListItem {
  stockItem: StockItem;
}
