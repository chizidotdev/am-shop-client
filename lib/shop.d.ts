interface ProductReviewAnalytics {
  totalProductReviews: number;
  averageRating: number;
  __typename: string;
}

interface ShippingInfo {
  country: string;
  shipsToCountry: boolean;
  __typename: string;
}

interface Policy {
  embedUrl: string;
  __typename: string;
}

interface Policies {
  shippingPolicy: Policy;
  returnPolicy: Policy;
  privacyPolicy: Policy;
  __typename: string;
}

interface ColorTheme {
  id: string;
  primary: string;
  secondary: string;
  secondaryText: string;
  statusBarStyle: string;
  __typename: string;
}

interface LogoTheme {
  id: string;
  logoImage: Image;
  __typename: string;
}

interface HeaderTheme {
  id: string;
  coverImage: Image;
  slogan: string | null;
  thumbnailImage: Image | null;
  videoUrl: string | null;
  startingScrimColor: string;
  endingScrimColor: string;
  __typename: string;
}

interface BrandSettings {
  id: string;
  colors: ColorTheme;
  logos: LogoTheme;
  headerTheme: HeaderTheme;
  __typename: string;
}

interface VisualTheme {
  id: string;
  heroImage: Image | null;
  logoImage: Image;
  description: string;
  brandSettings: BrandSettings;
  __typename: string;
}

interface ShopGID {
  domain: string;
  modelId: string;
  __typename: string;
}

interface AnnouncementsSection {
  id: string;
  index: number;
  gid: ShopGID;
  title: string | null;
  action: string | null;
  __typename: string;
  announcements: any[]; // You may replace 'any' with a specific type if available
  bgColor: string | null;
  titleColor: string | null;
}

interface MinisEntryPointsV2Section {
  __typename: string;
}

interface MinisWidgetsSection {
  __typename: string;
}

interface ShopSection {
  id: string;
  index: number;
  gid: ShopGID;
  title: string | null;
  action: string | null;
  __typename: string;
}

interface ShopCashOffer {
  // Type definition for ShopCashOffer goes here
}

interface ReviewedProduct {
  id: string;
  image: Image;
  title: string;
  variantTitle: string;
  __typename: string;
}

interface ProductReviewConnection {
  nodes: ProductReview[];
  totalCount: number;
  pageInfo: {
    hasNextPage: boolean;
    endCursor: string;
    __typename: string;
  };
  __typename: string;
}

interface Shop {
  id: string;
  shopifyId: string;
  myshopifyDomain: string;
  name: string;
  adjustProductImageAspectRatio: boolean;
  followedByMe: any; // You may replace 'any' with a specific type if available
  inboxEnabled: boolean;
  shopWebDisabled: boolean;
  inboxVisible: boolean;
  nativeProductPagesEnabled: boolean;
  shopNetwork: boolean;
  storeEligible: boolean;
  websiteUrl: string;
  defaultHandle: string;
  shareUrl: string;
  showBrandedHeaderV2: boolean;
  productReviewAnalytics: ProductReviewAnalytics;
  shippingInfo: ShippingInfo;
  policies: Policies;
  visualTheme: VisualTheme;
  storeSections: (
    | AnnouncementsSection
    | MinisEntryPointsV2Section
    | MinisWidgetsSection
    | ShopSection
  )[];
  shopCashOffer: ShopCashOffer | null;
  productReviews: ProductReviewConnection;
  __typename: string;
}
