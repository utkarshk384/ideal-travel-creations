export type imageType = {
  _id: string;
  name: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  width: number;
  height: number;
  url: string;
  provider: string;
};

/* 
  Components
*/

export interface IItinerary {
  id: string;
  name?: string;
  time?: string;
  content?: string;
  altitude?: string;
  distance?: string;
}

export interface IOpenGraph {
  id: string;
  ogUrl: string;
  ogTitle: string;
  ogType: "basic" | "video" | "article" | "book" | "profile";
  ogDescription: string;
  ogImage: imageType;
}

export interface ITwitterCard {
  id: string;
  cardType: "summary" | "summary_large_image" | "app" | "player";
  site?: string;
  handle?: string;
}

/* 
  API Responses
*/

export interface IAboutBhutanSection {
  id: string;
  title: string;
  content: string;
  coverImage?: imageType;
  url?: string;
  navURL: boolean;
}

export interface IDataForDzongkhag {
  id: string;
  title: string;
  InterestedPlaces?: string;
  coverImage: imageType;
  sectors: "WesternBhutan" | "CentralBhutan" | "EasternBhutan";
  description: string;
}

export interface IEmployee {
  id: string;
  employeeName: string;
  employeeOccupation: string;
  employeeDescription: string;
  employeeImage?: imageType;
  employeeID: number;
  extraDetails?: string;
}

export interface IPackage {
  id: string;
  packageId?: number;
  duration: string;
  images: imageType[];
  description: string;
  title: string;
  packageInsight: string;
  packageType?:
    | "BhutanLuxuryTours"
    | "CulturalToursInBhutan"
    | "TrekkingInBhutan"
    | "BhutanFestivalTours"
    | "WomenExclusiveTours"
    | "StudentEducationalTours"
    | "PhotographTours"
    | "MotorBikeAndCyclingTours"
    | "SpecialInterestTours";
  packageHighlight: string;
  bestTravelTime?: string;
  arrival?: string;
  departure?: string;
  destinations: string;
  itineraries: IItinerary[];
}

export interface ISeoOfPage {
  id: string;
  pageURL: string;
  title: string;
  description: string;
  canonical: string;
  OpenGraphTags?: IOpenGraph;
  TwitterCard?: ITwitterCard;
}

export interface ITestimonial {
  id: string;
  guestName: string;
  image: imageType;
  comments: string;
  uniqueId?: number;
}

/* 
  Array of Responses 
*/

export type IAboutBhutanSectionArray = IAboutBhutanSection[];
export type IDataForDzongkhagArray = IDataForDzongkhag[];
export type IEmployeeArray = IEmployee[];
export type IPackageArray = IPackage[];
export type ISeoOfPageArray = ISeoOfPage[];
export type ITestimonialArray = ITestimonial[];

/* 
  Custom Types from API Res
*/

export interface IPackageType extends Pick<IPackage, "description"> {
  name: string;
}

export interface IAboutBhutanPaths {
  navURL: true;
  _id: string;
  content: string;
  url: string;
  title: string;
  published_at: string;
  createdAt: string;
  updatedAt: string;
  coverImage?: imageType;
}
