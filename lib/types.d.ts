type ShopProductSearch = {
  id: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  originalPrice: {
    amount: string;
    currencyCode: string;
  } | null;
  title: string;
  images: {
    url: string;
    altText: string;
    sensitive: boolean;
    width: number;
    height: number;
  }[];
  offers: any[];
  shopCashOffer: any;
  defaultVariantId: string;
  inDefaultProductList: boolean;
  shop: {
    id: string;
    name: string;
    defaultHandle: string;
  };
  reviewAnalytics: {
    averageRating: number;
    count: number;
  };
};
