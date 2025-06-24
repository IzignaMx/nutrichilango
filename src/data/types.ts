
export interface Product {
  id: string;
  category: string;
  traditional: {
    name: string;
    brand: string;
    price: number;
    unit: string;
    pricePerUnit: number;
  };
  plantBased: {
    name: string;
    brand: string;
    price: number;
    unit: string;
    pricePerUnit: number;
  };
  priceDifferencePercent: number;
  availability: {
    traditional: boolean;
    plantBased: boolean;
  };
}

export interface Store {
  id: string;
  name: string;
  location: string;
  coordinates: [number, number];
  hasPromotion: boolean;
  promotionDetails?: string;
  storeType: 'conventional' | 'naturist' | 'vegetarian' | 'vegan' | 'organic';
  products: Product[];
}
