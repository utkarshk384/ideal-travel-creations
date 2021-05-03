export const typeDefs = `
type pkgTypes {
  name: String!
  description: String!
}

input FileInfoInput {
  name: String
  alternativeText: String
  caption: String
}

type UsersPermissionsMe {
  id: ID!
  username: String!
  email: String!
  confirmed: Boolean
  blocked: Boolean
  role: UsersPermissionsMeRole
}

type UsersPermissionsMeRole {
  id: ID!
  name: String!
  description: String
  type: String
}

input UsersPermissionsRegisterInput {
  username: String!
  email: String!
  password: String!
}

input UsersPermissionsLoginInput {
  identifier: String!
  password: String!
  provider: String = "local"
}

type UsersPermissionsLoginPayload {
  jwt: String
  user: UsersPermissionsMe!
}

type UserPermissionsPasswordPayload {
  ok: Boolean!
}

type AboutBhutanSection {
  id: ID!
  _id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  content: String!
  coverImage: UploadFile
  url: String
  published_at: DateTime
}

type AboutBhutanSectionConnection {
  values: [AboutBhutanSection]
  groupBy: AboutBhutanSectionGroupBy
  aggregate: AboutBhutanSectionAggregator
}

type AboutBhutanSectionAggregator {
  count: Int
  totalCount: Int
}

type AboutBhutanSectionGroupBy {
  id: [AboutBhutanSectionConnectionId]
  _id: [AboutBhutanSectionConnection_id]
  createdAt: [AboutBhutanSectionConnectionCreatedAt]
  updatedAt: [AboutBhutanSectionConnectionUpdatedAt]
  title: [AboutBhutanSectionConnectionTitle]
  content: [AboutBhutanSectionConnectionContent]
  coverImage: [AboutBhutanSectionConnectionCoverImage]
  url: [AboutBhutanSectionConnectionUrl]
  published_at: [AboutBhutanSectionConnectionPublished_at]
}

type AboutBhutanSectionConnectionId {
  key: ID
  connection: AboutBhutanSectionConnection
}

type AboutBhutanSectionConnection_id {
  key: ID
  connection: AboutBhutanSectionConnection
}

type AboutBhutanSectionConnectionCreatedAt {
  key: DateTime
  connection: AboutBhutanSectionConnection
}

type AboutBhutanSectionConnectionUpdatedAt {
  key: DateTime
  connection: AboutBhutanSectionConnection
}

type AboutBhutanSectionConnectionTitle {
  key: String
  connection: AboutBhutanSectionConnection
}

type AboutBhutanSectionConnectionContent {
  key: String
  connection: AboutBhutanSectionConnection
}

type AboutBhutanSectionConnectionCoverImage {
  key: ID
  connection: AboutBhutanSectionConnection
}

type AboutBhutanSectionConnectionUrl {
  key: String
  connection: AboutBhutanSectionConnection
}

type AboutBhutanSectionConnectionPublished_at {
  key: DateTime
  connection: AboutBhutanSectionConnection
}

input AboutBhutanSectionInput {
  title: String!
  content: String!
  coverImage: ID
  url: String
  published_at: DateTime
  created_by: ID
  updated_by: ID
}

input editAboutBhutanSectionInput {
  title: String
  content: String
  coverImage: ID
  url: String
  published_at: DateTime
  created_by: ID
  updated_by: ID
}

input createAboutBhutanSectionInput {
  data: AboutBhutanSectionInput
}

type createAboutBhutanSectionPayload {
  aboutBhutanSection: AboutBhutanSection
}

input updateAboutBhutanSectionInput {
  where: InputID
  data: editAboutBhutanSectionInput
}

type updateAboutBhutanSectionPayload {
  aboutBhutanSection: AboutBhutanSection
}

input deleteAboutBhutanSectionInput {
  where: InputID
}

type deleteAboutBhutanSectionPayload {
  aboutBhutanSection: AboutBhutanSection
}

enum ENUM_DATAFORDZONGKHAG_SECTORS {
  WesternBhutan
  CentralBhutan
  EasternBhutan
}

type DataForDzongkhag {
  id: ID!
  _id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  description: String!
  InterestedPlaces: String!
  coverImage: UploadFile
  sectors: ENUM_DATAFORDZONGKHAG_SECTORS!
  uniqueID: Int!
  published_at: DateTime
}

type DataForDzongkhagConnection {
  values: [DataForDzongkhag]
  groupBy: DataForDzongkhagGroupBy
  aggregate: DataForDzongkhagAggregator
}

type DataForDzongkhagAggregator {
  count: Int
  totalCount: Int
  sum: DataForDzongkhagAggregatorSum
  avg: DataForDzongkhagAggregatorAvg
  min: DataForDzongkhagAggregatorMin
  max: DataForDzongkhagAggregatorMax
}

type DataForDzongkhagAggregatorSum {
  uniqueID: Float
}

type DataForDzongkhagAggregatorAvg {
  uniqueID: Float
}

type DataForDzongkhagAggregatorMin {
  uniqueID: Float
}

type DataForDzongkhagAggregatorMax {
  uniqueID: Float
}

type DataForDzongkhagGroupBy {
  id: [DataForDzongkhagConnectionId]
  _id: [DataForDzongkhagConnection_id]
  createdAt: [DataForDzongkhagConnectionCreatedAt]
  updatedAt: [DataForDzongkhagConnectionUpdatedAt]
  title: [DataForDzongkhagConnectionTitle]
  description: [DataForDzongkhagConnectionDescription]
  InterestedPlaces: [DataForDzongkhagConnectionInterestedPlaces]
  coverImage: [DataForDzongkhagConnectionCoverImage]
  sectors: [DataForDzongkhagConnectionSectors]
  uniqueID: [DataForDzongkhagConnectionUniqueID]
  published_at: [DataForDzongkhagConnectionPublished_at]
}

type DataForDzongkhagConnectionId {
  key: ID
  connection: DataForDzongkhagConnection
}

type DataForDzongkhagConnection_id {
  key: ID
  connection: DataForDzongkhagConnection
}

type DataForDzongkhagConnectionCreatedAt {
  key: DateTime
  connection: DataForDzongkhagConnection
}

type DataForDzongkhagConnectionUpdatedAt {
  key: DateTime
  connection: DataForDzongkhagConnection
}

type DataForDzongkhagConnectionTitle {
  key: String
  connection: DataForDzongkhagConnection
}

type DataForDzongkhagConnectionDescription {
  key: String
  connection: DataForDzongkhagConnection
}

type DataForDzongkhagConnectionInterestedPlaces {
  key: String
  connection: DataForDzongkhagConnection
}

type DataForDzongkhagConnectionCoverImage {
  key: ID
  connection: DataForDzongkhagConnection
}

type DataForDzongkhagConnectionSectors {
  key: String
  connection: DataForDzongkhagConnection
}

type DataForDzongkhagConnectionUniqueID {
  key: Int
  connection: DataForDzongkhagConnection
}

type DataForDzongkhagConnectionPublished_at {
  key: DateTime
  connection: DataForDzongkhagConnection
}

input DataForDzongkhagInput {
  title: String!
  description: String!
  InterestedPlaces: String!
  coverImage: ID
  sectors: ENUM_DATAFORDZONGKHAG_SECTORS
  uniqueID: Int!
  published_at: DateTime
  created_by: ID
  updated_by: ID
}

input editDataForDzongkhagInput {
  title: String
  description: String
  InterestedPlaces: String
  coverImage: ID
  sectors: ENUM_DATAFORDZONGKHAG_SECTORS
  uniqueID: Int
  published_at: DateTime
  created_by: ID
  updated_by: ID
}

input createDataForDzongkhagInput {
  data: DataForDzongkhagInput
}

type createDataForDzongkhagPayload {
  dataForDzongkhag: DataForDzongkhag
}

input updateDataForDzongkhagInput {
  where: InputID
  data: editDataForDzongkhagInput
}

type updateDataForDzongkhagPayload {
  dataForDzongkhag: DataForDzongkhag
}

input deleteDataForDzongkhagInput {
  where: InputID
}

type deleteDataForDzongkhagPayload {
  dataForDzongkhag: DataForDzongkhag
}

type Employee {
  id: ID!
  _id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  employeeName: String!
  employeeOccupation: String!
  employeeDescription: String!
  employeeImage: UploadFile
  employeeID: Int!
  extraDetails: String
}

type EmployeeConnection {
  values: [Employee]
  groupBy: EmployeeGroupBy
  aggregate: EmployeeAggregator
}

type EmployeeAggregator {
  count: Int
  totalCount: Int
  sum: EmployeeAggregatorSum
  avg: EmployeeAggregatorAvg
  min: EmployeeAggregatorMin
  max: EmployeeAggregatorMax
}

type EmployeeAggregatorSum {
  employeeID: Float
}

type EmployeeAggregatorAvg {
  employeeID: Float
}

type EmployeeAggregatorMin {
  employeeID: Float
}

type EmployeeAggregatorMax {
  employeeID: Float
}

type EmployeeGroupBy {
  id: [EmployeeConnectionId]
  _id: [EmployeeConnection_id]
  createdAt: [EmployeeConnectionCreatedAt]
  updatedAt: [EmployeeConnectionUpdatedAt]
  employeeName: [EmployeeConnectionEmployeeName]
  employeeOccupation: [EmployeeConnectionEmployeeOccupation]
  employeeDescription: [EmployeeConnectionEmployeeDescription]
  employeeImage: [EmployeeConnectionEmployeeImage]
  employeeID: [EmployeeConnectionEmployeeID]
  extraDetails: [EmployeeConnectionExtraDetails]
}

type EmployeeConnectionId {
  key: ID
  connection: EmployeeConnection
}

type EmployeeConnection_id {
  key: ID
  connection: EmployeeConnection
}

type EmployeeConnectionCreatedAt {
  key: DateTime
  connection: EmployeeConnection
}

type EmployeeConnectionUpdatedAt {
  key: DateTime
  connection: EmployeeConnection
}

type EmployeeConnectionEmployeeName {
  key: String
  connection: EmployeeConnection
}

type EmployeeConnectionEmployeeOccupation {
  key: String
  connection: EmployeeConnection
}

type EmployeeConnectionEmployeeDescription {
  key: String
  connection: EmployeeConnection
}

type EmployeeConnectionEmployeeImage {
  key: ID
  connection: EmployeeConnection
}

type EmployeeConnectionEmployeeID {
  key: Int
  connection: EmployeeConnection
}

type EmployeeConnectionExtraDetails {
  key: String
  connection: EmployeeConnection
}

input EmployeeInput {
  employeeName: String!
  employeeOccupation: String!
  employeeDescription: String!
  employeeImage: ID
  employeeID: Int!
  extraDetails: String
  created_by: ID
  updated_by: ID
}

input editEmployeeInput {
  employeeName: String
  employeeOccupation: String
  employeeDescription: String
  employeeImage: ID
  employeeID: Int
  extraDetails: String
  created_by: ID
  updated_by: ID
}

input createEmployeeInput {
  data: EmployeeInput
}

type createEmployeePayload {
  employee: Employee
}

input updateEmployeeInput {
  where: InputID
  data: editEmployeeInput
}

type updateEmployeePayload {
  employee: Employee
}

input deleteEmployeeInput {
  where: InputID
}

type deleteEmployeePayload {
  employee: Employee
}

enum ENUM_PACKAGE_PACKAGETYPE {
  BhutanLuxuryTours
  CulturalToursInBhutan
  TrekkingInBhutan
  BhutanFestivalTours
  WomenExclusiveTours
  StudentEducationalTours
  PhotographTours
  MotorBikeAndCyclingTours
  SpecialInterestTours
}

type Package {
  id: ID!
  _id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  packageId: Int
  duration: String!
  description: String!
  title: String!
  packageInsight: String!
  packageType: ENUM_PACKAGE_PACKAGETYPE!
  packageHighlight: String!
  bestTravelTime: String
  arrival: String
  departure: String
  destinations: String!
  itineraries: [ComponentItineraryItinerary]
  published_at: DateTime
  images(sort: String, limit: Int, start: Int, where: JSON): [UploadFile]
}

type PackageConnection {
  values: [Package]
  groupBy: PackageGroupBy
  aggregate: PackageAggregator
}

type PackageAggregator {
  count: Int
  totalCount: Int
  sum: PackageAggregatorSum
  avg: PackageAggregatorAvg
  min: PackageAggregatorMin
  max: PackageAggregatorMax
}

type PackageAggregatorSum {
  packageId: Float
}

type PackageAggregatorAvg {
  packageId: Float
}

type PackageAggregatorMin {
  packageId: Float
}

type PackageAggregatorMax {
  packageId: Float
}

type PackageGroupBy {
  id: [PackageConnectionId]
  _id: [PackageConnection_id]
  createdAt: [PackageConnectionCreatedAt]
  updatedAt: [PackageConnectionUpdatedAt]
  packageId: [PackageConnectionPackageId]
  duration: [PackageConnectionDuration]
  description: [PackageConnectionDescription]
  title: [PackageConnectionTitle]
  packageInsight: [PackageConnectionPackageInsight]
  packageType: [PackageConnectionPackageType]
  packageHighlight: [PackageConnectionPackageHighlight]
  bestTravelTime: [PackageConnectionBestTravelTime]
  arrival: [PackageConnectionArrival]
  departure: [PackageConnectionDeparture]
  destinations: [PackageConnectionDestinations]
  published_at: [PackageConnectionPublished_at]
}

type PackageConnectionId {
  key: ID
  connection: PackageConnection
}

type PackageConnection_id {
  key: ID
  connection: PackageConnection
}

type PackageConnectionCreatedAt {
  key: DateTime
  connection: PackageConnection
}

type PackageConnectionUpdatedAt {
  key: DateTime
  connection: PackageConnection
}

type PackageConnectionPackageId {
  key: Int
  connection: PackageConnection
}

type PackageConnectionDuration {
  key: String
  connection: PackageConnection
}

type PackageConnectionDescription {
  key: String
  connection: PackageConnection
}

type PackageConnectionTitle {
  key: String
  connection: PackageConnection
}

type PackageConnectionPackageInsight {
  key: String
  connection: PackageConnection
}

type PackageConnectionPackageType {
  key: String
  connection: PackageConnection
}

type PackageConnectionPackageHighlight {
  key: String
  connection: PackageConnection
}

type PackageConnectionBestTravelTime {
  key: String
  connection: PackageConnection
}

type PackageConnectionArrival {
  key: String
  connection: PackageConnection
}

type PackageConnectionDeparture {
  key: String
  connection: PackageConnection
}

type PackageConnectionDestinations {
  key: String
  connection: PackageConnection
}

type PackageConnectionPublished_at {
  key: DateTime
  connection: PackageConnection
}

input PackageInput {
  packageId: Int
  duration: String!
  images: [ID]
  description: String!
  title: String!
  packageInsight: String!
  packageType: ENUM_PACKAGE_PACKAGETYPE!
  packageHighlight: String!
  bestTravelTime: String
  arrival: String
  departure: String
  destinations: String!
  itineraries: [ComponentItineraryItineraryInput]
  published_at: DateTime
  created_by: ID
  updated_by: ID
}

input editPackageInput {
  packageId: Int
  duration: String
  images: [ID]
  description: String
  title: String
  packageInsight: String
  packageType: ENUM_PACKAGE_PACKAGETYPE
  packageHighlight: String
  bestTravelTime: String
  arrival: String
  departure: String
  destinations: String
  itineraries: [editComponentItineraryItineraryInput]
  published_at: DateTime
  created_by: ID
  updated_by: ID
}

input createPackageInput {
  data: PackageInput
}

type createPackagePayload {
  package: Package
}

input updatePackageInput {
  where: InputID
  data: editPackageInput
}

type updatePackagePayload {
  package: Package
}

input deletePackageInput {
  where: InputID
}

type deletePackagePayload {
  package: Package
}

type Testimonial {
  id: ID!
  _id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  guestName: String!
  image: UploadFile
  comments: String!
  uniqueId: Int
  published_at: DateTime
}

type TestimonialConnection {
  values: [Testimonial]
  groupBy: TestimonialGroupBy
  aggregate: TestimonialAggregator
}

type TestimonialAggregator {
  count: Int
  totalCount: Int
  sum: TestimonialAggregatorSum
  avg: TestimonialAggregatorAvg
  min: TestimonialAggregatorMin
  max: TestimonialAggregatorMax
}

type TestimonialAggregatorSum {
  uniqueId: Float
}

type TestimonialAggregatorAvg {
  uniqueId: Float
}

type TestimonialAggregatorMin {
  uniqueId: Float
}

type TestimonialAggregatorMax {
  uniqueId: Float
}

type TestimonialGroupBy {
  id: [TestimonialConnectionId]
  _id: [TestimonialConnection_id]
  createdAt: [TestimonialConnectionCreatedAt]
  updatedAt: [TestimonialConnectionUpdatedAt]
  guestName: [TestimonialConnectionGuestName]
  image: [TestimonialConnectionImage]
  comments: [TestimonialConnectionComments]
  uniqueId: [TestimonialConnectionUniqueId]
  published_at: [TestimonialConnectionPublished_at]
}

type TestimonialConnectionId {
  key: ID
  connection: TestimonialConnection
}

type TestimonialConnection_id {
  key: ID
  connection: TestimonialConnection
}

type TestimonialConnectionCreatedAt {
  key: DateTime
  connection: TestimonialConnection
}

type TestimonialConnectionUpdatedAt {
  key: DateTime
  connection: TestimonialConnection
}

type TestimonialConnectionGuestName {
  key: String
  connection: TestimonialConnection
}

type TestimonialConnectionImage {
  key: ID
  connection: TestimonialConnection
}

type TestimonialConnectionComments {
  key: String
  connection: TestimonialConnection
}

type TestimonialConnectionUniqueId {
  key: Int
  connection: TestimonialConnection
}

type TestimonialConnectionPublished_at {
  key: DateTime
  connection: TestimonialConnection
}

input TestimonialInput {
  guestName: String!
  image: ID
  comments: String!
  uniqueId: Int
  published_at: DateTime
  created_by: ID
  updated_by: ID
}

input editTestimonialInput {
  guestName: String
  image: ID
  comments: String
  uniqueId: Int
  published_at: DateTime
  created_by: ID
  updated_by: ID
}

input createTestimonialInput {
  data: TestimonialInput
}

type createTestimonialPayload {
  testimonial: Testimonial
}

input updateTestimonialInput {
  where: InputID
  data: editTestimonialInput
}

type updateTestimonialPayload {
  testimonial: Testimonial
}

input deleteTestimonialInput {
  where: InputID
}

type deleteTestimonialPayload {
  testimonial: Testimonial
}

type UploadFile {
  id: ID!
  _id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  alternativeText: String
  caption: String
  width: Int
  height: Int
  formats: JSON
  hash: String!
  ext: String
  mime: String!
  size: Float!
  url: String!
  previewUrl: String
  provider: String!
  provider_metadata: JSON
  related(sort: String, limit: Int, start: Int, where: JSON): [Morph]
}

type UploadFileConnection {
  values: [UploadFile]
  groupBy: UploadFileGroupBy
  aggregate: UploadFileAggregator
}

type UploadFileAggregator {
  count: Int
  totalCount: Int
  sum: UploadFileAggregatorSum
  avg: UploadFileAggregatorAvg
  min: UploadFileAggregatorMin
  max: UploadFileAggregatorMax
}

type UploadFileAggregatorSum {
  width: Float
  height: Float
  size: Float
}

type UploadFileAggregatorAvg {
  width: Float
  height: Float
  size: Float
}

type UploadFileAggregatorMin {
  width: Float
  height: Float
  size: Float
}

type UploadFileAggregatorMax {
  width: Float
  height: Float
  size: Float
}

type UploadFileGroupBy {
  id: [UploadFileConnectionId]
  _id: [UploadFileConnection_id]
  createdAt: [UploadFileConnectionCreatedAt]
  updatedAt: [UploadFileConnectionUpdatedAt]
  name: [UploadFileConnectionName]
  alternativeText: [UploadFileConnectionAlternativeText]
  caption: [UploadFileConnectionCaption]
  width: [UploadFileConnectionWidth]
  height: [UploadFileConnectionHeight]
  formats: [UploadFileConnectionFormats]
  hash: [UploadFileConnectionHash]
  ext: [UploadFileConnectionExt]
  mime: [UploadFileConnectionMime]
  size: [UploadFileConnectionSize]
  url: [UploadFileConnectionUrl]
  previewUrl: [UploadFileConnectionPreviewUrl]
  provider: [UploadFileConnectionProvider]
  provider_metadata: [UploadFileConnectionProvider_metadata]
}

type UploadFileConnectionId {
  key: ID
  connection: UploadFileConnection
}

type UploadFileConnection_id {
  key: ID
  connection: UploadFileConnection
}

type UploadFileConnectionCreatedAt {
  key: DateTime
  connection: UploadFileConnection
}

type UploadFileConnectionUpdatedAt {
  key: DateTime
  connection: UploadFileConnection
}

type UploadFileConnectionName {
  key: String
  connection: UploadFileConnection
}

type UploadFileConnectionAlternativeText {
  key: String
  connection: UploadFileConnection
}

type UploadFileConnectionCaption {
  key: String
  connection: UploadFileConnection
}

type UploadFileConnectionWidth {
  key: Int
  connection: UploadFileConnection
}

type UploadFileConnectionHeight {
  key: Int
  connection: UploadFileConnection
}

type UploadFileConnectionFormats {
  key: JSON
  connection: UploadFileConnection
}

type UploadFileConnectionHash {
  key: String
  connection: UploadFileConnection
}

type UploadFileConnectionExt {
  key: String
  connection: UploadFileConnection
}

type UploadFileConnectionMime {
  key: String
  connection: UploadFileConnection
}

type UploadFileConnectionSize {
  key: Float
  connection: UploadFileConnection
}

type UploadFileConnectionUrl {
  key: String
  connection: UploadFileConnection
}

type UploadFileConnectionPreviewUrl {
  key: String
  connection: UploadFileConnection
}

type UploadFileConnectionProvider {
  key: String
  connection: UploadFileConnection
}

type UploadFileConnectionProvider_metadata {
  key: JSON
  connection: UploadFileConnection
}

input FileInput {
  name: String!
  alternativeText: String
  caption: String
  width: Int
  height: Int
  formats: JSON
  hash: String!
  ext: String
  mime: String!
  size: Float!
  url: String!
  previewUrl: String
  provider: String!
  provider_metadata: JSON
  related: [ID]
  created_by: ID
  updated_by: ID
}

input editFileInput {
  name: String
  alternativeText: String
  caption: String
  width: Int
  height: Int
  formats: JSON
  hash: String
  ext: String
  mime: String
  size: Float
  url: String
  previewUrl: String
  provider: String
  provider_metadata: JSON
  related: [ID]
  created_by: ID
  updated_by: ID
}

input deleteFileInput {
  where: InputID
}

type deleteFilePayload {
  file: UploadFile
}

type UsersPermissionsPermission {
  id: ID!
  _id: ID!
  type: String!
  controller: String!
  action: String!
  enabled: Boolean!
  policy: String
  role: UsersPermissionsRole
}

type UsersPermissionsRole {
  id: ID!
  _id: ID!
  name: String!
  description: String
  type: String
  permissions(sort: String, limit: Int, start: Int, where: JSON): [UsersPermissionsPermission]
  users(sort: String, limit: Int, start: Int, where: JSON): [UsersPermissionsUser]
}

type UsersPermissionsRoleConnection {
  values: [UsersPermissionsRole]
  groupBy: UsersPermissionsRoleGroupBy
  aggregate: UsersPermissionsRoleAggregator
}

type UsersPermissionsRoleAggregator {
  count: Int
  totalCount: Int
}

type UsersPermissionsRoleGroupBy {
  id: [UsersPermissionsRoleConnectionId]
  _id: [UsersPermissionsRoleConnection_id]
  name: [UsersPermissionsRoleConnectionName]
  description: [UsersPermissionsRoleConnectionDescription]
  type: [UsersPermissionsRoleConnectionType]
}

type UsersPermissionsRoleConnectionId {
  key: ID
  connection: UsersPermissionsRoleConnection
}

type UsersPermissionsRoleConnection_id {
  key: ID
  connection: UsersPermissionsRoleConnection
}

type UsersPermissionsRoleConnectionName {
  key: String
  connection: UsersPermissionsRoleConnection
}

type UsersPermissionsRoleConnectionDescription {
  key: String
  connection: UsersPermissionsRoleConnection
}

type UsersPermissionsRoleConnectionType {
  key: String
  connection: UsersPermissionsRoleConnection
}

input RoleInput {
  name: String!
  description: String
  type: String
  permissions: [ID]
  users: [ID]
  created_by: ID
  updated_by: ID
}

input editRoleInput {
  name: String
  description: String
  type: String
  permissions: [ID]
  users: [ID]
  created_by: ID
  updated_by: ID
}

input createRoleInput {
  data: RoleInput
}

type createRolePayload {
  role: UsersPermissionsRole
}

input updateRoleInput {
  where: InputID
  data: editRoleInput
}

type updateRolePayload {
  role: UsersPermissionsRole
}

input deleteRoleInput {
  where: InputID
}

type deleteRolePayload {
  role: UsersPermissionsRole
}

type UsersPermissionsUser {
  id: ID!
  _id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  username: String!
  email: String!
  provider: String
  confirmed: Boolean
  blocked: Boolean
  role: UsersPermissionsRole
}

type UsersPermissionsUserConnection {
  values: [UsersPermissionsUser]
  groupBy: UsersPermissionsUserGroupBy
  aggregate: UsersPermissionsUserAggregator
}

type UsersPermissionsUserAggregator {
  count: Int
  totalCount: Int
}

type UsersPermissionsUserGroupBy {
  id: [UsersPermissionsUserConnectionId]
  _id: [UsersPermissionsUserConnection_id]
  createdAt: [UsersPermissionsUserConnectionCreatedAt]
  updatedAt: [UsersPermissionsUserConnectionUpdatedAt]
  username: [UsersPermissionsUserConnectionUsername]
  email: [UsersPermissionsUserConnectionEmail]
  provider: [UsersPermissionsUserConnectionProvider]
  confirmed: [UsersPermissionsUserConnectionConfirmed]
  blocked: [UsersPermissionsUserConnectionBlocked]
  role: [UsersPermissionsUserConnectionRole]
}

type UsersPermissionsUserConnectionId {
  key: ID
  connection: UsersPermissionsUserConnection
}

type UsersPermissionsUserConnection_id {
  key: ID
  connection: UsersPermissionsUserConnection
}

type UsersPermissionsUserConnectionCreatedAt {
  key: DateTime
  connection: UsersPermissionsUserConnection
}

type UsersPermissionsUserConnectionUpdatedAt {
  key: DateTime
  connection: UsersPermissionsUserConnection
}

type UsersPermissionsUserConnectionUsername {
  key: String
  connection: UsersPermissionsUserConnection
}

type UsersPermissionsUserConnectionEmail {
  key: String
  connection: UsersPermissionsUserConnection
}

type UsersPermissionsUserConnectionProvider {
  key: String
  connection: UsersPermissionsUserConnection
}

type UsersPermissionsUserConnectionConfirmed {
  key: Boolean
  connection: UsersPermissionsUserConnection
}

type UsersPermissionsUserConnectionBlocked {
  key: Boolean
  connection: UsersPermissionsUserConnection
}

type UsersPermissionsUserConnectionRole {
  key: ID
  connection: UsersPermissionsUserConnection
}

input UserInput {
  username: String!
  email: String!
  provider: String
  password: String
  resetPasswordToken: String
  confirmationToken: String
  confirmed: Boolean
  blocked: Boolean
  role: ID
  created_by: ID
  updated_by: ID
}

input editUserInput {
  username: String
  email: String
  provider: String
  password: String
  resetPasswordToken: String
  confirmationToken: String
  confirmed: Boolean
  blocked: Boolean
  role: ID
  created_by: ID
  updated_by: ID
}

input createUserInput {
  data: UserInput
}

type createUserPayload {
  user: UsersPermissionsUser
}

input updateUserInput {
  where: InputID
  data: editUserInput
}

type updateUserPayload {
  user: UsersPermissionsUser
}

input deleteUserInput {
  where: InputID
}

type deleteUserPayload {
  user: UsersPermissionsUser
}

type ComponentItineraryItinerary {
  id: ID!
  _id: ID!
  name: String
  time: String
  distance: Int
  content: String
  altitude: String
  key: String
}

input ComponentItineraryItineraryInput {
  name: String
  time: String
  distance: Int
  content: String
  altitude: String
  key: String
}

input editComponentItineraryItineraryInput {
  id: ID
  name: String
  time: String
  distance: Int
  content: String
  altitude: String
  key: String
}

union Morph = pkgTypes | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | AboutBhutanSection | AboutBhutanSectionConnection | AboutBhutanSectionAggregator | AboutBhutanSectionGroupBy | AboutBhutanSectionConnectionId | AboutBhutanSectionConnection_id | AboutBhutanSectionConnectionCreatedAt | AboutBhutanSectionConnectionUpdatedAt | AboutBhutanSectionConnectionTitle | AboutBhutanSectionConnectionContent | AboutBhutanSectionConnectionCoverImage | AboutBhutanSectionConnectionUrl | AboutBhutanSectionConnectionPublished_at | createAboutBhutanSectionPayload | updateAboutBhutanSectionPayload | deleteAboutBhutanSectionPayload | DataForDzongkhag | DataForDzongkhagConnection | DataForDzongkhagAggregator | DataForDzongkhagAggregatorSum | DataForDzongkhagAggregatorAvg | DataForDzongkhagAggregatorMin | DataForDzongkhagAggregatorMax | DataForDzongkhagGroupBy | DataForDzongkhagConnectionId | DataForDzongkhagConnection_id | DataForDzongkhagConnectionCreatedAt | DataForDzongkhagConnectionUpdatedAt | DataForDzongkhagConnectionTitle | DataForDzongkhagConnectionDescription | DataForDzongkhagConnectionInterestedPlaces | DataForDzongkhagConnectionCoverImage | DataForDzongkhagConnectionSectors | DataForDzongkhagConnectionUniqueID | DataForDzongkhagConnectionPublished_at | createDataForDzongkhagPayload | updateDataForDzongkhagPayload | deleteDataForDzongkhagPayload | Employee | EmployeeConnection | EmployeeAggregator | EmployeeAggregatorSum | EmployeeAggregatorAvg | EmployeeAggregatorMin | EmployeeAggregatorMax | EmployeeGroupBy | EmployeeConnectionId | EmployeeConnection_id | EmployeeConnectionCreatedAt | EmployeeConnectionUpdatedAt | EmployeeConnectionEmployeeName | EmployeeConnectionEmployeeOccupation | EmployeeConnectionEmployeeDescription | EmployeeConnectionEmployeeImage | EmployeeConnectionEmployeeID | EmployeeConnectionExtraDetails | createEmployeePayload | updateEmployeePayload | deleteEmployeePayload | Package | PackageConnection | PackageAggregator | PackageAggregatorSum | PackageAggregatorAvg | PackageAggregatorMin | PackageAggregatorMax | PackageGroupBy | PackageConnectionId | PackageConnection_id | PackageConnectionCreatedAt | PackageConnectionUpdatedAt | PackageConnectionPackageId | PackageConnectionDuration | PackageConnectionDescription | PackageConnectionTitle | PackageConnectionPackageInsight | PackageConnectionPackageType | PackageConnectionPackageHighlight | PackageConnectionBestTravelTime | PackageConnectionArrival | PackageConnectionDeparture | PackageConnectionDestinations | PackageConnectionPublished_at | createPackagePayload | updatePackagePayload | deletePackagePayload | Testimonial | TestimonialConnection | TestimonialAggregator | TestimonialAggregatorSum | TestimonialAggregatorAvg | TestimonialAggregatorMin | TestimonialAggregatorMax | TestimonialGroupBy | TestimonialConnectionId | TestimonialConnection_id | TestimonialConnectionCreatedAt | TestimonialConnectionUpdatedAt | TestimonialConnectionGuestName | TestimonialConnectionImage | TestimonialConnectionComments | TestimonialConnectionUniqueId | TestimonialConnectionPublished_at | createTestimonialPayload | updateTestimonialPayload | deleteTestimonialPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnection_id | UploadFileConnectionCreatedAt | UploadFileConnectionUpdatedAt | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_metadata | deleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnection_id | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | createRolePayload | updateRolePayload | deleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnection_id | UsersPermissionsUserConnectionCreatedAt | UsersPermissionsUserConnectionUpdatedAt | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | createUserPayload | updateUserPayload | deleteUserPayload | ComponentItineraryItinerary

input InputID {
  id: ID!
}

enum PublicationState {
  LIVE
  PREVIEW
}

type AdminUser {
  id: ID!
  username: String
  firstname: String!
  lastname: String!
}

type Query {
  aboutBhutanSection(id: ID!, publicationState: PublicationState): AboutBhutanSection
  aboutBhutanSections(sort: String, limit: Int, start: Int, where: JSON, publicationState: PublicationState): [AboutBhutanSection]
  aboutBhutanSectionsConnection(sort: String, limit: Int, start: Int, where: JSON): AboutBhutanSectionConnection
  dataForDzongkhag(id: ID!, publicationState: PublicationState): DataForDzongkhag
  dataForDzongkhags(sort: String, limit: Int, start: Int, where: JSON, publicationState: PublicationState): [DataForDzongkhag]
  dataForDzongkhagsConnection(sort: String, limit: Int, start: Int, where: JSON): DataForDzongkhagConnection
  employee(id: ID!, publicationState: PublicationState): Employee
  employees(sort: String, limit: Int, start: Int, where: JSON, publicationState: PublicationState): [Employee]
  employeesConnection(sort: String, limit: Int, start: Int, where: JSON): EmployeeConnection
  package(id: ID!, publicationState: PublicationState): Package
  packages(sort: String, limit: Int, start: Int, where: JSON, publicationState: PublicationState): [Package]
  packagesConnection(sort: String, limit: Int, start: Int, where: JSON): PackageConnection
  testimonial(id: ID!, publicationState: PublicationState): Testimonial
  testimonials(sort: String, limit: Int, start: Int, where: JSON, publicationState: PublicationState): [Testimonial]
  testimonialsConnection(sort: String, limit: Int, start: Int, where: JSON): TestimonialConnection
  files(sort: String, limit: Int, start: Int, where: JSON, publicationState: PublicationState): [UploadFile]
  filesConnection(sort: String, limit: Int, start: Int, where: JSON): UploadFileConnection
  role(id: ID!, publicationState: PublicationState): UsersPermissionsRole

  """
  Retrieve all the existing roles. You can't apply filters on this query.
  """
  roles(sort: String, limit: Int, start: Int, where: JSON, publicationState: PublicationState): [UsersPermissionsRole]
  rolesConnection(sort: String, limit: Int, start: Int, where: JSON): UsersPermissionsRoleConnection
  user(id: ID!, publicationState: PublicationState): UsersPermissionsUser
  users(sort: String, limit: Int, start: Int, where: JSON, publicationState: PublicationState): [UsersPermissionsUser]
  usersConnection(sort: String, limit: Int, start: Int, where: JSON): UsersPermissionsUserConnection
  dzongkhagsCount(where: JSON): Int!
  packagesCount(where: JSON): Int!
  packageTypes: [pkgTypes]
  testimonialsCount(where: JSON): Int!
  me: UsersPermissionsMe
}

type Mutation {
  createAboutBhutanSection(input: createAboutBhutanSectionInput): createAboutBhutanSectionPayload
  updateAboutBhutanSection(input: updateAboutBhutanSectionInput): updateAboutBhutanSectionPayload
  deleteAboutBhutanSection(input: deleteAboutBhutanSectionInput): deleteAboutBhutanSectionPayload
  createDataForDzongkhag(input: createDataForDzongkhagInput): createDataForDzongkhagPayload
  updateDataForDzongkhag(input: updateDataForDzongkhagInput): updateDataForDzongkhagPayload
  deleteDataForDzongkhag(input: deleteDataForDzongkhagInput): deleteDataForDzongkhagPayload
  createEmployee(input: createEmployeeInput): createEmployeePayload
  updateEmployee(input: updateEmployeeInput): updateEmployeePayload
  deleteEmployee(input: deleteEmployeeInput): deleteEmployeePayload
  createPackage(input: createPackageInput): createPackagePayload
  updatePackage(input: updatePackageInput): updatePackagePayload
  deletePackage(input: deletePackageInput): deletePackagePayload
  createTestimonial(input: createTestimonialInput): createTestimonialPayload
  updateTestimonial(input: updateTestimonialInput): updateTestimonialPayload
  deleteTestimonial(input: deleteTestimonialInput): deleteTestimonialPayload

  """Delete one file"""
  deleteFile(input: deleteFileInput): deleteFilePayload

  """Create a new role"""
  createRole(input: createRoleInput): createRolePayload

  """Update an existing role"""
  updateRole(input: updateRoleInput): updateRolePayload

  """Delete an existing role"""
  deleteRole(input: deleteRoleInput): deleteRolePayload

  """Create a new user"""
  createUser(input: createUserInput): createUserPayload

  """Update an existing user"""
  updateUser(input: updateUserInput): updateUserPayload

  """Delete an existing user"""
  deleteUser(input: deleteUserInput): deleteUserPayload
  upload(refId: ID, ref: String, field: String, source: String, info: FileInfoInput, file: Upload!): UploadFile!
  multipleUpload(refId: ID, ref: String, field: String, source: String, files: [Upload]!): [UploadFile]!
  updateFileInfo(id: ID!, info: FileInfoInput!): UploadFile!
  login(input: UsersPermissionsLoginInput!): UsersPermissionsLoginPayload!
  register(input: UsersPermissionsRegisterInput!): UsersPermissionsLoginPayload!
  forgotPassword(email: String!): UserPermissionsPasswordPayload
  resetPassword(password: String!, passwordConfirmation: String!, code: String!): UsersPermissionsLoginPayload
  emailConfirmation(confirmation: String!): UsersPermissionsLoginPayload
}

"""
The \`JSON\` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
"""
scalar JSON

"""
A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the \`date-time\` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
"""
scalar DateTime

"""A time string with format: HH:mm:ss.SSS"""
scalar Time

"""
A date string, such as 2007-12-03, compliant with the \`full-date\` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
"""
scalar Date

"""The \`Long\` scalar type represents 52-bit integers"""
scalar Long

"""The \`Upload\` scalar type represents a file upload."""
scalar Upload
`