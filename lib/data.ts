import shopProductSearch from "./shopProductSearch.json";

export const shopProductSearchData: ShopProductSearch[] = JSON.parse(
  JSON.stringify(shopProductSearch),
).nodes;
