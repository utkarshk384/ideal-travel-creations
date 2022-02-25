/* eslint-disable no-unused-vars */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type FileInfoInput = {
  name?: Maybe<Scalars["String"]>;
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  id: Scalars["ID"];
  username: Scalars["String"];
  email: Scalars["String"];
  confirmed?: Maybe<Scalars["Boolean"]>;
  blocked?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: "UserPermissionsPasswordPayload";
  ok: Scalars["Boolean"];
};

export type PkgTypes = {
  __typename?: "pkgTypes";
  name: Scalars["String"];
  description: Scalars["String"];
};

export type AboutBhutanSection = {
  __typename?: "AboutBhutanSection";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  title: Scalars["String"];
  content: Scalars["String"];
  coverImage?: Maybe<UploadFile>;
  url?: Maybe<Scalars["String"]>;
  navURL: Scalars["Boolean"];
  published_at?: Maybe<Scalars["DateTime"]>;
};

export type AboutBhutanSectionConnection = {
  __typename?: "AboutBhutanSectionConnection";
  values?: Maybe<Array<Maybe<AboutBhutanSection>>>;
  groupBy?: Maybe<AboutBhutanSectionGroupBy>;
  aggregate?: Maybe<AboutBhutanSectionAggregator>;
};

export type AboutBhutanSectionAggregator = {
  __typename?: "AboutBhutanSectionAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type AboutBhutanSectionGroupBy = {
  __typename?: "AboutBhutanSectionGroupBy";
  id?: Maybe<Array<Maybe<AboutBhutanSectionConnectionId>>>;
  _id?: Maybe<Array<Maybe<AboutBhutanSectionConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<AboutBhutanSectionConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<AboutBhutanSectionConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<AboutBhutanSectionConnectionTitle>>>;
  content?: Maybe<Array<Maybe<AboutBhutanSectionConnectionContent>>>;
  coverImage?: Maybe<Array<Maybe<AboutBhutanSectionConnectionCoverImage>>>;
  url?: Maybe<Array<Maybe<AboutBhutanSectionConnectionUrl>>>;
  navURL?: Maybe<Array<Maybe<AboutBhutanSectionConnectionNavUrl>>>;
  published_at?: Maybe<Array<Maybe<AboutBhutanSectionConnectionPublished_At>>>;
};

export type AboutBhutanSectionConnectionId = {
  __typename?: "AboutBhutanSectionConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<AboutBhutanSectionConnection>;
};

export type AboutBhutanSectionConnection_Id = {
  __typename?: "AboutBhutanSectionConnection_id";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<AboutBhutanSectionConnection>;
};

export type AboutBhutanSectionConnectionCreatedAt = {
  __typename?: "AboutBhutanSectionConnectionCreatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<AboutBhutanSectionConnection>;
};

export type AboutBhutanSectionConnectionUpdatedAt = {
  __typename?: "AboutBhutanSectionConnectionUpdatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<AboutBhutanSectionConnection>;
};

export type AboutBhutanSectionConnectionTitle = {
  __typename?: "AboutBhutanSectionConnectionTitle";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<AboutBhutanSectionConnection>;
};

export type AboutBhutanSectionConnectionContent = {
  __typename?: "AboutBhutanSectionConnectionContent";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<AboutBhutanSectionConnection>;
};

export type AboutBhutanSectionConnectionCoverImage = {
  __typename?: "AboutBhutanSectionConnectionCoverImage";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<AboutBhutanSectionConnection>;
};

export type AboutBhutanSectionConnectionUrl = {
  __typename?: "AboutBhutanSectionConnectionUrl";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<AboutBhutanSectionConnection>;
};

export type AboutBhutanSectionConnectionNavUrl = {
  __typename?: "AboutBhutanSectionConnectionNavURL";
  key?: Maybe<Scalars["Boolean"]>;
  connection?: Maybe<AboutBhutanSectionConnection>;
};

export type AboutBhutanSectionConnectionPublished_At = {
  __typename?: "AboutBhutanSectionConnectionPublished_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<AboutBhutanSectionConnection>;
};

export type AboutBhutanSectionInput = {
  title: Scalars["String"];
  content: Scalars["String"];
  coverImage?: Maybe<Scalars["ID"]>;
  url?: Maybe<Scalars["String"]>;
  navURL?: Maybe<Scalars["Boolean"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditAboutBhutanSectionInput = {
  title?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  coverImage?: Maybe<Scalars["ID"]>;
  url?: Maybe<Scalars["String"]>;
  navURL?: Maybe<Scalars["Boolean"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type CreateAboutBhutanSectionInput = {
  data?: Maybe<AboutBhutanSectionInput>;
};

export type CreateAboutBhutanSectionPayload = {
  __typename?: "createAboutBhutanSectionPayload";
  aboutBhutanSection?: Maybe<AboutBhutanSection>;
};

export type UpdateAboutBhutanSectionInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditAboutBhutanSectionInput>;
};

export type UpdateAboutBhutanSectionPayload = {
  __typename?: "updateAboutBhutanSectionPayload";
  aboutBhutanSection?: Maybe<AboutBhutanSection>;
};

export type DeleteAboutBhutanSectionInput = {
  where?: Maybe<InputId>;
};

export type DeleteAboutBhutanSectionPayload = {
  __typename?: "deleteAboutBhutanSectionPayload";
  aboutBhutanSection?: Maybe<AboutBhutanSection>;
};

export enum Enum_Datafordzongkhag_Sectors {
  WesternBhutan = "WesternBhutan",
  CentralBhutan = "CentralBhutan",
  EasternBhutan = "EasternBhutan",
}

export type DataForDzongkhag = {
  __typename?: "DataForDzongkhag";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  title: Scalars["String"];
  InterestedPlaces?: Maybe<Scalars["String"]>;
  coverImage?: Maybe<UploadFile>;
  sectors: Enum_Datafordzongkhag_Sectors;
  description: Scalars["String"];
  published_at?: Maybe<Scalars["DateTime"]>;
};

export type DataForDzongkhagConnection = {
  __typename?: "DataForDzongkhagConnection";
  values?: Maybe<Array<Maybe<DataForDzongkhag>>>;
  groupBy?: Maybe<DataForDzongkhagGroupBy>;
  aggregate?: Maybe<DataForDzongkhagAggregator>;
};

export type DataForDzongkhagAggregator = {
  __typename?: "DataForDzongkhagAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type DataForDzongkhagGroupBy = {
  __typename?: "DataForDzongkhagGroupBy";
  id?: Maybe<Array<Maybe<DataForDzongkhagConnectionId>>>;
  _id?: Maybe<Array<Maybe<DataForDzongkhagConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<DataForDzongkhagConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<DataForDzongkhagConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<DataForDzongkhagConnectionTitle>>>;
  InterestedPlaces?: Maybe<
    Array<Maybe<DataForDzongkhagConnectionInterestedPlaces>>
  >;
  coverImage?: Maybe<Array<Maybe<DataForDzongkhagConnectionCoverImage>>>;
  sectors?: Maybe<Array<Maybe<DataForDzongkhagConnectionSectors>>>;
  description?: Maybe<Array<Maybe<DataForDzongkhagConnectionDescription>>>;
  published_at?: Maybe<Array<Maybe<DataForDzongkhagConnectionPublished_At>>>;
};

export type DataForDzongkhagConnectionId = {
  __typename?: "DataForDzongkhagConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<DataForDzongkhagConnection>;
};

export type DataForDzongkhagConnection_Id = {
  __typename?: "DataForDzongkhagConnection_id";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<DataForDzongkhagConnection>;
};

export type DataForDzongkhagConnectionCreatedAt = {
  __typename?: "DataForDzongkhagConnectionCreatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<DataForDzongkhagConnection>;
};

export type DataForDzongkhagConnectionUpdatedAt = {
  __typename?: "DataForDzongkhagConnectionUpdatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<DataForDzongkhagConnection>;
};

export type DataForDzongkhagConnectionTitle = {
  __typename?: "DataForDzongkhagConnectionTitle";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<DataForDzongkhagConnection>;
};

export type DataForDzongkhagConnectionInterestedPlaces = {
  __typename?: "DataForDzongkhagConnectionInterestedPlaces";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<DataForDzongkhagConnection>;
};

export type DataForDzongkhagConnectionCoverImage = {
  __typename?: "DataForDzongkhagConnectionCoverImage";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<DataForDzongkhagConnection>;
};

export type DataForDzongkhagConnectionSectors = {
  __typename?: "DataForDzongkhagConnectionSectors";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<DataForDzongkhagConnection>;
};

export type DataForDzongkhagConnectionDescription = {
  __typename?: "DataForDzongkhagConnectionDescription";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<DataForDzongkhagConnection>;
};

export type DataForDzongkhagConnectionPublished_At = {
  __typename?: "DataForDzongkhagConnectionPublished_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<DataForDzongkhagConnection>;
};

export type DataForDzongkhagInput = {
  title: Scalars["String"];
  InterestedPlaces?: Maybe<Scalars["String"]>;
  coverImage?: Maybe<Scalars["ID"]>;
  sectors?: Maybe<Enum_Datafordzongkhag_Sectors>;
  description: Scalars["String"];
  published_at?: Maybe<Scalars["DateTime"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditDataForDzongkhagInput = {
  title?: Maybe<Scalars["String"]>;
  InterestedPlaces?: Maybe<Scalars["String"]>;
  coverImage?: Maybe<Scalars["ID"]>;
  sectors?: Maybe<Enum_Datafordzongkhag_Sectors>;
  description?: Maybe<Scalars["String"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type CreateDataForDzongkhagInput = {
  data?: Maybe<DataForDzongkhagInput>;
};

export type CreateDataForDzongkhagPayload = {
  __typename?: "createDataForDzongkhagPayload";
  dataForDzongkhag?: Maybe<DataForDzongkhag>;
};

export type UpdateDataForDzongkhagInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditDataForDzongkhagInput>;
};

export type UpdateDataForDzongkhagPayload = {
  __typename?: "updateDataForDzongkhagPayload";
  dataForDzongkhag?: Maybe<DataForDzongkhag>;
};

export type DeleteDataForDzongkhagInput = {
  where?: Maybe<InputId>;
};

export type DeleteDataForDzongkhagPayload = {
  __typename?: "deleteDataForDzongkhagPayload";
  dataForDzongkhag?: Maybe<DataForDzongkhag>;
};

export type Employee = {
  __typename?: "Employee";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  employeeName: Scalars["String"];
  employeeOccupation: Scalars["String"];
  employeeDescription: Scalars["String"];
  employeeImage?: Maybe<UploadFile>;
  employeeID: Scalars["Int"];
  extraDetails?: Maybe<Scalars["String"]>;
};

export type EmployeeConnection = {
  __typename?: "EmployeeConnection";
  values?: Maybe<Array<Maybe<Employee>>>;
  groupBy?: Maybe<EmployeeGroupBy>;
  aggregate?: Maybe<EmployeeAggregator>;
};

export type EmployeeAggregator = {
  __typename?: "EmployeeAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
  sum?: Maybe<EmployeeAggregatorSum>;
  avg?: Maybe<EmployeeAggregatorAvg>;
  min?: Maybe<EmployeeAggregatorMin>;
  max?: Maybe<EmployeeAggregatorMax>;
};

export type EmployeeAggregatorSum = {
  __typename?: "EmployeeAggregatorSum";
  employeeID?: Maybe<Scalars["Float"]>;
};

export type EmployeeAggregatorAvg = {
  __typename?: "EmployeeAggregatorAvg";
  employeeID?: Maybe<Scalars["Float"]>;
};

export type EmployeeAggregatorMin = {
  __typename?: "EmployeeAggregatorMin";
  employeeID?: Maybe<Scalars["Float"]>;
};

export type EmployeeAggregatorMax = {
  __typename?: "EmployeeAggregatorMax";
  employeeID?: Maybe<Scalars["Float"]>;
};

export type EmployeeGroupBy = {
  __typename?: "EmployeeGroupBy";
  id?: Maybe<Array<Maybe<EmployeeConnectionId>>>;
  _id?: Maybe<Array<Maybe<EmployeeConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<EmployeeConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<EmployeeConnectionUpdatedAt>>>;
  employeeName?: Maybe<Array<Maybe<EmployeeConnectionEmployeeName>>>;
  employeeOccupation?: Maybe<
    Array<Maybe<EmployeeConnectionEmployeeOccupation>>
  >;
  employeeDescription?: Maybe<
    Array<Maybe<EmployeeConnectionEmployeeDescription>>
  >;
  employeeImage?: Maybe<Array<Maybe<EmployeeConnectionEmployeeImage>>>;
  employeeID?: Maybe<Array<Maybe<EmployeeConnectionEmployeeId>>>;
  extraDetails?: Maybe<Array<Maybe<EmployeeConnectionExtraDetails>>>;
};

export type EmployeeConnectionId = {
  __typename?: "EmployeeConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<EmployeeConnection>;
};

export type EmployeeConnection_Id = {
  __typename?: "EmployeeConnection_id";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<EmployeeConnection>;
};

export type EmployeeConnectionCreatedAt = {
  __typename?: "EmployeeConnectionCreatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<EmployeeConnection>;
};

export type EmployeeConnectionUpdatedAt = {
  __typename?: "EmployeeConnectionUpdatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<EmployeeConnection>;
};

export type EmployeeConnectionEmployeeName = {
  __typename?: "EmployeeConnectionEmployeeName";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<EmployeeConnection>;
};

export type EmployeeConnectionEmployeeOccupation = {
  __typename?: "EmployeeConnectionEmployeeOccupation";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<EmployeeConnection>;
};

export type EmployeeConnectionEmployeeDescription = {
  __typename?: "EmployeeConnectionEmployeeDescription";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<EmployeeConnection>;
};

export type EmployeeConnectionEmployeeImage = {
  __typename?: "EmployeeConnectionEmployeeImage";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<EmployeeConnection>;
};

export type EmployeeConnectionEmployeeId = {
  __typename?: "EmployeeConnectionEmployeeID";
  key?: Maybe<Scalars["Int"]>;
  connection?: Maybe<EmployeeConnection>;
};

export type EmployeeConnectionExtraDetails = {
  __typename?: "EmployeeConnectionExtraDetails";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<EmployeeConnection>;
};

export type EmployeeInput = {
  employeeName: Scalars["String"];
  employeeOccupation: Scalars["String"];
  employeeDescription: Scalars["String"];
  employeeImage?: Maybe<Scalars["ID"]>;
  employeeID: Scalars["Int"];
  extraDetails?: Maybe<Scalars["String"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditEmployeeInput = {
  employeeName?: Maybe<Scalars["String"]>;
  employeeOccupation?: Maybe<Scalars["String"]>;
  employeeDescription?: Maybe<Scalars["String"]>;
  employeeImage?: Maybe<Scalars["ID"]>;
  employeeID?: Maybe<Scalars["Int"]>;
  extraDetails?: Maybe<Scalars["String"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type CreateEmployeeInput = {
  data?: Maybe<EmployeeInput>;
};

export type CreateEmployeePayload = {
  __typename?: "createEmployeePayload";
  employee?: Maybe<Employee>;
};

export type UpdateEmployeeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditEmployeeInput>;
};

export type UpdateEmployeePayload = {
  __typename?: "updateEmployeePayload";
  employee?: Maybe<Employee>;
};

export type DeleteEmployeeInput = {
  where?: Maybe<InputId>;
};

export type DeleteEmployeePayload = {
  __typename?: "deleteEmployeePayload";
  employee?: Maybe<Employee>;
};

export enum Enum_Package_Packagetype {
  BhutanLuxuryTours = "BhutanLuxuryTours",
  CulturalToursInBhutan = "CulturalToursInBhutan",
  TrekkingInBhutan = "TrekkingInBhutan",
  BhutanFestivalTours = "BhutanFestivalTours",
  WomenExclusiveTours = "WomenExclusiveTours",
  StudentEducationalTours = "StudentEducationalTours",
  PhotographTours = "PhotographTours",
  MotorBikeAndCyclingTours = "MotorBikeAndCyclingTours",
  SpecialInterestTours = "SpecialInterestTours",
}

export type Package = {
  __typename?: "Package";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  packageId?: Maybe<Scalars["Int"]>;
  duration: Scalars["String"];
  description: Scalars["String"];
  title: Scalars["String"];
  packageInsight: Scalars["String"];
  packageType?: Maybe<Enum_Package_Packagetype>;
  packageHighlight: Scalars["String"];
  bestTravelTime?: Maybe<Scalars["String"]>;
  arrival?: Maybe<Scalars["String"]>;
  departure?: Maybe<Scalars["String"]>;
  destinations: Scalars["String"];
  itineraries?: Maybe<Array<Maybe<ComponentItineraryItinerary>>>;
  published_at?: Maybe<Scalars["DateTime"]>;
  images?: Maybe<Array<Maybe<UploadFile>>>;
};

export type PackageImagesArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type PackageConnection = {
  __typename?: "PackageConnection";
  values?: Maybe<Array<Maybe<Package>>>;
  groupBy?: Maybe<PackageGroupBy>;
  aggregate?: Maybe<PackageAggregator>;
};

export type PackageAggregator = {
  __typename?: "PackageAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
  sum?: Maybe<PackageAggregatorSum>;
  avg?: Maybe<PackageAggregatorAvg>;
  min?: Maybe<PackageAggregatorMin>;
  max?: Maybe<PackageAggregatorMax>;
};

export type PackageAggregatorSum = {
  __typename?: "PackageAggregatorSum";
  packageId?: Maybe<Scalars["Float"]>;
};

export type PackageAggregatorAvg = {
  __typename?: "PackageAggregatorAvg";
  packageId?: Maybe<Scalars["Float"]>;
};

export type PackageAggregatorMin = {
  __typename?: "PackageAggregatorMin";
  packageId?: Maybe<Scalars["Float"]>;
};

export type PackageAggregatorMax = {
  __typename?: "PackageAggregatorMax";
  packageId?: Maybe<Scalars["Float"]>;
};

export type PackageGroupBy = {
  __typename?: "PackageGroupBy";
  id?: Maybe<Array<Maybe<PackageConnectionId>>>;
  _id?: Maybe<Array<Maybe<PackageConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<PackageConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<PackageConnectionUpdatedAt>>>;
  packageId?: Maybe<Array<Maybe<PackageConnectionPackageId>>>;
  duration?: Maybe<Array<Maybe<PackageConnectionDuration>>>;
  description?: Maybe<Array<Maybe<PackageConnectionDescription>>>;
  title?: Maybe<Array<Maybe<PackageConnectionTitle>>>;
  packageInsight?: Maybe<Array<Maybe<PackageConnectionPackageInsight>>>;
  packageType?: Maybe<Array<Maybe<PackageConnectionPackageType>>>;
  packageHighlight?: Maybe<Array<Maybe<PackageConnectionPackageHighlight>>>;
  bestTravelTime?: Maybe<Array<Maybe<PackageConnectionBestTravelTime>>>;
  arrival?: Maybe<Array<Maybe<PackageConnectionArrival>>>;
  departure?: Maybe<Array<Maybe<PackageConnectionDeparture>>>;
  destinations?: Maybe<Array<Maybe<PackageConnectionDestinations>>>;
  published_at?: Maybe<Array<Maybe<PackageConnectionPublished_At>>>;
};

export type PackageConnectionId = {
  __typename?: "PackageConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<PackageConnection>;
};

export type PackageConnection_Id = {
  __typename?: "PackageConnection_id";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<PackageConnection>;
};

export type PackageConnectionCreatedAt = {
  __typename?: "PackageConnectionCreatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<PackageConnection>;
};

export type PackageConnectionUpdatedAt = {
  __typename?: "PackageConnectionUpdatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<PackageConnection>;
};

export type PackageConnectionPackageId = {
  __typename?: "PackageConnectionPackageId";
  key?: Maybe<Scalars["Int"]>;
  connection?: Maybe<PackageConnection>;
};

export type PackageConnectionDuration = {
  __typename?: "PackageConnectionDuration";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<PackageConnection>;
};

export type PackageConnectionDescription = {
  __typename?: "PackageConnectionDescription";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<PackageConnection>;
};

export type PackageConnectionTitle = {
  __typename?: "PackageConnectionTitle";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<PackageConnection>;
};

export type PackageConnectionPackageInsight = {
  __typename?: "PackageConnectionPackageInsight";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<PackageConnection>;
};

export type PackageConnectionPackageType = {
  __typename?: "PackageConnectionPackageType";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<PackageConnection>;
};

export type PackageConnectionPackageHighlight = {
  __typename?: "PackageConnectionPackageHighlight";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<PackageConnection>;
};

export type PackageConnectionBestTravelTime = {
  __typename?: "PackageConnectionBestTravelTime";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<PackageConnection>;
};

export type PackageConnectionArrival = {
  __typename?: "PackageConnectionArrival";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<PackageConnection>;
};

export type PackageConnectionDeparture = {
  __typename?: "PackageConnectionDeparture";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<PackageConnection>;
};

export type PackageConnectionDestinations = {
  __typename?: "PackageConnectionDestinations";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<PackageConnection>;
};

export type PackageConnectionPublished_At = {
  __typename?: "PackageConnectionPublished_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<PackageConnection>;
};

export type PackageInput = {
  packageId?: Maybe<Scalars["Int"]>;
  duration: Scalars["String"];
  images?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  description: Scalars["String"];
  title: Scalars["String"];
  packageInsight: Scalars["String"];
  packageType?: Maybe<Enum_Package_Packagetype>;
  packageHighlight: Scalars["String"];
  bestTravelTime?: Maybe<Scalars["String"]>;
  arrival?: Maybe<Scalars["String"]>;
  departure?: Maybe<Scalars["String"]>;
  destinations: Scalars["String"];
  itineraries?: Maybe<Array<Maybe<ComponentItineraryItineraryInput>>>;
  published_at?: Maybe<Scalars["DateTime"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditPackageInput = {
  packageId?: Maybe<Scalars["Int"]>;
  duration?: Maybe<Scalars["String"]>;
  images?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  description?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  packageInsight?: Maybe<Scalars["String"]>;
  packageType?: Maybe<Enum_Package_Packagetype>;
  packageHighlight?: Maybe<Scalars["String"]>;
  bestTravelTime?: Maybe<Scalars["String"]>;
  arrival?: Maybe<Scalars["String"]>;
  departure?: Maybe<Scalars["String"]>;
  destinations?: Maybe<Scalars["String"]>;
  itineraries?: Maybe<Array<Maybe<EditComponentItineraryItineraryInput>>>;
  published_at?: Maybe<Scalars["DateTime"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type CreatePackageInput = {
  data?: Maybe<PackageInput>;
};

export type CreatePackagePayload = {
  __typename?: "createPackagePayload";
  package?: Maybe<Package>;
};

export type UpdatePackageInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPackageInput>;
};

export type UpdatePackagePayload = {
  __typename?: "updatePackagePayload";
  package?: Maybe<Package>;
};

export type DeletePackageInput = {
  where?: Maybe<InputId>;
};

export type DeletePackagePayload = {
  __typename?: "deletePackagePayload";
  package?: Maybe<Package>;
};

export type SeoOfPage = {
  __typename?: "SeoOfPage";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  pageURL: Scalars["String"];
  title: Scalars["String"];
  description: Scalars["String"];
  canonical: Scalars["String"];
  OpenGraphTags?: Maybe<ComponentSeoOpenGraph>;
  TwitterCard?: Maybe<ComponentSeoTwitterCard>;
};

export type SeoOfPageConnection = {
  __typename?: "SeoOfPageConnection";
  values?: Maybe<Array<Maybe<SeoOfPage>>>;
  groupBy?: Maybe<SeoOfPageGroupBy>;
  aggregate?: Maybe<SeoOfPageAggregator>;
};

export type SeoOfPageAggregator = {
  __typename?: "SeoOfPageAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type SeoOfPageGroupBy = {
  __typename?: "SeoOfPageGroupBy";
  id?: Maybe<Array<Maybe<SeoOfPageConnectionId>>>;
  _id?: Maybe<Array<Maybe<SeoOfPageConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<SeoOfPageConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<SeoOfPageConnectionUpdatedAt>>>;
  pageURL?: Maybe<Array<Maybe<SeoOfPageConnectionPageUrl>>>;
  title?: Maybe<Array<Maybe<SeoOfPageConnectionTitle>>>;
  description?: Maybe<Array<Maybe<SeoOfPageConnectionDescription>>>;
  canonical?: Maybe<Array<Maybe<SeoOfPageConnectionCanonical>>>;
  OpenGraphTags?: Maybe<Array<Maybe<SeoOfPageConnectionOpenGraphTags>>>;
  TwitterCard?: Maybe<Array<Maybe<SeoOfPageConnectionTwitterCard>>>;
};

export type SeoOfPageConnectionId = {
  __typename?: "SeoOfPageConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<SeoOfPageConnection>;
};

export type SeoOfPageConnection_Id = {
  __typename?: "SeoOfPageConnection_id";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<SeoOfPageConnection>;
};

export type SeoOfPageConnectionCreatedAt = {
  __typename?: "SeoOfPageConnectionCreatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<SeoOfPageConnection>;
};

export type SeoOfPageConnectionUpdatedAt = {
  __typename?: "SeoOfPageConnectionUpdatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<SeoOfPageConnection>;
};

export type SeoOfPageConnectionPageUrl = {
  __typename?: "SeoOfPageConnectionPageURL";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<SeoOfPageConnection>;
};

export type SeoOfPageConnectionTitle = {
  __typename?: "SeoOfPageConnectionTitle";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<SeoOfPageConnection>;
};

export type SeoOfPageConnectionDescription = {
  __typename?: "SeoOfPageConnectionDescription";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<SeoOfPageConnection>;
};

export type SeoOfPageConnectionCanonical = {
  __typename?: "SeoOfPageConnectionCanonical";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<SeoOfPageConnection>;
};

export type SeoOfPageConnectionOpenGraphTags = {
  __typename?: "SeoOfPageConnectionOpenGraphTags";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<SeoOfPageConnection>;
};

export type SeoOfPageConnectionTwitterCard = {
  __typename?: "SeoOfPageConnectionTwitterCard";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<SeoOfPageConnection>;
};

export type SeoOfPageInput = {
  pageURL: Scalars["String"];
  title: Scalars["String"];
  description: Scalars["String"];
  canonical: Scalars["String"];
  OpenGraphTags?: Maybe<ComponentSeoOpenGraphInput>;
  TwitterCard?: Maybe<ComponentSeoTwitterCardInput>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditSeoOfPageInput = {
  pageURL?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  canonical?: Maybe<Scalars["String"]>;
  OpenGraphTags?: Maybe<EditComponentSeoOpenGraphInput>;
  TwitterCard?: Maybe<EditComponentSeoTwitterCardInput>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type CreateSeoOfPageInput = {
  data?: Maybe<SeoOfPageInput>;
};

export type CreateSeoOfPagePayload = {
  __typename?: "createSeoOfPagePayload";
  seoOfPage?: Maybe<SeoOfPage>;
};

export type UpdateSeoOfPageInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSeoOfPageInput>;
};

export type UpdateSeoOfPagePayload = {
  __typename?: "updateSeoOfPagePayload";
  seoOfPage?: Maybe<SeoOfPage>;
};

export type DeleteSeoOfPageInput = {
  where?: Maybe<InputId>;
};

export type DeleteSeoOfPagePayload = {
  __typename?: "deleteSeoOfPagePayload";
  seoOfPage?: Maybe<SeoOfPage>;
};

export type Testimonial = {
  __typename?: "Testimonial";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  guestName: Scalars["String"];
  image?: Maybe<UploadFile>;
  comments: Scalars["String"];
  uniqueId?: Maybe<Scalars["Int"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
};

export type TestimonialConnection = {
  __typename?: "TestimonialConnection";
  values?: Maybe<Array<Maybe<Testimonial>>>;
  groupBy?: Maybe<TestimonialGroupBy>;
  aggregate?: Maybe<TestimonialAggregator>;
};

export type TestimonialAggregator = {
  __typename?: "TestimonialAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
  sum?: Maybe<TestimonialAggregatorSum>;
  avg?: Maybe<TestimonialAggregatorAvg>;
  min?: Maybe<TestimonialAggregatorMin>;
  max?: Maybe<TestimonialAggregatorMax>;
};

export type TestimonialAggregatorSum = {
  __typename?: "TestimonialAggregatorSum";
  uniqueId?: Maybe<Scalars["Float"]>;
};

export type TestimonialAggregatorAvg = {
  __typename?: "TestimonialAggregatorAvg";
  uniqueId?: Maybe<Scalars["Float"]>;
};

export type TestimonialAggregatorMin = {
  __typename?: "TestimonialAggregatorMin";
  uniqueId?: Maybe<Scalars["Float"]>;
};

export type TestimonialAggregatorMax = {
  __typename?: "TestimonialAggregatorMax";
  uniqueId?: Maybe<Scalars["Float"]>;
};

export type TestimonialGroupBy = {
  __typename?: "TestimonialGroupBy";
  id?: Maybe<Array<Maybe<TestimonialConnectionId>>>;
  _id?: Maybe<Array<Maybe<TestimonialConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<TestimonialConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<TestimonialConnectionUpdatedAt>>>;
  guestName?: Maybe<Array<Maybe<TestimonialConnectionGuestName>>>;
  image?: Maybe<Array<Maybe<TestimonialConnectionImage>>>;
  comments?: Maybe<Array<Maybe<TestimonialConnectionComments>>>;
  uniqueId?: Maybe<Array<Maybe<TestimonialConnectionUniqueId>>>;
  published_at?: Maybe<Array<Maybe<TestimonialConnectionPublished_At>>>;
};

export type TestimonialConnectionId = {
  __typename?: "TestimonialConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnection_Id = {
  __typename?: "TestimonialConnection_id";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionCreatedAt = {
  __typename?: "TestimonialConnectionCreatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionUpdatedAt = {
  __typename?: "TestimonialConnectionUpdatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionGuestName = {
  __typename?: "TestimonialConnectionGuestName";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionImage = {
  __typename?: "TestimonialConnectionImage";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionComments = {
  __typename?: "TestimonialConnectionComments";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionUniqueId = {
  __typename?: "TestimonialConnectionUniqueId";
  key?: Maybe<Scalars["Int"]>;
  connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionPublished_At = {
  __typename?: "TestimonialConnectionPublished_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<TestimonialConnection>;
};

export type TestimonialInput = {
  guestName: Scalars["String"];
  image?: Maybe<Scalars["ID"]>;
  comments: Scalars["String"];
  uniqueId?: Maybe<Scalars["Int"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditTestimonialInput = {
  guestName?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["ID"]>;
  comments?: Maybe<Scalars["String"]>;
  uniqueId?: Maybe<Scalars["Int"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type CreateTestimonialInput = {
  data?: Maybe<TestimonialInput>;
};

export type CreateTestimonialPayload = {
  __typename?: "createTestimonialPayload";
  testimonial?: Maybe<Testimonial>;
};

export type UpdateTestimonialInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTestimonialInput>;
};

export type UpdateTestimonialPayload = {
  __typename?: "updateTestimonialPayload";
  testimonial?: Maybe<Testimonial>;
};

export type DeleteTestimonialInput = {
  where?: Maybe<InputId>;
};

export type DeleteTestimonialPayload = {
  __typename?: "deleteTestimonialPayload";
  testimonial?: Maybe<Testimonial>;
};

export type UploadFile = {
  __typename?: "UploadFile";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  name: Scalars["String"];
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  ext?: Maybe<Scalars["String"]>;
  mime: Scalars["String"];
  size: Scalars["Float"];
  url: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<Morph>>>;
};

export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type UploadFileConnection = {
  __typename?: "UploadFileConnection";
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: "UploadFileAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: "UploadFileAggregatorSum";
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorAvg = {
  __typename?: "UploadFileAggregatorAvg";
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMin = {
  __typename?: "UploadFileAggregatorMin";
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMax = {
  __typename?: "UploadFileAggregatorMax";
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
};

export type UploadFileGroupBy = {
  __typename?: "UploadFileGroupBy";
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<
    Array<Maybe<UploadFileConnectionProvider_Metadata>>
  >;
};

export type UploadFileConnectionId = {
  __typename?: "UploadFileConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnection_Id = {
  __typename?: "UploadFileConnection_id";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: "UploadFileConnectionCreatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: "UploadFileConnectionUpdatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: "UploadFileConnectionName";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: "UploadFileConnectionAlternativeText";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: "UploadFileConnectionCaption";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: "UploadFileConnectionWidth";
  key?: Maybe<Scalars["Int"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: "UploadFileConnectionHeight";
  key?: Maybe<Scalars["Int"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: "UploadFileConnectionFormats";
  key?: Maybe<Scalars["JSON"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: "UploadFileConnectionHash";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: "UploadFileConnectionExt";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: "UploadFileConnectionMime";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: "UploadFileConnectionSize";
  key?: Maybe<Scalars["Float"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: "UploadFileConnectionUrl";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: "UploadFileConnectionPreviewUrl";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: "UploadFileConnectionProvider";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: "UploadFileConnectionProvider_metadata";
  key?: Maybe<Scalars["JSON"]>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars["String"];
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  ext?: Maybe<Scalars["String"]>;
  mime: Scalars["String"];
  size: Scalars["Float"];
  url: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditFileInput = {
  name?: Maybe<Scalars["String"]>;
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash?: Maybe<Scalars["String"]>;
  ext?: Maybe<Scalars["String"]>;
  mime?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  url?: Maybe<Scalars["String"]>;
  previewUrl?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: "deleteFilePayload";
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  type: Scalars["String"];
  controller: Scalars["String"];
  action: Scalars["String"];
  enabled: Scalars["Boolean"];
  policy?: Maybe<Scalars["String"]>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: "UsersPermissionsRoleConnection";
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: "UsersPermissionsRoleAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: "UsersPermissionsRoleGroupBy";
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: "UsersPermissionsRoleConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: "UsersPermissionsRoleConnection_id";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: "UsersPermissionsRoleConnectionName";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: "UsersPermissionsRoleConnectionDescription";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: "UsersPermissionsRoleConnectionType";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  permissions?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  users?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  permissions?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  users?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: "createRolePayload";
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: "updateRolePayload";
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: "deleteRolePayload";
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  username: Scalars["String"];
  email: Scalars["String"];
  provider?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  blocked?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: "UsersPermissionsUserConnection";
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: "UsersPermissionsUserAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: "UsersPermissionsUserGroupBy";
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: "UsersPermissionsUserConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: "UsersPermissionsUserConnection_id";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: "UsersPermissionsUserConnectionCreatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: "UsersPermissionsUserConnectionUpdatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: "UsersPermissionsUserConnectionUsername";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: "UsersPermissionsUserConnectionEmail";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: "UsersPermissionsUserConnectionProvider";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: "UsersPermissionsUserConnectionConfirmed";
  key?: Maybe<Scalars["Boolean"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: "UsersPermissionsUserConnectionBlocked";
  key?: Maybe<Scalars["Boolean"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: "UsersPermissionsUserConnectionRole";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars["String"];
  email: Scalars["String"];
  provider?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  resetPasswordToken?: Maybe<Scalars["String"]>;
  confirmationToken?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  blocked?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<Scalars["ID"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditUserInput = {
  username?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  resetPasswordToken?: Maybe<Scalars["String"]>;
  confirmationToken?: Maybe<Scalars["String"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  blocked?: Maybe<Scalars["Boolean"]>;
  role?: Maybe<Scalars["ID"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: "createUserPayload";
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: "updateUserPayload";
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: "deleteUserPayload";
  user?: Maybe<UsersPermissionsUser>;
};

export type ComponentItineraryItinerary = {
  __typename?: "ComponentItineraryItinerary";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  time?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  altitude?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["String"]>;
};

export type ComponentItineraryItineraryInput = {
  name?: Maybe<Scalars["String"]>;
  time?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  altitude?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["String"]>;
};

export type EditComponentItineraryItineraryInput = {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  time?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  altitude?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["String"]>;
};

export enum Enum_Componentseoopengraph_Ogtype {
  Basic = "basic",
  Video = "video",
  Article = "article",
  Book = "book",
  Profile = "profile",
}

export type ComponentSeoOpenGraph = {
  __typename?: "ComponentSeoOpenGraph";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  ogUrl: Scalars["String"];
  ogTitle: Scalars["String"];
  ogType: Enum_Componentseoopengraph_Ogtype;
  ogDescription: Scalars["String"];
  ogImage?: Maybe<UploadFile>;
};

export type ComponentSeoOpenGraphInput = {
  ogUrl: Scalars["String"];
  ogTitle: Scalars["String"];
  ogType?: Maybe<Enum_Componentseoopengraph_Ogtype>;
  ogDescription: Scalars["String"];
  ogImage?: Maybe<Scalars["ID"]>;
};

export type EditComponentSeoOpenGraphInput = {
  id?: Maybe<Scalars["ID"]>;
  ogUrl?: Maybe<Scalars["String"]>;
  ogTitle?: Maybe<Scalars["String"]>;
  ogType?: Maybe<Enum_Componentseoopengraph_Ogtype>;
  ogDescription?: Maybe<Scalars["String"]>;
  ogImage?: Maybe<Scalars["ID"]>;
};

export enum Enum_Componentseotwittercard_Cardtype {
  Summary = "summary",
  SummaryLargeImage = "summary_large_image",
  App = "app",
  Player = "player",
}

export type ComponentSeoTwitterCard = {
  __typename?: "ComponentSeoTwitterCard";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  cardType: Enum_Componentseotwittercard_Cardtype;
  site?: Maybe<Scalars["String"]>;
  handle?: Maybe<Scalars["String"]>;
};

export type ComponentSeoTwitterCardInput = {
  cardType?: Maybe<Enum_Componentseotwittercard_Cardtype>;
  site?: Maybe<Scalars["String"]>;
  handle?: Maybe<Scalars["String"]>;
};

export type EditComponentSeoTwitterCardInput = {
  id?: Maybe<Scalars["ID"]>;
  cardType?: Maybe<Enum_Componentseotwittercard_Cardtype>;
  site?: Maybe<Scalars["String"]>;
  handle?: Maybe<Scalars["String"]>;
};

export type Morph =
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsLoginPayload
  | UserPermissionsPasswordPayload
  | PkgTypes
  | AboutBhutanSection
  | AboutBhutanSectionConnection
  | AboutBhutanSectionAggregator
  | AboutBhutanSectionGroupBy
  | AboutBhutanSectionConnectionId
  | AboutBhutanSectionConnection_Id
  | AboutBhutanSectionConnectionCreatedAt
  | AboutBhutanSectionConnectionUpdatedAt
  | AboutBhutanSectionConnectionTitle
  | AboutBhutanSectionConnectionContent
  | AboutBhutanSectionConnectionCoverImage
  | AboutBhutanSectionConnectionUrl
  | AboutBhutanSectionConnectionNavUrl
  | AboutBhutanSectionConnectionPublished_At
  | CreateAboutBhutanSectionPayload
  | UpdateAboutBhutanSectionPayload
  | DeleteAboutBhutanSectionPayload
  | DataForDzongkhag
  | DataForDzongkhagConnection
  | DataForDzongkhagAggregator
  | DataForDzongkhagGroupBy
  | DataForDzongkhagConnectionId
  | DataForDzongkhagConnection_Id
  | DataForDzongkhagConnectionCreatedAt
  | DataForDzongkhagConnectionUpdatedAt
  | DataForDzongkhagConnectionTitle
  | DataForDzongkhagConnectionInterestedPlaces
  | DataForDzongkhagConnectionCoverImage
  | DataForDzongkhagConnectionSectors
  | DataForDzongkhagConnectionDescription
  | DataForDzongkhagConnectionPublished_At
  | CreateDataForDzongkhagPayload
  | UpdateDataForDzongkhagPayload
  | DeleteDataForDzongkhagPayload
  | Employee
  | EmployeeConnection
  | EmployeeAggregator
  | EmployeeAggregatorSum
  | EmployeeAggregatorAvg
  | EmployeeAggregatorMin
  | EmployeeAggregatorMax
  | EmployeeGroupBy
  | EmployeeConnectionId
  | EmployeeConnection_Id
  | EmployeeConnectionCreatedAt
  | EmployeeConnectionUpdatedAt
  | EmployeeConnectionEmployeeName
  | EmployeeConnectionEmployeeOccupation
  | EmployeeConnectionEmployeeDescription
  | EmployeeConnectionEmployeeImage
  | EmployeeConnectionEmployeeId
  | EmployeeConnectionExtraDetails
  | CreateEmployeePayload
  | UpdateEmployeePayload
  | DeleteEmployeePayload
  | Package
  | PackageConnection
  | PackageAggregator
  | PackageAggregatorSum
  | PackageAggregatorAvg
  | PackageAggregatorMin
  | PackageAggregatorMax
  | PackageGroupBy
  | PackageConnectionId
  | PackageConnection_Id
  | PackageConnectionCreatedAt
  | PackageConnectionUpdatedAt
  | PackageConnectionPackageId
  | PackageConnectionDuration
  | PackageConnectionDescription
  | PackageConnectionTitle
  | PackageConnectionPackageInsight
  | PackageConnectionPackageType
  | PackageConnectionPackageHighlight
  | PackageConnectionBestTravelTime
  | PackageConnectionArrival
  | PackageConnectionDeparture
  | PackageConnectionDestinations
  | PackageConnectionPublished_At
  | CreatePackagePayload
  | UpdatePackagePayload
  | DeletePackagePayload
  | SeoOfPage
  | SeoOfPageConnection
  | SeoOfPageAggregator
  | SeoOfPageGroupBy
  | SeoOfPageConnectionId
  | SeoOfPageConnection_Id
  | SeoOfPageConnectionCreatedAt
  | SeoOfPageConnectionUpdatedAt
  | SeoOfPageConnectionPageUrl
  | SeoOfPageConnectionTitle
  | SeoOfPageConnectionDescription
  | SeoOfPageConnectionCanonical
  | SeoOfPageConnectionOpenGraphTags
  | SeoOfPageConnectionTwitterCard
  | CreateSeoOfPagePayload
  | UpdateSeoOfPagePayload
  | DeleteSeoOfPagePayload
  | Testimonial
  | TestimonialConnection
  | TestimonialAggregator
  | TestimonialAggregatorSum
  | TestimonialAggregatorAvg
  | TestimonialAggregatorMin
  | TestimonialAggregatorMax
  | TestimonialGroupBy
  | TestimonialConnectionId
  | TestimonialConnection_Id
  | TestimonialConnectionCreatedAt
  | TestimonialConnectionUpdatedAt
  | TestimonialConnectionGuestName
  | TestimonialConnectionImage
  | TestimonialConnectionComments
  | TestimonialConnectionUniqueId
  | TestimonialConnectionPublished_At
  | CreateTestimonialPayload
  | UpdateTestimonialPayload
  | DeleteTestimonialPayload
  | UploadFile
  | UploadFileConnection
  | UploadFileAggregator
  | UploadFileAggregatorSum
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMin
  | UploadFileAggregatorMax
  | UploadFileGroupBy
  | UploadFileConnectionId
  | UploadFileConnection_Id
  | UploadFileConnectionCreatedAt
  | UploadFileConnectionUpdatedAt
  | UploadFileConnectionName
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionWidth
  | UploadFileConnectionHeight
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionExt
  | UploadFileConnectionMime
  | UploadFileConnectionSize
  | UploadFileConnectionUrl
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | DeleteFilePayload
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnection_Id
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionType
  | CreateRolePayload
  | UpdateRolePayload
  | DeleteRolePayload
  | UsersPermissionsUser
  | UsersPermissionsUserConnection
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserGroupBy
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnection_Id
  | UsersPermissionsUserConnectionCreatedAt
  | UsersPermissionsUserConnectionUpdatedAt
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionRole
  | CreateUserPayload
  | UpdateUserPayload
  | DeleteUserPayload
  | ComponentItineraryItinerary
  | ComponentSeoOpenGraph
  | ComponentSeoTwitterCard;

export type InputId = {
  id: Scalars["ID"];
};

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export type AdminUser = {
  __typename?: "AdminUser";
  id: Scalars["ID"];
  username?: Maybe<Scalars["String"]>;
  firstname: Scalars["String"];
  lastname: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  aboutBhutanSection?: Maybe<AboutBhutanSection>;
  aboutBhutanSections?: Maybe<Array<Maybe<AboutBhutanSection>>>;
  aboutBhutanSectionsConnection?: Maybe<AboutBhutanSectionConnection>;
  dataForDzongkhag?: Maybe<DataForDzongkhag>;
  dataForDzongkhags?: Maybe<Array<Maybe<DataForDzongkhag>>>;
  dataForDzongkhagsConnection?: Maybe<DataForDzongkhagConnection>;
  employee?: Maybe<Employee>;
  employees?: Maybe<Array<Maybe<Employee>>>;
  employeesConnection?: Maybe<EmployeeConnection>;
  package?: Maybe<Package>;
  packages?: Maybe<Array<Maybe<Package>>>;
  packagesConnection?: Maybe<PackageConnection>;
  seoOfPage?: Maybe<SeoOfPage>;
  seoOfPages?: Maybe<Array<Maybe<SeoOfPage>>>;
  seoOfPagesConnection?: Maybe<SeoOfPageConnection>;
  testimonial?: Maybe<Testimonial>;
  testimonials?: Maybe<Array<Maybe<Testimonial>>>;
  testimonialsConnection?: Maybe<TestimonialConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
  dzongkhagsCount: Scalars["Int"];
  packagesCount: Scalars["Int"];
  packageTypes?: Maybe<Array<Maybe<PkgTypes>>>;
  testimonialsCount: Scalars["Int"];
};

export type QueryAboutBhutanSectionArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryAboutBhutanSectionsArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryAboutBhutanSectionsConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryDataForDzongkhagArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryDataForDzongkhagsArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryDataForDzongkhagsConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryEmployeeArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryEmployeesArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryEmployeesConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryPackageArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryPackagesArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryPackagesConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QuerySeoOfPageArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QuerySeoOfPagesArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
  publicationState?: Maybe<PublicationState>;
};

export type QuerySeoOfPagesConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryTestimonialArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryTestimonialsArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryTestimonialsConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryFilesArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryRoleArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryRolesArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryUsersArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryDzongkhagsCountArgs = {
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryPackagesCountArgs = {
  where?: Maybe<Scalars["JSON"]>;
};

export type QueryTestimonialsCountArgs = {
  where?: Maybe<Scalars["JSON"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createAboutBhutanSection?: Maybe<CreateAboutBhutanSectionPayload>;
  updateAboutBhutanSection?: Maybe<UpdateAboutBhutanSectionPayload>;
  deleteAboutBhutanSection?: Maybe<DeleteAboutBhutanSectionPayload>;
  createDataForDzongkhag?: Maybe<CreateDataForDzongkhagPayload>;
  updateDataForDzongkhag?: Maybe<UpdateDataForDzongkhagPayload>;
  deleteDataForDzongkhag?: Maybe<DeleteDataForDzongkhagPayload>;
  createEmployee?: Maybe<CreateEmployeePayload>;
  updateEmployee?: Maybe<UpdateEmployeePayload>;
  deleteEmployee?: Maybe<DeleteEmployeePayload>;
  createPackage?: Maybe<CreatePackagePayload>;
  updatePackage?: Maybe<UpdatePackagePayload>;
  deletePackage?: Maybe<DeletePackagePayload>;
  createSeoOfPage?: Maybe<CreateSeoOfPagePayload>;
  updateSeoOfPage?: Maybe<UpdateSeoOfPagePayload>;
  deleteSeoOfPage?: Maybe<DeleteSeoOfPagePayload>;
  createTestimonial?: Maybe<CreateTestimonialPayload>;
  updateTestimonial?: Maybe<UpdateTestimonialPayload>;
  deleteTestimonial?: Maybe<DeleteTestimonialPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};

export type MutationCreateAboutBhutanSectionArgs = {
  input?: Maybe<CreateAboutBhutanSectionInput>;
};

export type MutationUpdateAboutBhutanSectionArgs = {
  input?: Maybe<UpdateAboutBhutanSectionInput>;
};

export type MutationDeleteAboutBhutanSectionArgs = {
  input?: Maybe<DeleteAboutBhutanSectionInput>;
};

export type MutationCreateDataForDzongkhagArgs = {
  input?: Maybe<CreateDataForDzongkhagInput>;
};

export type MutationUpdateDataForDzongkhagArgs = {
  input?: Maybe<UpdateDataForDzongkhagInput>;
};

export type MutationDeleteDataForDzongkhagArgs = {
  input?: Maybe<DeleteDataForDzongkhagInput>;
};

export type MutationCreateEmployeeArgs = {
  input?: Maybe<CreateEmployeeInput>;
};

export type MutationUpdateEmployeeArgs = {
  input?: Maybe<UpdateEmployeeInput>;
};

export type MutationDeleteEmployeeArgs = {
  input?: Maybe<DeleteEmployeeInput>;
};

export type MutationCreatePackageArgs = {
  input?: Maybe<CreatePackageInput>;
};

export type MutationUpdatePackageArgs = {
  input?: Maybe<UpdatePackageInput>;
};

export type MutationDeletePackageArgs = {
  input?: Maybe<DeletePackageInput>;
};

export type MutationCreateSeoOfPageArgs = {
  input?: Maybe<CreateSeoOfPageInput>;
};

export type MutationUpdateSeoOfPageArgs = {
  input?: Maybe<UpdateSeoOfPageInput>;
};

export type MutationDeleteSeoOfPageArgs = {
  input?: Maybe<DeleteSeoOfPageInput>;
};

export type MutationCreateTestimonialArgs = {
  input?: Maybe<CreateTestimonialInput>;
};

export type MutationUpdateTestimonialArgs = {
  input?: Maybe<UpdateTestimonialInput>;
};

export type MutationDeleteTestimonialArgs = {
  input?: Maybe<DeleteTestimonialInput>;
};

export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};

export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};

export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};

export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};

export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};

export type MutationUploadArgs = {
  refId?: Maybe<Scalars["ID"]>;
  ref?: Maybe<Scalars["String"]>;
  field?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  info?: Maybe<FileInfoInput>;
  file: Scalars["Upload"];
};

export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars["ID"]>;
  ref?: Maybe<Scalars["String"]>;
  field?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  files: Array<Maybe<Scalars["Upload"]>>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"];
  info: FileInfoInput;
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationResetPasswordArgs = {
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
  code: Scalars["String"];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"];
};

export type GetEmployeesQueryVariables = Exact<{
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}>;

export type GetEmployeesQuery = { __typename?: "Query" } & {
  employees?: Maybe<
    Array<
      Maybe<
        { __typename?: "Employee" } & Pick<
          Employee,
          | "employeeName"
          | "employeeDescription"
          | "employeeOccupation"
          | "extraDetails"
        > & {
            employeeImage?: Maybe<
              { __typename?: "UploadFile" } & Pick<
                UploadFile,
                "height" | "width" | "caption" | "url"
              >
            >;
          }
      >
    >
  >;
};

export type HomeTestimonialsQueryVariables = Exact<{
  limit?: Maybe<Scalars["Int"]>;
}>;

export type HomeTestimonialsQuery = { __typename?: "Query" } & {
  testimonials?: Maybe<
    Array<
      Maybe<
        { __typename?: "Testimonial" } & Pick<
          Testimonial,
          "_id" | "guestName" | "comments"
        > & {
            image?: Maybe<
              { __typename?: "UploadFile" } & Pick<
                UploadFile,
                "url" | "caption" | "width" | "height"
              >
            >;
          }
      >
    >
  >;
};

export type SeoConfigQueryVariables = Exact<{
  url?: Maybe<Scalars["String"]>;
}>;

export type SeoConfigQuery = { __typename?: "Query" } & {
  seoOfPages?: Maybe<
    Array<
      Maybe<
        { __typename?: "SeoOfPage" } & Pick<
          SeoOfPage,
          "title" | "description" | "canonical"
        > & {
            OpenGraphTags?: Maybe<
              { __typename?: "ComponentSeoOpenGraph" } & Pick<
                ComponentSeoOpenGraph,
                "ogUrl" | "ogTitle" | "ogType" | "ogDescription"
              > & {
                  ogImage?: Maybe<
                    { __typename?: "UploadFile" } & Pick<
                      UploadFile,
                      "url" | "alternativeText" | "width" | "height"
                    >
                  >;
                }
            >;
            TwitterCard?: Maybe<
              { __typename?: "ComponentSeoTwitterCard" } & Pick<
                ComponentSeoTwitterCard,
                "cardType" | "site" | "handle"
              >
            >;
          }
      >
    >
  >;
};

export type DzongkhagQueryVariables = Exact<{
  title?: Maybe<Scalars["String"]>;
}>;

export type DzongkhagQuery = { __typename?: "Query" } & {
  dataForDzongkhags?: Maybe<
    Array<
      Maybe<
        { __typename?: "DataForDzongkhag" } & Pick<
          DataForDzongkhag,
          "title" | "description" | "sectors" | "InterestedPlaces"
        > & {
            coverImage?: Maybe<
              { __typename?: "UploadFile" } & Pick<
                UploadFile,
                "width" | "height" | "url" | "alternativeText"
              >
            >;
          }
      >
    >
  >;
};

export type FilteredPkgCountQueryVariables = Exact<{
  packageType?: Maybe<Scalars["String"]>;
}>;

export type FilteredPkgCountQuery = { __typename?: "Query" } & Pick<
  Query,
  "packagesCount"
>;

export type FullPkgQueryVariables = Exact<{
  title?: Maybe<Scalars["String"]>;
}>;

export type FullPkgQuery = { __typename?: "Query" } & {
  packages?: Maybe<
    Array<
      Maybe<
        { __typename?: "Package" } & Pick<
          Package,
          | "title"
          | "description"
          | "packageHighlight"
          | "packageInsight"
          | "arrival"
          | "departure"
          | "duration"
          | "bestTravelTime"
          | "destinations"
        > & {
            itineraries?: Maybe<
              Array<
                Maybe<
                  { __typename?: "ComponentItineraryItinerary" } & Pick<
                    ComponentItineraryItinerary,
                    | "_id"
                    | "name"
                    | "time"
                    | "distance"
                    | "content"
                    | "altitude"
                  >
                >
              >
            >;
            images?: Maybe<
              Array<
                Maybe<
                  { __typename?: "UploadFile" } & Pick<
                    UploadFile,
                    "url" | "height" | "width" | "alternativeText"
                  >
                >
              >
            >;
          }
      >
    >
  >;
};

export type GetPackagesQueryVariables = Exact<{
  packageType?: Maybe<Scalars["String"]>;
}>;

export type GetPackagesQuery = { __typename?: "Query" } & {
  packages?: Maybe<
    Array<
      Maybe<
        { __typename?: "Package" } & {
          images?: Maybe<
            Array<
              Maybe<
                { __typename?: "UploadFile" } & Pick<
                  UploadFile,
                  "url" | "width" | "height" | "caption"
                >
              >
            >
          >;
        }
      >
    >
  >;
};

export type PackageDetailsQueryVariables = Exact<{
  limit?: Maybe<Scalars["Int"]>;
}>;

export type PackageDetailsQuery = { __typename?: "Query" } & {
  packages?: Maybe<
    Array<
      Maybe<
        { __typename?: "Package" } & Pick<
          Package,
          "title" | "packageType" | "description"
        > & {
            images?: Maybe<
              Array<
                Maybe<
                  { __typename?: "UploadFile" } & Pick<
                    UploadFile,
                    "url" | "height" | "width" | "caption"
                  >
                >
              >
            >;
          }
      >
    >
  >;
};

export type PackagesFilterQueryVariables = Exact<{
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  packageType?: Maybe<Scalars["String"]>;
}>;

export type PackagesFilterQuery = { __typename?: "Query" } & {
  packages?: Maybe<
    Array<
      Maybe<
        { __typename?: "Package" } & Pick<
          Package,
          "title" | "packageId" | "description"
        > & {
            images?: Maybe<
              Array<
                Maybe<
                  { __typename?: "UploadFile" } & Pick<
                    UploadFile,
                    "url" | "height" | "width" | "caption"
                  >
                >
              >
            >;
          }
      >
    >
  >;
};

export type DataAboutBhutanQueryVariables = Exact<{
  url?: Maybe<Scalars["String"]>;
}>;

export type DataAboutBhutanQuery = { __typename?: "Query" } & {
  aboutBhutanSections?: Maybe<
    Array<
      Maybe<
        { __typename?: "AboutBhutanSection" } & Pick<
          AboutBhutanSection,
          "title" | "content"
        > & {
            coverImage?: Maybe<
              { __typename?: "UploadFile" } & Pick<
                UploadFile,
                "width" | "height" | "url" | "caption"
              >
            >;
          }
      >
    >
  >;
};

export type GetTestimonialsQueryVariables = Exact<{
  offset?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
}>;

export type GetTestimonialsQuery = { __typename?: "Query" } & {
  testimonials?: Maybe<
    Array<
      Maybe<
        { __typename?: "Testimonial" } & Pick<
          Testimonial,
          "guestName" | "comments"
        > & {
            image?: Maybe<
              { __typename?: "UploadFile" } & Pick<
                UploadFile,
                "width" | "height" | "url" | "caption"
              >
            >;
          }
      >
    >
  >;
};
