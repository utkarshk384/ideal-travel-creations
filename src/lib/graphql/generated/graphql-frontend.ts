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

export type Itinerary = {
  __typename?: "Itinerary";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  itinerary?: Maybe<Array<Maybe<ComponentItineraryItinerary>>>;
  title?: Maybe<Scalars["String"]>;
  package?: Maybe<Package>;
  published_at?: Maybe<Scalars["DateTime"]>;
};

export type ItineraryConnection = {
  __typename?: "ItineraryConnection";
  values?: Maybe<Array<Maybe<Itinerary>>>;
  groupBy?: Maybe<ItineraryGroupBy>;
  aggregate?: Maybe<ItineraryAggregator>;
};

export type ItineraryAggregator = {
  __typename?: "ItineraryAggregator";
  count?: Maybe<Scalars["Int"]>;
  totalCount?: Maybe<Scalars["Int"]>;
};

export type ItineraryGroupBy = {
  __typename?: "ItineraryGroupBy";
  id?: Maybe<Array<Maybe<ItineraryConnectionId>>>;
  _id?: Maybe<Array<Maybe<ItineraryConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ItineraryConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<ItineraryConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<ItineraryConnectionTitle>>>;
  package?: Maybe<Array<Maybe<ItineraryConnectionPackage>>>;
  published_at?: Maybe<Array<Maybe<ItineraryConnectionPublished_At>>>;
};

export type ItineraryConnectionId = {
  __typename?: "ItineraryConnectionId";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<ItineraryConnection>;
};

export type ItineraryConnection_Id = {
  __typename?: "ItineraryConnection_id";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<ItineraryConnection>;
};

export type ItineraryConnectionCreatedAt = {
  __typename?: "ItineraryConnectionCreatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<ItineraryConnection>;
};

export type ItineraryConnectionUpdatedAt = {
  __typename?: "ItineraryConnectionUpdatedAt";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<ItineraryConnection>;
};

export type ItineraryConnectionTitle = {
  __typename?: "ItineraryConnectionTitle";
  key?: Maybe<Scalars["String"]>;
  connection?: Maybe<ItineraryConnection>;
};

export type ItineraryConnectionPackage = {
  __typename?: "ItineraryConnectionPackage";
  key?: Maybe<Scalars["ID"]>;
  connection?: Maybe<ItineraryConnection>;
};

export type ItineraryConnectionPublished_At = {
  __typename?: "ItineraryConnectionPublished_at";
  key?: Maybe<Scalars["DateTime"]>;
  connection?: Maybe<ItineraryConnection>;
};

export type ItineraryInput = {
  itinerary?: Maybe<Array<Maybe<ComponentItineraryItineraryInput>>>;
  title?: Maybe<Scalars["String"]>;
  package?: Maybe<Scalars["ID"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditItineraryInput = {
  itinerary?: Maybe<Array<Maybe<EditComponentItineraryItineraryInput>>>;
  title?: Maybe<Scalars["String"]>;
  package?: Maybe<Scalars["ID"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type CreateItineraryInput = {
  data?: Maybe<ItineraryInput>;
};

export type CreateItineraryPayload = {
  __typename?: "createItineraryPayload";
  itinerary?: Maybe<Itinerary>;
};

export type UpdateItineraryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditItineraryInput>;
};

export type UpdateItineraryPayload = {
  __typename?: "updateItineraryPayload";
  itinerary?: Maybe<Itinerary>;
};

export type DeleteItineraryInput = {
  where?: Maybe<InputId>;
};

export type DeleteItineraryPayload = {
  __typename?: "deleteItineraryPayload";
  itinerary?: Maybe<Itinerary>;
};

export type Package = {
  __typename?: "Package";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  packageId?: Maybe<Scalars["Int"]>;
  duration: Scalars["String"];
  packageType: Scalars["String"];
  description: Scalars["String"];
  title: Scalars["String"];
  itinerary?: Maybe<Itinerary>;
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
  packageType?: Maybe<Array<Maybe<PackageConnectionPackageType>>>;
  description?: Maybe<Array<Maybe<PackageConnectionDescription>>>;
  title?: Maybe<Array<Maybe<PackageConnectionTitle>>>;
  itinerary?: Maybe<Array<Maybe<PackageConnectionItinerary>>>;
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

export type PackageConnectionPackageType = {
  __typename?: "PackageConnectionPackageType";
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

export type PackageConnectionItinerary = {
  __typename?: "PackageConnectionItinerary";
  key?: Maybe<Scalars["ID"]>;
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
  packageType: Scalars["String"];
  images?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  description: Scalars["String"];
  title: Scalars["String"];
  itinerary?: Maybe<Scalars["ID"]>;
  published_at?: Maybe<Scalars["DateTime"]>;
  created_by?: Maybe<Scalars["ID"]>;
  updated_by?: Maybe<Scalars["ID"]>;
};

export type EditPackageInput = {
  packageId?: Maybe<Scalars["Int"]>;
  duration?: Maybe<Scalars["String"]>;
  packageType?: Maybe<Scalars["String"]>;
  images?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  description?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  itinerary?: Maybe<Scalars["ID"]>;
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

export type ComponentAltitudeAltitude = {
  __typename?: "ComponentAltitudeAltitude";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  initial?: Maybe<Scalars["String"]>;
  final?: Maybe<Scalars["String"]>;
};

export type ComponentAltitudeAltitudeInput = {
  initial?: Maybe<Scalars["String"]>;
  final?: Maybe<Scalars["String"]>;
};

export type EditComponentAltitudeAltitudeInput = {
  id?: Maybe<Scalars["ID"]>;
  initial?: Maybe<Scalars["String"]>;
  final?: Maybe<Scalars["String"]>;
};

export type ComponentItineraryItinerary = {
  __typename?: "ComponentItineraryItinerary";
  id: Scalars["ID"];
  _id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  time?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["String"]>;
  altitude?: Maybe<ComponentAltitudeAltitude>;
};

export type ComponentItineraryItineraryInput = {
  name?: Maybe<Scalars["String"]>;
  time?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["String"]>;
  altitude?: Maybe<ComponentAltitudeAltitudeInput>;
};

export type EditComponentItineraryItineraryInput = {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  time?: Maybe<Scalars["String"]>;
  distance?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["String"]>;
  altitude?: Maybe<EditComponentAltitudeAltitudeInput>;
};

export type Morph =
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsLoginPayload
  | UserPermissionsPasswordPayload
  | Itinerary
  | ItineraryConnection
  | ItineraryAggregator
  | ItineraryGroupBy
  | ItineraryConnectionId
  | ItineraryConnection_Id
  | ItineraryConnectionCreatedAt
  | ItineraryConnectionUpdatedAt
  | ItineraryConnectionTitle
  | ItineraryConnectionPackage
  | ItineraryConnectionPublished_At
  | CreateItineraryPayload
  | UpdateItineraryPayload
  | DeleteItineraryPayload
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
  | PackageConnectionPackageType
  | PackageConnectionDescription
  | PackageConnectionTitle
  | PackageConnectionItinerary
  | PackageConnectionPublished_At
  | CreatePackagePayload
  | UpdatePackagePayload
  | DeletePackagePayload
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
  | ComponentAltitudeAltitude
  | ComponentItineraryItinerary;

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
  itinerary?: Maybe<Itinerary>;
  itineraries?: Maybe<Array<Maybe<Itinerary>>>;
  itinerariesConnection?: Maybe<ItineraryConnection>;
  package?: Maybe<Package>;
  packages?: Maybe<Array<Maybe<Package>>>;
  packagesConnection?: Maybe<PackageConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  packagesCount: Scalars["Int"];
  me?: Maybe<UsersPermissionsMe>;
};

export type QueryItineraryArgs = {
  id: Scalars["ID"];
  publicationState?: Maybe<PublicationState>;
};

export type QueryItinerariesArgs = {
  sort?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
  where?: Maybe<Scalars["JSON"]>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryItinerariesConnectionArgs = {
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

export type QueryPackagesCountArgs = {
  where?: Maybe<Scalars["JSON"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createItinerary?: Maybe<CreateItineraryPayload>;
  updateItinerary?: Maybe<UpdateItineraryPayload>;
  deleteItinerary?: Maybe<DeleteItineraryPayload>;
  createPackage?: Maybe<CreatePackagePayload>;
  updatePackage?: Maybe<UpdatePackagePayload>;
  deletePackage?: Maybe<DeletePackagePayload>;
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

export type MutationCreateItineraryArgs = {
  input?: Maybe<CreateItineraryInput>;
};

export type MutationUpdateItineraryArgs = {
  input?: Maybe<UpdateItineraryInput>;
};

export type MutationDeleteItineraryArgs = {
  input?: Maybe<DeleteItineraryInput>;
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

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export type GetBasicPackagesQueryVariables = Exact<{
  limit?: Maybe<Scalars["Int"]>;
}>;

export type GetBasicPackagesQuery = { __typename?: "Query" } & {
  packages?: Maybe<
    Array<
      Maybe<
        { __typename?: "Package" } & Pick<Package, "title" | "description"> & {
            images?: Maybe<
              Array<
                Maybe<{ __typename?: "UploadFile" } & Pick<UploadFile, "url">>
              >
            >;
          }
      >
    >
  >;
};
