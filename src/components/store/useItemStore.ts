// import { create } from "zustand";

// export interface Item {
//   id: number;
//   itemCode: string;
//   itemName: string;
//   category: string;
//   quantity: number;
//   uom: string;
//   price: number;
//   tax: number;
//   supplier: string;
//   reorderLevel: number;
//   minOrderQty: number;
//   preferredStock: number;
//   expiryDate: string;
//   customAttributes: string;
//   description: string;
// }

// interface ItemStore {
//   items: Item[];
//   addItem: (item: Omit<Item, "id">) => void;
// }

// export const useItemStore = create<ItemStore>((set) => ({
//   items: [],
//   addItem: (item) =>
//     set((state) => ({
//       items: [...state.items, { id: state.items.length + 1, ...item }],
//     })),
// }));



import { create } from "zustand";

export interface Item {
  id: number;
  itemCode: string;
  itemName: string;
  category: string;
  quantity: number;
  uom: string;
  price: number;
  tax: number;
  supplier: string;
  reorderLevel: number;
  minOrderQty: number;
  preferredStock: number;
  expiryDate: string;
  customAttributes: string;
  description: string;
}

interface ItemStore {
  items: Item[];
  addItem: (item: Omit<Item, "id">) => void;
}

export const useItemStore = create<ItemStore>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, { id: state.items.length + 1, ...item }],
    })),
}));
