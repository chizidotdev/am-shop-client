interface VisualTheme {
  id: string;
  logoImage: Image;
  featuredImages: Image[];
  __typename: string;
}

interface Policy {
  embedUrl: string;
  __typename: string;
}

interface Policies {
  shippingPolicy: Policy;
  returnPolicy: Policy;
  __typename: string;
}

interface ShopProductReviewAnalytics {
  totalProductReviews: number;
  averageRating: number;
  __typename: string;
}

interface Shop {
  id: string;
  name: string;
  followedByMe: any;
  defaultHandle: string;
  websiteUrl: string;
  shopWebDisabled: boolean;
  inAppVisibilityStatus: string;
  shopCashOffer: any;
  offers: any[];
  visualTheme: VisualTheme;
  policies: Policies;
  productReviewAnalytics: ShopProductReviewAnalytics;
  shopCashCampaignValue: MoneyV2;
  __typename: string;
}

interface StorefrontMedia {
  mediaContentType: string;
  image: Image;
  alt: string;
  id: string;
  __typename: string;
}

interface StorefrontMediaContentConnection {
  nodes: StorefrontMedia[];
  __typename: string;
}

interface StorefrontProductVariantSelectedOption {
  name: string;
  value: string;
  __typename: string;
}

interface StorefrontVariantImage {
  id: string;
  image: Image;
  __typename: string;
}

interface StorefrontProductVariant {
  id: string;
  title: string;
  currentlyNotInStock: boolean;
  availableForSale: boolean;
  requiresShipping: boolean;
  inDefaultProductList: boolean;
  quantityAvailable: number;
  variantImage: StorefrontVariantImage;
  selectedOptions: StorefrontProductVariantSelectedOption[];
  originalPrice: MoneyV2;
  price: MoneyV2;
  __typename: string;
  bundledBy: any;
  bundleComponents: any;
}

interface StorefrontProductVariantOption {
  name: string;
  values: string[];
  __typename: string;
}

interface ReviewAnalyticsRatingTotals {
  fiveStars: number;
  fourStars: number;
  threeStars: number;
  twoStars: number;
  oneStar: number;
  __typename: string;
}

interface ReviewAnalytics {
  totalReviews: number;
  averageRating: number;
  totals: ReviewAnalyticsRatingTotals;
  __typename: string;
}

interface ReviewedProduct {
  id: string;
  variantTitle: string;
  __typename: string;
}

interface Reviewer {
  id: string;
  displayName: string;
  __typename: string;
}

interface ProductReviewVersion {
  id: string;
  merchantReply: any;
  merchantReplySubmittedAt: any;
  createdAt: string;
  __typename: string;
}

interface ProductReview {
  id: string;
  title: string | null;
  body: string;
  rating: number;
  submittedAt: string;
  reviewer: Reviewer | null;
  publishedVersion: ProductReviewVersion;
  helpfulnessCount: number;
  markedAsHelpfulByMe: boolean;
  reportedByMe: boolean;
  product: ReviewedProduct | null;
  __typename: string;
}

interface ProductReviewConnection {
  nodes: ProductReview[];
  __typename: string;
}

interface StorefrontProduct {
  id: string;
  title: string;
  descriptionHtml: string;
  description: string;
  onlineStoreUrl: string;
  productDrop: any;
  offers: any[];
  shop: Shop;
  media: StorefrontMediaContentConnection;
  variants: {
    nodes: StorefrontProductVariant[];
    pageInfo: {
      hasNextPage: boolean;
    };
    __typename: string;
  };
  options: StorefrontProductVariantOption[];
  reviewAnalytics: ReviewAnalytics;
  reviews: ProductReviewConnection;
  __typename: string;
}
