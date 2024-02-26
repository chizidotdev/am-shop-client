import shopProductSearch from "./shopProductSearch.json";
import storeFrontProduct from "./storeFrontProduct.json";

export const shopProductSearchData: DiscoveryProduct[] = JSON.parse(
  JSON.stringify(shopProductSearch),
).nodes;

export const storeFrontProductData: StorefrontProduct = JSON.parse(
  JSON.stringify(storeFrontProduct),
);
