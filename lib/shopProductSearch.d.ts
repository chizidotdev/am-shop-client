interface MoneyV2 {
  amount: string;
  currencyCode: string;
  __typename: string;
}

interface Image {
  url: string;
  altText: string;
  sensitive: boolean;
  width: number;
  height: number;
  __typename: string;
}

interface Shop {
  id: string;
  name: string;
  defaultHandle: string;
  __typename: string;
}

interface DiscoveryReviewAnalytics {
  averageRating: number;
  count: number;
  __typename: string;
}

interface DiscoveryProduct {
  id: string;
  price: MoneyV2;
  originalPrice: MoneyV2;
  title: string;
  images: Image[];
  offers: any[];
  shopCashOffer: ShopCashOffer | null;
  defaultVariantId: string;
  inDefaultProductList: boolean;
  shop: Shop;
  reviewAnalytics: DiscoveryReviewAnalytics;
  __typename: string;
}

interface FilterOption {
  accessibilityLabel: null;
  configuration: null;
  icon: null;
  label: string | null;
  value: any;
  __typename: string;
}

interface ProductFilterPillConfiguration {
  title: string;
  icon: string;
  screenTitle: null;
  filterKind: string;
  position: number;
  options: FilterOption[];
  __typename: string;
}

interface ProductFilterSheetConfiguration {
  title: string;
  icon: string | null;
  screenTitle: string | null;
  filterKind: string;
  position: number;
  refreshOnUpdate: boolean;
  refreshOptionsOnUpdate: boolean;
  options: FilterOption[];
  __typename: string;
}

interface ProductFilter {
  key: string;
  defaultValue: any;
  value: any;
  configurations: (ProductFilterPillConfiguration | ProductFilterSheetConfiguration)[];
  __typename: string;
}

interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
  __typename: string;
}

interface SearchFilterResult {
  network: string;
  __typename: string;
}

interface ProductSearchConnection {
  nodes: DiscoveryProduct[];
  productFilters: ProductFilter[];
  pageInfo: PageInfo;
  filter: SearchFilterResult;
  inferredCategoryFilters: any[];
  totalCount: number;
  totalCountCapped: boolean;
  inferredQueryType: null;
  __typename: string;
}
