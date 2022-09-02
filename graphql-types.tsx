export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  buttonImageCallToAction: Array<CallToAction>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageHero: Array<Hero>;
  imageWhyAttend: Array<WhyAttend>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetButtonImageCallToActionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CallToActionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CallToActionWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageHeroArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<HeroOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroWhereInput>;
};


/** Asset system model */
export type AssetImageWhyAttendArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<WhyAttendOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WhyAttendWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  buttonImageCallToAction?: InputMaybe<CallToActionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  imageHero?: InputMaybe<HeroCreateManyInlineInput>;
  imageWhyAttend?: InputMaybe<WhyAttendCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  buttonImageCallToAction_every?: InputMaybe<CallToActionWhereInput>;
  buttonImageCallToAction_none?: InputMaybe<CallToActionWhereInput>;
  buttonImageCallToAction_some?: InputMaybe<CallToActionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageHero_every?: InputMaybe<HeroWhereInput>;
  imageHero_none?: InputMaybe<HeroWhereInput>;
  imageHero_some?: InputMaybe<HeroWhereInput>;
  imageWhyAttend_every?: InputMaybe<WhyAttendWhereInput>;
  imageWhyAttend_none?: InputMaybe<WhyAttendWhereInput>;
  imageWhyAttend_some?: InputMaybe<WhyAttendWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  buttonImageCallToAction?: InputMaybe<CallToActionUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  imageHero?: InputMaybe<HeroUpdateManyInlineInput>;
  imageWhyAttend?: InputMaybe<WhyAttendUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  buttonImageCallToAction_every?: InputMaybe<CallToActionWhereInput>;
  buttonImageCallToAction_none?: InputMaybe<CallToActionWhereInput>;
  buttonImageCallToAction_some?: InputMaybe<CallToActionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageHero_every?: InputMaybe<HeroWhereInput>;
  imageHero_none?: InputMaybe<HeroWhereInput>;
  imageHero_some?: InputMaybe<HeroWhereInput>;
  imageWhyAttend_every?: InputMaybe<WhyAttendWhereInput>;
  imageWhyAttend_none?: InputMaybe<WhyAttendWhereInput>;
  imageWhyAttend_some?: InputMaybe<WhyAttendWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum Audience {
  Developers = 'Developers',
  Marketers = 'Marketers'
}

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type CallToAction = Node & {
  __typename?: 'CallToAction';
  buttonImage?: Maybe<Asset>;
  buttonLink?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<CallToAction>;
  heading: Scalars['String'];
  /** List of CallToAction versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  page?: Maybe<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  subheading?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CallToActionButtonImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CallToActionCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CallToActionDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CallToActionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CallToActionPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CallToActionPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CallToActionScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CallToActionUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CallToActionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CallToActionWhereUniqueInput;
};

/** A connection to a list of items. */
export type CallToActionConnection = {
  __typename?: 'CallToActionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CallToActionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CallToActionCreateInput = {
  buttonImage?: InputMaybe<AssetCreateOneInlineInput>;
  buttonLink?: InputMaybe<Scalars['String']>;
  buttonText?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  heading: Scalars['String'];
  page?: InputMaybe<PageCreateOneInlineInput>;
  subheading?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CallToActionCreateManyInlineInput = {
  /** Connect multiple existing CallToAction documents */
  connect?: InputMaybe<Array<CallToActionWhereUniqueInput>>;
  /** Create and connect multiple existing CallToAction documents */
  create?: InputMaybe<Array<CallToActionCreateInput>>;
};

export type CallToActionCreateOneInlineInput = {
  /** Connect one existing CallToAction document */
  connect?: InputMaybe<CallToActionWhereUniqueInput>;
  /** Create and connect one CallToAction document */
  create?: InputMaybe<CallToActionCreateInput>;
};

/** An edge in a connection. */
export type CallToActionEdge = {
  __typename?: 'CallToActionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CallToAction;
};

/** Identifies documents */
export type CallToActionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CallToActionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CallToActionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CallToActionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  buttonImage?: InputMaybe<AssetWhereInput>;
  buttonLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  buttonLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  buttonLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  buttonLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  buttonLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  buttonLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  buttonLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  buttonLink_starts_with?: InputMaybe<Scalars['String']>;
  buttonText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  buttonText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  heading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  heading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subheading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subheading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subheading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subheading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subheading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subheading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subheading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subheading_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CallToActionOrderByInput {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CallToActionUpdateInput = {
  buttonImage?: InputMaybe<AssetUpdateOneInlineInput>;
  buttonLink?: InputMaybe<Scalars['String']>;
  buttonText?: InputMaybe<Scalars['String']>;
  heading?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<PageUpdateOneInlineInput>;
  subheading?: InputMaybe<Scalars['String']>;
};

export type CallToActionUpdateManyInlineInput = {
  /** Connect multiple existing CallToAction documents */
  connect?: InputMaybe<Array<CallToActionConnectInput>>;
  /** Create and connect multiple CallToAction documents */
  create?: InputMaybe<Array<CallToActionCreateInput>>;
  /** Delete multiple CallToAction documents */
  delete?: InputMaybe<Array<CallToActionWhereUniqueInput>>;
  /** Disconnect multiple CallToAction documents */
  disconnect?: InputMaybe<Array<CallToActionWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CallToAction documents */
  set?: InputMaybe<Array<CallToActionWhereUniqueInput>>;
  /** Update multiple CallToAction documents */
  update?: InputMaybe<Array<CallToActionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CallToAction documents */
  upsert?: InputMaybe<Array<CallToActionUpsertWithNestedWhereUniqueInput>>;
};

export type CallToActionUpdateManyInput = {
  buttonLink?: InputMaybe<Scalars['String']>;
  buttonText?: InputMaybe<Scalars['String']>;
  heading?: InputMaybe<Scalars['String']>;
  subheading?: InputMaybe<Scalars['String']>;
};

export type CallToActionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CallToActionUpdateManyInput;
  /** Document search */
  where: CallToActionWhereInput;
};

export type CallToActionUpdateOneInlineInput = {
  /** Connect existing CallToAction document */
  connect?: InputMaybe<CallToActionWhereUniqueInput>;
  /** Create and connect one CallToAction document */
  create?: InputMaybe<CallToActionCreateInput>;
  /** Delete currently connected CallToAction document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected CallToAction document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single CallToAction document */
  update?: InputMaybe<CallToActionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CallToAction document */
  upsert?: InputMaybe<CallToActionUpsertWithNestedWhereUniqueInput>;
};

export type CallToActionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CallToActionUpdateInput;
  /** Unique document search */
  where: CallToActionWhereUniqueInput;
};

export type CallToActionUpsertInput = {
  /** Create document if it didn't exist */
  create: CallToActionCreateInput;
  /** Update document if it exists */
  update: CallToActionUpdateInput;
};

export type CallToActionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CallToActionUpsertInput;
  /** Unique document search */
  where: CallToActionWhereUniqueInput;
};

/** Identifies documents */
export type CallToActionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CallToActionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CallToActionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CallToActionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  buttonImage?: InputMaybe<AssetWhereInput>;
  buttonLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  buttonLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  buttonLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  buttonLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  buttonLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  buttonLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  buttonLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  buttonLink_starts_with?: InputMaybe<Scalars['String']>;
  buttonText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  buttonText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  heading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  heading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subheading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subheading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subheading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subheading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subheading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subheading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subheading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subheading_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References CallToAction record uniquely */
export type CallToActionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Hero = Node & {
  __typename?: 'Hero';
  buttonLinkSlug?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Hero>;
  /** List of Hero versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  page?: Maybe<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  uniformContextPersonalizationCriteria?: Maybe<Scalars['Json']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type HeroCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type HeroDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type HeroHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type HeroImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type HeroPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type HeroPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type HeroScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type HeroUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type HeroConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HeroWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroConnection = {
  __typename?: 'HeroConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HeroEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HeroCreateInput = {
  buttonLinkSlug?: InputMaybe<Scalars['String']>;
  buttonText?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  page?: InputMaybe<PageCreateOneInlineInput>;
  personalizationList?: InputMaybe<PersonalizedHeroesListCreateOneInlineInput>;
  title: Scalars['String'];
  uniformContextPersonalizationCriteria?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type HeroCreateManyInlineInput = {
  /** Connect multiple existing Hero documents */
  connect?: InputMaybe<Array<HeroWhereUniqueInput>>;
  /** Create and connect multiple existing Hero documents */
  create?: InputMaybe<Array<HeroCreateInput>>;
};

export type HeroCreateOneInlineInput = {
  /** Connect one existing Hero document */
  connect?: InputMaybe<HeroWhereUniqueInput>;
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
};

/** An edge in a connection. */
export type HeroEdge = {
  __typename?: 'HeroEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Hero;
};

/** Identifies documents */
export type HeroManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  buttonLinkSlug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  buttonLinkSlug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  buttonLinkSlug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  buttonLinkSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  buttonLinkSlug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  buttonLinkSlug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  buttonLinkSlug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  buttonLinkSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  buttonLinkSlug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  buttonLinkSlug_starts_with?: InputMaybe<Scalars['String']>;
  buttonText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  buttonText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  page?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum HeroOrderByInput {
  ButtonLinkSlugAsc = 'buttonLinkSlug_ASC',
  ButtonLinkSlugDesc = 'buttonLinkSlug_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type HeroUpdateInput = {
  buttonLinkSlug?: InputMaybe<Scalars['String']>;
  buttonText?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  page?: InputMaybe<PageUpdateOneInlineInput>;
  personalizationList?: InputMaybe<PersonalizedHeroesListUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  uniformContextPersonalizationCriteria?: InputMaybe<Scalars['Json']>;
};

export type HeroUpdateManyInlineInput = {
  /** Connect multiple existing Hero documents */
  connect?: InputMaybe<Array<HeroConnectInput>>;
  /** Create and connect multiple Hero documents */
  create?: InputMaybe<Array<HeroCreateInput>>;
  /** Delete multiple Hero documents */
  delete?: InputMaybe<Array<HeroWhereUniqueInput>>;
  /** Disconnect multiple Hero documents */
  disconnect?: InputMaybe<Array<HeroWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Hero documents */
  set?: InputMaybe<Array<HeroWhereUniqueInput>>;
  /** Update multiple Hero documents */
  update?: InputMaybe<Array<HeroUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Hero documents */
  upsert?: InputMaybe<Array<HeroUpsertWithNestedWhereUniqueInput>>;
};

export type HeroUpdateManyInput = {
  buttonLinkSlug?: InputMaybe<Scalars['String']>;
  buttonText?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uniformContextPersonalizationCriteria?: InputMaybe<Scalars['Json']>;
};

export type HeroUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeroUpdateManyInput;
  /** Document search */
  where: HeroWhereInput;
};

export type HeroUpdateOneInlineInput = {
  /** Connect existing Hero document */
  connect?: InputMaybe<HeroWhereUniqueInput>;
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
  /** Delete currently connected Hero document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Hero document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Hero document */
  update?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Hero document */
  upsert?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
};

export type HeroUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeroUpdateInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertInput = {
  /** Create document if it didn't exist */
  create: HeroCreateInput;
  /** Update document if it exists */
  update: HeroUpdateInput;
};

export type HeroUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeroUpsertInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

/** Identifies documents */
export type HeroWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  buttonLinkSlug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  buttonLinkSlug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  buttonLinkSlug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  buttonLinkSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  buttonLinkSlug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  buttonLinkSlug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  buttonLinkSlug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  buttonLinkSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  buttonLinkSlug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  buttonLinkSlug_starts_with?: InputMaybe<Scalars['String']>;
  buttonText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  buttonText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  page?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Hero record uniquely */
export type HeroWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one callToAction */
  createCallToAction?: Maybe<CallToAction>;
  /** Create one hero */
  createHero?: Maybe<Hero>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one personalizedHeroesList */
  createPersonalizedHeroesList?: Maybe<PersonalizedHeroesList>;
  /** Create one personalizedTalksListList */
  createPersonalizedTalksListList?: Maybe<PersonalizedTalksListList>;
  /** Create one registrationForm */
  createRegistrationForm?: Maybe<RegistrationForm>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one talk */
  createTalk?: Maybe<Talk>;
  /** Create one talksList */
  createTalksList?: Maybe<TalksList>;
  /** Create one whyAttend */
  createWhyAttend?: Maybe<WhyAttend>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one callToAction from _all_ existing stages. Returns deleted document. */
  deleteCallToAction?: Maybe<CallToAction>;
  /** Delete one hero from _all_ existing stages. Returns deleted document. */
  deleteHero?: Maybe<Hero>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many CallToAction documents
   * @deprecated Please use the new paginated many mutation (deleteManyCallToActionsConnection)
   */
  deleteManyCallToActions: BatchPayload;
  /** Delete many CallToAction documents, return deleted documents */
  deleteManyCallToActionsConnection: CallToActionConnection;
  /**
   * Delete many Hero documents
   * @deprecated Please use the new paginated many mutation (deleteManyHeroesConnection)
   */
  deleteManyHeroes: BatchPayload;
  /** Delete many Hero documents, return deleted documents */
  deleteManyHeroesConnection: HeroConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many PersonalizedHeroesList documents
   * @deprecated Please use the new paginated many mutation (deleteManyPersonalizedHeroesListsConnection)
   */
  deleteManyPersonalizedHeroesLists: BatchPayload;
  /** Delete many PersonalizedHeroesList documents, return deleted documents */
  deleteManyPersonalizedHeroesListsConnection: PersonalizedHeroesListConnection;
  /**
   * Delete many PersonalizedTalksListList documents
   * @deprecated Please use the new paginated many mutation (deleteManyPersonalizedTalksListListsConnection)
   */
  deleteManyPersonalizedTalksListLists: BatchPayload;
  /** Delete many PersonalizedTalksListList documents, return deleted documents */
  deleteManyPersonalizedTalksListListsConnection: PersonalizedTalksListListConnection;
  /**
   * Delete many RegistrationForm documents
   * @deprecated Please use the new paginated many mutation (deleteManyRegistrationFormsConnection)
   */
  deleteManyRegistrationForms: BatchPayload;
  /** Delete many RegistrationForm documents, return deleted documents */
  deleteManyRegistrationFormsConnection: RegistrationFormConnection;
  /**
   * Delete many Talk documents
   * @deprecated Please use the new paginated many mutation (deleteManyTalksConnection)
   */
  deleteManyTalks: BatchPayload;
  /** Delete many Talk documents, return deleted documents */
  deleteManyTalksConnection: TalkConnection;
  /**
   * Delete many TalksList documents
   * @deprecated Please use the new paginated many mutation (deleteManyTalksListsConnection)
   */
  deleteManyTalksLists: BatchPayload;
  /** Delete many TalksList documents, return deleted documents */
  deleteManyTalksListsConnection: TalksListConnection;
  /**
   * Delete many WhyAttend documents
   * @deprecated Please use the new paginated many mutation (deleteManyWhyAttendsConnection)
   */
  deleteManyWhyAttends: BatchPayload;
  /** Delete many WhyAttend documents, return deleted documents */
  deleteManyWhyAttendsConnection: WhyAttendConnection;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete one personalizedHeroesList from _all_ existing stages. Returns deleted document. */
  deletePersonalizedHeroesList?: Maybe<PersonalizedHeroesList>;
  /** Delete one personalizedTalksListList from _all_ existing stages. Returns deleted document. */
  deletePersonalizedTalksListList?: Maybe<PersonalizedTalksListList>;
  /** Delete one registrationForm from _all_ existing stages. Returns deleted document. */
  deleteRegistrationForm?: Maybe<RegistrationForm>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one talk from _all_ existing stages. Returns deleted document. */
  deleteTalk?: Maybe<Talk>;
  /** Delete one talksList from _all_ existing stages. Returns deleted document. */
  deleteTalksList?: Maybe<TalksList>;
  /** Delete one whyAttend from _all_ existing stages. Returns deleted document. */
  deleteWhyAttend?: Maybe<WhyAttend>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one callToAction */
  publishCallToAction?: Maybe<CallToAction>;
  /** Publish one hero */
  publishHero?: Maybe<Hero>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many CallToAction documents
   * @deprecated Please use the new paginated many mutation (publishManyCallToActionsConnection)
   */
  publishManyCallToActions: BatchPayload;
  /** Publish many CallToAction documents */
  publishManyCallToActionsConnection: CallToActionConnection;
  /**
   * Publish many Hero documents
   * @deprecated Please use the new paginated many mutation (publishManyHeroesConnection)
   */
  publishManyHeroes: BatchPayload;
  /** Publish many Hero documents */
  publishManyHeroesConnection: HeroConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many PersonalizedHeroesList documents
   * @deprecated Please use the new paginated many mutation (publishManyPersonalizedHeroesListsConnection)
   */
  publishManyPersonalizedHeroesLists: BatchPayload;
  /** Publish many PersonalizedHeroesList documents */
  publishManyPersonalizedHeroesListsConnection: PersonalizedHeroesListConnection;
  /**
   * Publish many PersonalizedTalksListList documents
   * @deprecated Please use the new paginated many mutation (publishManyPersonalizedTalksListListsConnection)
   */
  publishManyPersonalizedTalksListLists: BatchPayload;
  /** Publish many PersonalizedTalksListList documents */
  publishManyPersonalizedTalksListListsConnection: PersonalizedTalksListListConnection;
  /**
   * Publish many RegistrationForm documents
   * @deprecated Please use the new paginated many mutation (publishManyRegistrationFormsConnection)
   */
  publishManyRegistrationForms: BatchPayload;
  /** Publish many RegistrationForm documents */
  publishManyRegistrationFormsConnection: RegistrationFormConnection;
  /**
   * Publish many Talk documents
   * @deprecated Please use the new paginated many mutation (publishManyTalksConnection)
   */
  publishManyTalks: BatchPayload;
  /** Publish many Talk documents */
  publishManyTalksConnection: TalkConnection;
  /**
   * Publish many TalksList documents
   * @deprecated Please use the new paginated many mutation (publishManyTalksListsConnection)
   */
  publishManyTalksLists: BatchPayload;
  /** Publish many TalksList documents */
  publishManyTalksListsConnection: TalksListConnection;
  /**
   * Publish many WhyAttend documents
   * @deprecated Please use the new paginated many mutation (publishManyWhyAttendsConnection)
   */
  publishManyWhyAttends: BatchPayload;
  /** Publish many WhyAttend documents */
  publishManyWhyAttendsConnection: WhyAttendConnection;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one personalizedHeroesList */
  publishPersonalizedHeroesList?: Maybe<PersonalizedHeroesList>;
  /** Publish one personalizedTalksListList */
  publishPersonalizedTalksListList?: Maybe<PersonalizedTalksListList>;
  /** Publish one registrationForm */
  publishRegistrationForm?: Maybe<RegistrationForm>;
  /** Publish one talk */
  publishTalk?: Maybe<Talk>;
  /** Publish one talksList */
  publishTalksList?: Maybe<TalksList>;
  /** Publish one whyAttend */
  publishWhyAttend?: Maybe<WhyAttend>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one callToAction */
  schedulePublishCallToAction?: Maybe<CallToAction>;
  /** Schedule to publish one hero */
  schedulePublishHero?: Maybe<Hero>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one personalizedHeroesList */
  schedulePublishPersonalizedHeroesList?: Maybe<PersonalizedHeroesList>;
  /** Schedule to publish one personalizedTalksListList */
  schedulePublishPersonalizedTalksListList?: Maybe<PersonalizedTalksListList>;
  /** Schedule to publish one registrationForm */
  schedulePublishRegistrationForm?: Maybe<RegistrationForm>;
  /** Schedule to publish one talk */
  schedulePublishTalk?: Maybe<Talk>;
  /** Schedule to publish one talksList */
  schedulePublishTalksList?: Maybe<TalksList>;
  /** Schedule to publish one whyAttend */
  schedulePublishWhyAttend?: Maybe<WhyAttend>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one callToAction from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCallToAction?: Maybe<CallToAction>;
  /** Unpublish one hero from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishHero?: Maybe<Hero>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one personalizedHeroesList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPersonalizedHeroesList?: Maybe<PersonalizedHeroesList>;
  /** Unpublish one personalizedTalksListList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPersonalizedTalksListList?: Maybe<PersonalizedTalksListList>;
  /** Unpublish one registrationForm from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishRegistrationForm?: Maybe<RegistrationForm>;
  /** Unpublish one talk from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTalk?: Maybe<Talk>;
  /** Unpublish one talksList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTalksList?: Maybe<TalksList>;
  /** Unpublish one whyAttend from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishWhyAttend?: Maybe<WhyAttend>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one callToAction from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCallToAction?: Maybe<CallToAction>;
  /** Unpublish one hero from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHero?: Maybe<Hero>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many CallToAction documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCallToActionsConnection)
   */
  unpublishManyCallToActions: BatchPayload;
  /** Find many CallToAction documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCallToActionsConnection: CallToActionConnection;
  /**
   * Unpublish many Hero documents
   * @deprecated Please use the new paginated many mutation (unpublishManyHeroesConnection)
   */
  unpublishManyHeroes: BatchPayload;
  /** Find many Hero documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHeroesConnection: HeroConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many PersonalizedHeroesList documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPersonalizedHeroesListsConnection)
   */
  unpublishManyPersonalizedHeroesLists: BatchPayload;
  /** Find many PersonalizedHeroesList documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPersonalizedHeroesListsConnection: PersonalizedHeroesListConnection;
  /**
   * Unpublish many PersonalizedTalksListList documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPersonalizedTalksListListsConnection)
   */
  unpublishManyPersonalizedTalksListLists: BatchPayload;
  /** Find many PersonalizedTalksListList documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPersonalizedTalksListListsConnection: PersonalizedTalksListListConnection;
  /**
   * Unpublish many RegistrationForm documents
   * @deprecated Please use the new paginated many mutation (unpublishManyRegistrationFormsConnection)
   */
  unpublishManyRegistrationForms: BatchPayload;
  /** Find many RegistrationForm documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyRegistrationFormsConnection: RegistrationFormConnection;
  /**
   * Unpublish many Talk documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTalksConnection)
   */
  unpublishManyTalks: BatchPayload;
  /** Find many Talk documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTalksConnection: TalkConnection;
  /**
   * Unpublish many TalksList documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTalksListsConnection)
   */
  unpublishManyTalksLists: BatchPayload;
  /** Find many TalksList documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTalksListsConnection: TalksListConnection;
  /**
   * Unpublish many WhyAttend documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWhyAttendsConnection)
   */
  unpublishManyWhyAttends: BatchPayload;
  /** Find many WhyAttend documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWhyAttendsConnection: WhyAttendConnection;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one personalizedHeroesList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPersonalizedHeroesList?: Maybe<PersonalizedHeroesList>;
  /** Unpublish one personalizedTalksListList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPersonalizedTalksListList?: Maybe<PersonalizedTalksListList>;
  /** Unpublish one registrationForm from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishRegistrationForm?: Maybe<RegistrationForm>;
  /** Unpublish one talk from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTalk?: Maybe<Talk>;
  /** Unpublish one talksList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTalksList?: Maybe<TalksList>;
  /** Unpublish one whyAttend from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWhyAttend?: Maybe<WhyAttend>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one callToAction */
  updateCallToAction?: Maybe<CallToAction>;
  /** Update one hero */
  updateHero?: Maybe<Hero>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many callToActions
   * @deprecated Please use the new paginated many mutation (updateManyCallToActionsConnection)
   */
  updateManyCallToActions: BatchPayload;
  /** Update many CallToAction documents */
  updateManyCallToActionsConnection: CallToActionConnection;
  /**
   * Update many heroes
   * @deprecated Please use the new paginated many mutation (updateManyHeroesConnection)
   */
  updateManyHeroes: BatchPayload;
  /** Update many Hero documents */
  updateManyHeroesConnection: HeroConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many personalizedHeroesLists
   * @deprecated Please use the new paginated many mutation (updateManyPersonalizedHeroesListsConnection)
   */
  updateManyPersonalizedHeroesLists: BatchPayload;
  /** Update many PersonalizedHeroesList documents */
  updateManyPersonalizedHeroesListsConnection: PersonalizedHeroesListConnection;
  /**
   * Update many personalizedTalksListLists
   * @deprecated Please use the new paginated many mutation (updateManyPersonalizedTalksListListsConnection)
   */
  updateManyPersonalizedTalksListLists: BatchPayload;
  /** Update many PersonalizedTalksListList documents */
  updateManyPersonalizedTalksListListsConnection: PersonalizedTalksListListConnection;
  /**
   * Update many registrationForms
   * @deprecated Please use the new paginated many mutation (updateManyRegistrationFormsConnection)
   */
  updateManyRegistrationForms: BatchPayload;
  /** Update many RegistrationForm documents */
  updateManyRegistrationFormsConnection: RegistrationFormConnection;
  /**
   * Update many talks
   * @deprecated Please use the new paginated many mutation (updateManyTalksConnection)
   */
  updateManyTalks: BatchPayload;
  /** Update many Talk documents */
  updateManyTalksConnection: TalkConnection;
  /**
   * Update many talksLists
   * @deprecated Please use the new paginated many mutation (updateManyTalksListsConnection)
   */
  updateManyTalksLists: BatchPayload;
  /** Update many TalksList documents */
  updateManyTalksListsConnection: TalksListConnection;
  /**
   * Update many whyAttends
   * @deprecated Please use the new paginated many mutation (updateManyWhyAttendsConnection)
   */
  updateManyWhyAttends: BatchPayload;
  /** Update many WhyAttend documents */
  updateManyWhyAttendsConnection: WhyAttendConnection;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one personalizedHeroesList */
  updatePersonalizedHeroesList?: Maybe<PersonalizedHeroesList>;
  /** Update one personalizedTalksListList */
  updatePersonalizedTalksListList?: Maybe<PersonalizedTalksListList>;
  /** Update one registrationForm */
  updateRegistrationForm?: Maybe<RegistrationForm>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one talk */
  updateTalk?: Maybe<Talk>;
  /** Update one talksList */
  updateTalksList?: Maybe<TalksList>;
  /** Update one whyAttend */
  updateWhyAttend?: Maybe<WhyAttend>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one callToAction */
  upsertCallToAction?: Maybe<CallToAction>;
  /** Upsert one hero */
  upsertHero?: Maybe<Hero>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one personalizedHeroesList */
  upsertPersonalizedHeroesList?: Maybe<PersonalizedHeroesList>;
  /** Upsert one personalizedTalksListList */
  upsertPersonalizedTalksListList?: Maybe<PersonalizedTalksListList>;
  /** Upsert one registrationForm */
  upsertRegistrationForm?: Maybe<RegistrationForm>;
  /** Upsert one talk */
  upsertTalk?: Maybe<Talk>;
  /** Upsert one talksList */
  upsertTalksList?: Maybe<TalksList>;
  /** Upsert one whyAttend */
  upsertWhyAttend?: Maybe<WhyAttend>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCallToActionArgs = {
  data: CallToActionCreateInput;
};


export type MutationCreateHeroArgs = {
  data: HeroCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreatePersonalizedHeroesListArgs = {
  data: PersonalizedHeroesListCreateInput;
};


export type MutationCreatePersonalizedTalksListListArgs = {
  data: PersonalizedTalksListListCreateInput;
};


export type MutationCreateRegistrationFormArgs = {
  data: RegistrationFormCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateTalkArgs = {
  data: TalkCreateInput;
};


export type MutationCreateTalksListArgs = {
  data: TalksListCreateInput;
};


export type MutationCreateWhyAttendArgs = {
  data: WhyAttendCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCallToActionArgs = {
  where: CallToActionWhereUniqueInput;
};


export type MutationDeleteHeroArgs = {
  where: HeroWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyCallToActionsArgs = {
  where?: InputMaybe<CallToActionManyWhereInput>;
};


export type MutationDeleteManyCallToActionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CallToActionManyWhereInput>;
};


export type MutationDeleteManyHeroesArgs = {
  where?: InputMaybe<HeroManyWhereInput>;
};


export type MutationDeleteManyHeroesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPersonalizedHeroesListsArgs = {
  where?: InputMaybe<PersonalizedHeroesListManyWhereInput>;
};


export type MutationDeleteManyPersonalizedHeroesListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonalizedHeroesListManyWhereInput>;
};


export type MutationDeleteManyPersonalizedTalksListListsArgs = {
  where?: InputMaybe<PersonalizedTalksListListManyWhereInput>;
};


export type MutationDeleteManyPersonalizedTalksListListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonalizedTalksListListManyWhereInput>;
};


export type MutationDeleteManyRegistrationFormsArgs = {
  where?: InputMaybe<RegistrationFormManyWhereInput>;
};


export type MutationDeleteManyRegistrationFormsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RegistrationFormManyWhereInput>;
};


export type MutationDeleteManyTalksArgs = {
  where?: InputMaybe<TalkManyWhereInput>;
};


export type MutationDeleteManyTalksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TalkManyWhereInput>;
};


export type MutationDeleteManyTalksListsArgs = {
  where?: InputMaybe<TalksListManyWhereInput>;
};


export type MutationDeleteManyTalksListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TalksListManyWhereInput>;
};


export type MutationDeleteManyWhyAttendsArgs = {
  where?: InputMaybe<WhyAttendManyWhereInput>;
};


export type MutationDeleteManyWhyAttendsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WhyAttendManyWhereInput>;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeletePersonalizedHeroesListArgs = {
  where: PersonalizedHeroesListWhereUniqueInput;
};


export type MutationDeletePersonalizedTalksListListArgs = {
  where: PersonalizedTalksListListWhereUniqueInput;
};


export type MutationDeleteRegistrationFormArgs = {
  where: RegistrationFormWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteTalkArgs = {
  where: TalkWhereUniqueInput;
};


export type MutationDeleteTalksListArgs = {
  where: TalksListWhereUniqueInput;
};


export type MutationDeleteWhyAttendArgs = {
  where: WhyAttendWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishCallToActionArgs = {
  to?: Array<Stage>;
  where: CallToActionWhereUniqueInput;
};


export type MutationPublishHeroArgs = {
  to?: Array<Stage>;
  where: HeroWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCallToActionsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CallToActionManyWhereInput>;
};


export type MutationPublishManyCallToActionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CallToActionManyWhereInput>;
};


export type MutationPublishManyHeroesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<HeroManyWhereInput>;
};


export type MutationPublishManyHeroesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<HeroManyWhereInput>;
};


export type MutationPublishManyPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationPublishManyPersonalizedHeroesListsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PersonalizedHeroesListManyWhereInput>;
};


export type MutationPublishManyPersonalizedHeroesListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PersonalizedHeroesListManyWhereInput>;
};


export type MutationPublishManyPersonalizedTalksListListsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PersonalizedTalksListListManyWhereInput>;
};


export type MutationPublishManyPersonalizedTalksListListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PersonalizedTalksListListManyWhereInput>;
};


export type MutationPublishManyRegistrationFormsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<RegistrationFormManyWhereInput>;
};


export type MutationPublishManyRegistrationFormsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<RegistrationFormManyWhereInput>;
};


export type MutationPublishManyTalksArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TalkManyWhereInput>;
};


export type MutationPublishManyTalksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<TalkManyWhereInput>;
};


export type MutationPublishManyTalksListsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TalksListManyWhereInput>;
};


export type MutationPublishManyTalksListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<TalksListManyWhereInput>;
};


export type MutationPublishManyWhyAttendsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<WhyAttendManyWhereInput>;
};


export type MutationPublishManyWhyAttendsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<WhyAttendManyWhereInput>;
};


export type MutationPublishPageArgs = {
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationPublishPersonalizedHeroesListArgs = {
  to?: Array<Stage>;
  where: PersonalizedHeroesListWhereUniqueInput;
};


export type MutationPublishPersonalizedTalksListListArgs = {
  to?: Array<Stage>;
  where: PersonalizedTalksListListWhereUniqueInput;
};


export type MutationPublishRegistrationFormArgs = {
  to?: Array<Stage>;
  where: RegistrationFormWhereUniqueInput;
};


export type MutationPublishTalkArgs = {
  to?: Array<Stage>;
  where: TalkWhereUniqueInput;
};


export type MutationPublishTalksListArgs = {
  to?: Array<Stage>;
  where: TalksListWhereUniqueInput;
};


export type MutationPublishWhyAttendArgs = {
  to?: Array<Stage>;
  where: WhyAttendWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishCallToActionArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CallToActionWhereUniqueInput;
};


export type MutationSchedulePublishHeroArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: HeroWhereUniqueInput;
};


export type MutationSchedulePublishPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationSchedulePublishPersonalizedHeroesListArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PersonalizedHeroesListWhereUniqueInput;
};


export type MutationSchedulePublishPersonalizedTalksListListArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PersonalizedTalksListListWhereUniqueInput;
};


export type MutationSchedulePublishRegistrationFormArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: RegistrationFormWhereUniqueInput;
};


export type MutationSchedulePublishTalkArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TalkWhereUniqueInput;
};


export type MutationSchedulePublishTalksListArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TalksListWhereUniqueInput;
};


export type MutationSchedulePublishWhyAttendArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: WhyAttendWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishCallToActionArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CallToActionWhereUniqueInput;
};


export type MutationScheduleUnpublishHeroArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: HeroWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: PageWhereUniqueInput;
};


export type MutationScheduleUnpublishPersonalizedHeroesListArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: PersonalizedHeroesListWhereUniqueInput;
};


export type MutationScheduleUnpublishPersonalizedTalksListListArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: PersonalizedTalksListListWhereUniqueInput;
};


export type MutationScheduleUnpublishRegistrationFormArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: RegistrationFormWhereUniqueInput;
};


export type MutationScheduleUnpublishTalkArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: TalkWhereUniqueInput;
};


export type MutationScheduleUnpublishTalksListArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: TalksListWhereUniqueInput;
};


export type MutationScheduleUnpublishWhyAttendArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: WhyAttendWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishCallToActionArgs = {
  from?: Array<Stage>;
  where: CallToActionWhereUniqueInput;
};


export type MutationUnpublishHeroArgs = {
  from?: Array<Stage>;
  where: HeroWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyCallToActionsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CallToActionManyWhereInput>;
};


export type MutationUnpublishManyCallToActionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CallToActionManyWhereInput>;
};


export type MutationUnpublishManyHeroesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<HeroManyWhereInput>;
};


export type MutationUnpublishManyHeroesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<HeroManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPersonalizedHeroesListsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PersonalizedHeroesListManyWhereInput>;
};


export type MutationUnpublishManyPersonalizedHeroesListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PersonalizedHeroesListManyWhereInput>;
};


export type MutationUnpublishManyPersonalizedTalksListListsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PersonalizedTalksListListManyWhereInput>;
};


export type MutationUnpublishManyPersonalizedTalksListListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PersonalizedTalksListListManyWhereInput>;
};


export type MutationUnpublishManyRegistrationFormsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<RegistrationFormManyWhereInput>;
};


export type MutationUnpublishManyRegistrationFormsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<RegistrationFormManyWhereInput>;
};


export type MutationUnpublishManyTalksArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TalkManyWhereInput>;
};


export type MutationUnpublishManyTalksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TalkManyWhereInput>;
};


export type MutationUnpublishManyTalksListsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TalksListManyWhereInput>;
};


export type MutationUnpublishManyTalksListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TalksListManyWhereInput>;
};


export type MutationUnpublishManyWhyAttendsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<WhyAttendManyWhereInput>;
};


export type MutationUnpublishManyWhyAttendsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<WhyAttendManyWhereInput>;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishPersonalizedHeroesListArgs = {
  from?: Array<Stage>;
  where: PersonalizedHeroesListWhereUniqueInput;
};


export type MutationUnpublishPersonalizedTalksListListArgs = {
  from?: Array<Stage>;
  where: PersonalizedTalksListListWhereUniqueInput;
};


export type MutationUnpublishRegistrationFormArgs = {
  from?: Array<Stage>;
  where: RegistrationFormWhereUniqueInput;
};


export type MutationUnpublishTalkArgs = {
  from?: Array<Stage>;
  where: TalkWhereUniqueInput;
};


export type MutationUnpublishTalksListArgs = {
  from?: Array<Stage>;
  where: TalksListWhereUniqueInput;
};


export type MutationUnpublishWhyAttendArgs = {
  from?: Array<Stage>;
  where: WhyAttendWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateCallToActionArgs = {
  data: CallToActionUpdateInput;
  where: CallToActionWhereUniqueInput;
};


export type MutationUpdateHeroArgs = {
  data: HeroUpdateInput;
  where: HeroWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyCallToActionsArgs = {
  data: CallToActionUpdateManyInput;
  where?: InputMaybe<CallToActionManyWhereInput>;
};


export type MutationUpdateManyCallToActionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CallToActionUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CallToActionManyWhereInput>;
};


export type MutationUpdateManyHeroesArgs = {
  data: HeroUpdateManyInput;
  where?: InputMaybe<HeroManyWhereInput>;
};


export type MutationUpdateManyHeroesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: HeroUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPersonalizedHeroesListsArgs = {
  data: PersonalizedHeroesListUpdateManyInput;
  where?: InputMaybe<PersonalizedHeroesListManyWhereInput>;
};


export type MutationUpdateManyPersonalizedHeroesListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PersonalizedHeroesListUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonalizedHeroesListManyWhereInput>;
};


export type MutationUpdateManyPersonalizedTalksListListsArgs = {
  data: PersonalizedTalksListListUpdateManyInput;
  where?: InputMaybe<PersonalizedTalksListListManyWhereInput>;
};


export type MutationUpdateManyPersonalizedTalksListListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PersonalizedTalksListListUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonalizedTalksListListManyWhereInput>;
};


export type MutationUpdateManyRegistrationFormsArgs = {
  data: RegistrationFormUpdateManyInput;
  where?: InputMaybe<RegistrationFormManyWhereInput>;
};


export type MutationUpdateManyRegistrationFormsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: RegistrationFormUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RegistrationFormManyWhereInput>;
};


export type MutationUpdateManyTalksArgs = {
  data: TalkUpdateManyInput;
  where?: InputMaybe<TalkManyWhereInput>;
};


export type MutationUpdateManyTalksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: TalkUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TalkManyWhereInput>;
};


export type MutationUpdateManyTalksListsArgs = {
  data: TalksListUpdateManyInput;
  where?: InputMaybe<TalksListManyWhereInput>;
};


export type MutationUpdateManyTalksListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: TalksListUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TalksListManyWhereInput>;
};


export type MutationUpdateManyWhyAttendsArgs = {
  data: WhyAttendUpdateManyInput;
  where?: InputMaybe<WhyAttendManyWhereInput>;
};


export type MutationUpdateManyWhyAttendsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: WhyAttendUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WhyAttendManyWhereInput>;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdatePersonalizedHeroesListArgs = {
  data: PersonalizedHeroesListUpdateInput;
  where: PersonalizedHeroesListWhereUniqueInput;
};


export type MutationUpdatePersonalizedTalksListListArgs = {
  data: PersonalizedTalksListListUpdateInput;
  where: PersonalizedTalksListListWhereUniqueInput;
};


export type MutationUpdateRegistrationFormArgs = {
  data: RegistrationFormUpdateInput;
  where: RegistrationFormWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateTalkArgs = {
  data: TalkUpdateInput;
  where: TalkWhereUniqueInput;
};


export type MutationUpdateTalksListArgs = {
  data: TalksListUpdateInput;
  where: TalksListWhereUniqueInput;
};


export type MutationUpdateWhyAttendArgs = {
  data: WhyAttendUpdateInput;
  where: WhyAttendWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertCallToActionArgs = {
  upsert: CallToActionUpsertInput;
  where: CallToActionWhereUniqueInput;
};


export type MutationUpsertHeroArgs = {
  upsert: HeroUpsertInput;
  where: HeroWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertPersonalizedHeroesListArgs = {
  upsert: PersonalizedHeroesListUpsertInput;
  where: PersonalizedHeroesListWhereUniqueInput;
};


export type MutationUpsertPersonalizedTalksListListArgs = {
  upsert: PersonalizedTalksListListUpsertInput;
  where: PersonalizedTalksListListWhereUniqueInput;
};


export type MutationUpsertRegistrationFormArgs = {
  upsert: RegistrationFormUpsertInput;
  where: RegistrationFormWhereUniqueInput;
};


export type MutationUpsertTalkArgs = {
  upsert: TalkUpsertInput;
  where: TalkWhereUniqueInput;
};


export type MutationUpsertTalksListArgs = {
  upsert: TalksListUpsertInput;
  where: TalksListWhereUniqueInput;
};


export type MutationUpsertWhyAttendArgs = {
  upsert: WhyAttendUpsertInput;
  where: WhyAttendWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Node & {
  __typename?: 'Page';
  components: Array<PageComponents>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  uniformContextEnrichmentTagging?: Maybe<Scalars['Json']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PageComponentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PagePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PageUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PageComponents = CallToAction | Hero | PersonalizedHeroesList | PersonalizedTalksListList | RegistrationForm | TalksList | WhyAttend;

export type PageComponentsConnectInput = {
  CallToAction?: InputMaybe<CallToActionConnectInput>;
  Hero?: InputMaybe<HeroConnectInput>;
  PersonalizedHeroesList?: InputMaybe<PersonalizedHeroesListConnectInput>;
  PersonalizedTalksListList?: InputMaybe<PersonalizedTalksListListConnectInput>;
  RegistrationForm?: InputMaybe<RegistrationFormConnectInput>;
  TalksList?: InputMaybe<TalksListConnectInput>;
  WhyAttend?: InputMaybe<WhyAttendConnectInput>;
};

export type PageComponentsCreateInput = {
  CallToAction?: InputMaybe<CallToActionCreateInput>;
  Hero?: InputMaybe<HeroCreateInput>;
  PersonalizedHeroesList?: InputMaybe<PersonalizedHeroesListCreateInput>;
  PersonalizedTalksListList?: InputMaybe<PersonalizedTalksListListCreateInput>;
  RegistrationForm?: InputMaybe<RegistrationFormCreateInput>;
  TalksList?: InputMaybe<TalksListCreateInput>;
  WhyAttend?: InputMaybe<WhyAttendCreateInput>;
};

export type PageComponentsCreateManyInlineInput = {
  /** Connect multiple existing PageComponents documents */
  connect?: InputMaybe<Array<PageComponentsWhereUniqueInput>>;
  /** Create and connect multiple existing PageComponents documents */
  create?: InputMaybe<Array<PageComponentsCreateInput>>;
};

export type PageComponentsCreateOneInlineInput = {
  /** Connect one existing PageComponents document */
  connect?: InputMaybe<PageComponentsWhereUniqueInput>;
  /** Create and connect one PageComponents document */
  create?: InputMaybe<PageComponentsCreateInput>;
};

export type PageComponentsUpdateInput = {
  CallToAction?: InputMaybe<CallToActionUpdateInput>;
  Hero?: InputMaybe<HeroUpdateInput>;
  PersonalizedHeroesList?: InputMaybe<PersonalizedHeroesListUpdateInput>;
  PersonalizedTalksListList?: InputMaybe<PersonalizedTalksListListUpdateInput>;
  RegistrationForm?: InputMaybe<RegistrationFormUpdateInput>;
  TalksList?: InputMaybe<TalksListUpdateInput>;
  WhyAttend?: InputMaybe<WhyAttendUpdateInput>;
};

export type PageComponentsUpdateManyInlineInput = {
  /** Connect multiple existing PageComponents documents */
  connect?: InputMaybe<Array<PageComponentsConnectInput>>;
  /** Create and connect multiple PageComponents documents */
  create?: InputMaybe<Array<PageComponentsCreateInput>>;
  /** Delete multiple PageComponents documents */
  delete?: InputMaybe<Array<PageComponentsWhereUniqueInput>>;
  /** Disconnect multiple PageComponents documents */
  disconnect?: InputMaybe<Array<PageComponentsWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PageComponents documents */
  set?: InputMaybe<Array<PageComponentsWhereUniqueInput>>;
  /** Update multiple PageComponents documents */
  update?: InputMaybe<Array<PageComponentsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PageComponents documents */
  upsert?: InputMaybe<Array<PageComponentsUpsertWithNestedWhereUniqueInput>>;
};

export type PageComponentsUpdateManyWithNestedWhereInput = {
  CallToAction?: InputMaybe<CallToActionUpdateManyWithNestedWhereInput>;
  Hero?: InputMaybe<HeroUpdateManyWithNestedWhereInput>;
  PersonalizedHeroesList?: InputMaybe<PersonalizedHeroesListUpdateManyWithNestedWhereInput>;
  PersonalizedTalksListList?: InputMaybe<PersonalizedTalksListListUpdateManyWithNestedWhereInput>;
  RegistrationForm?: InputMaybe<RegistrationFormUpdateManyWithNestedWhereInput>;
  TalksList?: InputMaybe<TalksListUpdateManyWithNestedWhereInput>;
  WhyAttend?: InputMaybe<WhyAttendUpdateManyWithNestedWhereInput>;
};

export type PageComponentsUpdateOneInlineInput = {
  /** Connect existing PageComponents document */
  connect?: InputMaybe<PageComponentsWhereUniqueInput>;
  /** Create and connect one PageComponents document */
  create?: InputMaybe<PageComponentsCreateInput>;
  /** Delete currently connected PageComponents document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected PageComponents document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single PageComponents document */
  update?: InputMaybe<PageComponentsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageComponents document */
  upsert?: InputMaybe<PageComponentsUpsertWithNestedWhereUniqueInput>;
};

export type PageComponentsUpdateWithNestedWhereUniqueInput = {
  CallToAction?: InputMaybe<CallToActionUpdateWithNestedWhereUniqueInput>;
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  PersonalizedHeroesList?: InputMaybe<PersonalizedHeroesListUpdateWithNestedWhereUniqueInput>;
  PersonalizedTalksListList?: InputMaybe<PersonalizedTalksListListUpdateWithNestedWhereUniqueInput>;
  RegistrationForm?: InputMaybe<RegistrationFormUpdateWithNestedWhereUniqueInput>;
  TalksList?: InputMaybe<TalksListUpdateWithNestedWhereUniqueInput>;
  WhyAttend?: InputMaybe<WhyAttendUpdateWithNestedWhereUniqueInput>;
};

export type PageComponentsUpsertWithNestedWhereUniqueInput = {
  CallToAction?: InputMaybe<CallToActionUpsertWithNestedWhereUniqueInput>;
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
  PersonalizedHeroesList?: InputMaybe<PersonalizedHeroesListUpsertWithNestedWhereUniqueInput>;
  PersonalizedTalksListList?: InputMaybe<PersonalizedTalksListListUpsertWithNestedWhereUniqueInput>;
  RegistrationForm?: InputMaybe<RegistrationFormUpsertWithNestedWhereUniqueInput>;
  TalksList?: InputMaybe<TalksListUpsertWithNestedWhereUniqueInput>;
  WhyAttend?: InputMaybe<WhyAttendUpsertWithNestedWhereUniqueInput>;
};

export type PageComponentsWhereInput = {
  CallToAction?: InputMaybe<CallToActionWhereInput>;
  Hero?: InputMaybe<HeroWhereInput>;
  PersonalizedHeroesList?: InputMaybe<PersonalizedHeroesListWhereInput>;
  PersonalizedTalksListList?: InputMaybe<PersonalizedTalksListListWhereInput>;
  RegistrationForm?: InputMaybe<RegistrationFormWhereInput>;
  TalksList?: InputMaybe<TalksListWhereInput>;
  WhyAttend?: InputMaybe<WhyAttendWhereInput>;
};

export type PageComponentsWhereUniqueInput = {
  CallToAction?: InputMaybe<CallToActionWhereUniqueInput>;
  Hero?: InputMaybe<HeroWhereUniqueInput>;
  PersonalizedHeroesList?: InputMaybe<PersonalizedHeroesListWhereUniqueInput>;
  PersonalizedTalksListList?: InputMaybe<PersonalizedTalksListListWhereUniqueInput>;
  RegistrationForm?: InputMaybe<RegistrationFormWhereUniqueInput>;
  TalksList?: InputMaybe<TalksListWhereUniqueInput>;
  WhyAttend?: InputMaybe<WhyAttendWhereUniqueInput>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  components?: InputMaybe<PageComponentsCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  uniformContextEnrichmentTagging?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageUpdateInput = {
  components?: InputMaybe<PageComponentsUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uniformContextEnrichmentTagging?: InputMaybe<Scalars['Json']>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  title?: InputMaybe<Scalars['String']>;
  uniformContextEnrichmentTagging?: InputMaybe<Scalars['Json']>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type PersonalizedHeroesList = Node & {
  __typename?: 'PersonalizedHeroesList';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<PersonalizedHeroesList>;
  /** List of PersonalizedHeroesList versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  page?: Maybe<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  uniformContextPersonalizationList: Array<Hero>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PersonalizedHeroesListCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PersonalizedHeroesListDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PersonalizedHeroesListHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PersonalizedHeroesListPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PersonalizedHeroesListPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PersonalizedHeroesListScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PersonalizedHeroesListUniformContextPersonalizationListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<HeroOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroWhereInput>;
};


export type PersonalizedHeroesListUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PersonalizedHeroesListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PersonalizedHeroesListWhereUniqueInput;
};

/** A connection to a list of items. */
export type PersonalizedHeroesListConnection = {
  __typename?: 'PersonalizedHeroesListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PersonalizedHeroesListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PersonalizedHeroesListCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<PageCreateOneInlineInput>;
  uniformContextPersonalizationList?: InputMaybe<HeroCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PersonalizedHeroesListCreateManyInlineInput = {
  /** Connect multiple existing PersonalizedHeroesList documents */
  connect?: InputMaybe<Array<PersonalizedHeroesListWhereUniqueInput>>;
  /** Create and connect multiple existing PersonalizedHeroesList documents */
  create?: InputMaybe<Array<PersonalizedHeroesListCreateInput>>;
};

export type PersonalizedHeroesListCreateOneInlineInput = {
  /** Connect one existing PersonalizedHeroesList document */
  connect?: InputMaybe<PersonalizedHeroesListWhereUniqueInput>;
  /** Create and connect one PersonalizedHeroesList document */
  create?: InputMaybe<PersonalizedHeroesListCreateInput>;
};

/** An edge in a connection. */
export type PersonalizedHeroesListEdge = {
  __typename?: 'PersonalizedHeroesListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PersonalizedHeroesList;
};

/** Identifies documents */
export type PersonalizedHeroesListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonalizedHeroesListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonalizedHeroesListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonalizedHeroesListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  uniformContextPersonalizationList_every?: InputMaybe<HeroWhereInput>;
  uniformContextPersonalizationList_none?: InputMaybe<HeroWhereInput>;
  uniformContextPersonalizationList_some?: InputMaybe<HeroWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PersonalizedHeroesListOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PersonalizedHeroesListUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<PageUpdateOneInlineInput>;
  uniformContextPersonalizationList?: InputMaybe<HeroUpdateManyInlineInput>;
};

export type PersonalizedHeroesListUpdateManyInlineInput = {
  /** Connect multiple existing PersonalizedHeroesList documents */
  connect?: InputMaybe<Array<PersonalizedHeroesListConnectInput>>;
  /** Create and connect multiple PersonalizedHeroesList documents */
  create?: InputMaybe<Array<PersonalizedHeroesListCreateInput>>;
  /** Delete multiple PersonalizedHeroesList documents */
  delete?: InputMaybe<Array<PersonalizedHeroesListWhereUniqueInput>>;
  /** Disconnect multiple PersonalizedHeroesList documents */
  disconnect?: InputMaybe<Array<PersonalizedHeroesListWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PersonalizedHeroesList documents */
  set?: InputMaybe<Array<PersonalizedHeroesListWhereUniqueInput>>;
  /** Update multiple PersonalizedHeroesList documents */
  update?: InputMaybe<Array<PersonalizedHeroesListUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PersonalizedHeroesList documents */
  upsert?: InputMaybe<Array<PersonalizedHeroesListUpsertWithNestedWhereUniqueInput>>;
};

export type PersonalizedHeroesListUpdateManyInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type PersonalizedHeroesListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PersonalizedHeroesListUpdateManyInput;
  /** Document search */
  where: PersonalizedHeroesListWhereInput;
};

export type PersonalizedHeroesListUpdateOneInlineInput = {
  /** Connect existing PersonalizedHeroesList document */
  connect?: InputMaybe<PersonalizedHeroesListWhereUniqueInput>;
  /** Create and connect one PersonalizedHeroesList document */
  create?: InputMaybe<PersonalizedHeroesListCreateInput>;
  /** Delete currently connected PersonalizedHeroesList document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected PersonalizedHeroesList document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single PersonalizedHeroesList document */
  update?: InputMaybe<PersonalizedHeroesListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PersonalizedHeroesList document */
  upsert?: InputMaybe<PersonalizedHeroesListUpsertWithNestedWhereUniqueInput>;
};

export type PersonalizedHeroesListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PersonalizedHeroesListUpdateInput;
  /** Unique document search */
  where: PersonalizedHeroesListWhereUniqueInput;
};

export type PersonalizedHeroesListUpsertInput = {
  /** Create document if it didn't exist */
  create: PersonalizedHeroesListCreateInput;
  /** Update document if it exists */
  update: PersonalizedHeroesListUpdateInput;
};

export type PersonalizedHeroesListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PersonalizedHeroesListUpsertInput;
  /** Unique document search */
  where: PersonalizedHeroesListWhereUniqueInput;
};

/** Identifies documents */
export type PersonalizedHeroesListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonalizedHeroesListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonalizedHeroesListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonalizedHeroesListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  uniformContextPersonalizationList_every?: InputMaybe<HeroWhereInput>;
  uniformContextPersonalizationList_none?: InputMaybe<HeroWhereInput>;
  uniformContextPersonalizationList_some?: InputMaybe<HeroWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References PersonalizedHeroesList record uniquely */
export type PersonalizedHeroesListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PersonalizedTalksListList = Node & {
  __typename?: 'PersonalizedTalksListList';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<PersonalizedTalksListList>;
  /** List of PersonalizedTalksListList versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  page?: Maybe<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  uniformContextPersonalizationList: Array<TalksList>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PersonalizedTalksListListCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PersonalizedTalksListListDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PersonalizedTalksListListHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PersonalizedTalksListListPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PersonalizedTalksListListPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PersonalizedTalksListListScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PersonalizedTalksListListUniformContextPersonalizationListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TalksListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TalksListWhereInput>;
};


export type PersonalizedTalksListListUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PersonalizedTalksListListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PersonalizedTalksListListWhereUniqueInput;
};

/** A connection to a list of items. */
export type PersonalizedTalksListListConnection = {
  __typename?: 'PersonalizedTalksListListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PersonalizedTalksListListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PersonalizedTalksListListCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<PageCreateOneInlineInput>;
  uniformContextPersonalizationList?: InputMaybe<TalksListCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PersonalizedTalksListListCreateManyInlineInput = {
  /** Connect multiple existing PersonalizedTalksListList documents */
  connect?: InputMaybe<Array<PersonalizedTalksListListWhereUniqueInput>>;
  /** Create and connect multiple existing PersonalizedTalksListList documents */
  create?: InputMaybe<Array<PersonalizedTalksListListCreateInput>>;
};

export type PersonalizedTalksListListCreateOneInlineInput = {
  /** Connect one existing PersonalizedTalksListList document */
  connect?: InputMaybe<PersonalizedTalksListListWhereUniqueInput>;
  /** Create and connect one PersonalizedTalksListList document */
  create?: InputMaybe<PersonalizedTalksListListCreateInput>;
};

/** An edge in a connection. */
export type PersonalizedTalksListListEdge = {
  __typename?: 'PersonalizedTalksListListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PersonalizedTalksListList;
};

/** Identifies documents */
export type PersonalizedTalksListListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonalizedTalksListListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonalizedTalksListListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonalizedTalksListListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  uniformContextPersonalizationList_every?: InputMaybe<TalksListWhereInput>;
  uniformContextPersonalizationList_none?: InputMaybe<TalksListWhereInput>;
  uniformContextPersonalizationList_some?: InputMaybe<TalksListWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PersonalizedTalksListListOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PersonalizedTalksListListUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<PageUpdateOneInlineInput>;
  uniformContextPersonalizationList?: InputMaybe<TalksListUpdateManyInlineInput>;
};

export type PersonalizedTalksListListUpdateManyInlineInput = {
  /** Connect multiple existing PersonalizedTalksListList documents */
  connect?: InputMaybe<Array<PersonalizedTalksListListConnectInput>>;
  /** Create and connect multiple PersonalizedTalksListList documents */
  create?: InputMaybe<Array<PersonalizedTalksListListCreateInput>>;
  /** Delete multiple PersonalizedTalksListList documents */
  delete?: InputMaybe<Array<PersonalizedTalksListListWhereUniqueInput>>;
  /** Disconnect multiple PersonalizedTalksListList documents */
  disconnect?: InputMaybe<Array<PersonalizedTalksListListWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PersonalizedTalksListList documents */
  set?: InputMaybe<Array<PersonalizedTalksListListWhereUniqueInput>>;
  /** Update multiple PersonalizedTalksListList documents */
  update?: InputMaybe<Array<PersonalizedTalksListListUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PersonalizedTalksListList documents */
  upsert?: InputMaybe<Array<PersonalizedTalksListListUpsertWithNestedWhereUniqueInput>>;
};

export type PersonalizedTalksListListUpdateManyInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type PersonalizedTalksListListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PersonalizedTalksListListUpdateManyInput;
  /** Document search */
  where: PersonalizedTalksListListWhereInput;
};

export type PersonalizedTalksListListUpdateOneInlineInput = {
  /** Connect existing PersonalizedTalksListList document */
  connect?: InputMaybe<PersonalizedTalksListListWhereUniqueInput>;
  /** Create and connect one PersonalizedTalksListList document */
  create?: InputMaybe<PersonalizedTalksListListCreateInput>;
  /** Delete currently connected PersonalizedTalksListList document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected PersonalizedTalksListList document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single PersonalizedTalksListList document */
  update?: InputMaybe<PersonalizedTalksListListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PersonalizedTalksListList document */
  upsert?: InputMaybe<PersonalizedTalksListListUpsertWithNestedWhereUniqueInput>;
};

export type PersonalizedTalksListListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PersonalizedTalksListListUpdateInput;
  /** Unique document search */
  where: PersonalizedTalksListListWhereUniqueInput;
};

export type PersonalizedTalksListListUpsertInput = {
  /** Create document if it didn't exist */
  create: PersonalizedTalksListListCreateInput;
  /** Update document if it exists */
  update: PersonalizedTalksListListUpdateInput;
};

export type PersonalizedTalksListListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PersonalizedTalksListListUpsertInput;
  /** Unique document search */
  where: PersonalizedTalksListListWhereUniqueInput;
};

/** Identifies documents */
export type PersonalizedTalksListListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonalizedTalksListListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonalizedTalksListListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonalizedTalksListListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  uniformContextPersonalizationList_every?: InputMaybe<TalksListWhereInput>;
  uniformContextPersonalizationList_none?: InputMaybe<TalksListWhereInput>;
  uniformContextPersonalizationList_some?: InputMaybe<TalksListWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References PersonalizedTalksListList record uniquely */
export type PersonalizedTalksListListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single callToAction */
  callToAction?: Maybe<CallToAction>;
  /** Retrieve document version */
  callToActionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple callToActions */
  callToActions: Array<CallToAction>;
  /** Retrieve multiple callToActions using the Relay connection interface */
  callToActionsConnection: CallToActionConnection;
  /** Retrieve a single hero */
  hero?: Maybe<Hero>;
  /** Retrieve document version */
  heroVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple heroes */
  heroes: Array<Hero>;
  /** Retrieve multiple heroes using the Relay connection interface */
  heroesConnection: HeroConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single personalizedHeroesList */
  personalizedHeroesList?: Maybe<PersonalizedHeroesList>;
  /** Retrieve document version */
  personalizedHeroesListVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple personalizedHeroesLists */
  personalizedHeroesLists: Array<PersonalizedHeroesList>;
  /** Retrieve multiple personalizedHeroesLists using the Relay connection interface */
  personalizedHeroesListsConnection: PersonalizedHeroesListConnection;
  /** Retrieve a single personalizedTalksListList */
  personalizedTalksListList?: Maybe<PersonalizedTalksListList>;
  /** Retrieve document version */
  personalizedTalksListListVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple personalizedTalksListLists */
  personalizedTalksListLists: Array<PersonalizedTalksListList>;
  /** Retrieve multiple personalizedTalksListLists using the Relay connection interface */
  personalizedTalksListListsConnection: PersonalizedTalksListListConnection;
  /** Retrieve a single registrationForm */
  registrationForm?: Maybe<RegistrationForm>;
  /** Retrieve document version */
  registrationFormVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple registrationForms */
  registrationForms: Array<RegistrationForm>;
  /** Retrieve multiple registrationForms using the Relay connection interface */
  registrationFormsConnection: RegistrationFormConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single talk */
  talk?: Maybe<Talk>;
  /** Retrieve document version */
  talkVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple talks */
  talks: Array<Talk>;
  /** Retrieve multiple talks using the Relay connection interface */
  talksConnection: TalkConnection;
  /** Retrieve a single talksList */
  talksList?: Maybe<TalksList>;
  /** Retrieve document version */
  talksListVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple talksLists */
  talksLists: Array<TalksList>;
  /** Retrieve multiple talksLists using the Relay connection interface */
  talksListsConnection: TalksListConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve a single whyAttend */
  whyAttend?: Maybe<WhyAttend>;
  /** Retrieve document version */
  whyAttendVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple whyAttends */
  whyAttends: Array<WhyAttend>;
  /** Retrieve multiple whyAttends using the Relay connection interface */
  whyAttendsConnection: WhyAttendConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryCallToActionArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CallToActionWhereUniqueInput;
};


export type QueryCallToActionVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCallToActionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CallToActionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CallToActionWhereInput>;
};


export type QueryCallToActionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CallToActionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CallToActionWhereInput>;
};


export type QueryHeroArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: HeroWhereUniqueInput;
};


export type QueryHeroVersionArgs = {
  where: VersionWhereInput;
};


export type QueryHeroesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HeroOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<HeroWhereInput>;
};


export type QueryHeroesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HeroOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<HeroWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPersonalizedHeroesListArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PersonalizedHeroesListWhereUniqueInput;
};


export type QueryPersonalizedHeroesListVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPersonalizedHeroesListsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PersonalizedHeroesListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PersonalizedHeroesListWhereInput>;
};


export type QueryPersonalizedHeroesListsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PersonalizedHeroesListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PersonalizedHeroesListWhereInput>;
};


export type QueryPersonalizedTalksListListArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PersonalizedTalksListListWhereUniqueInput;
};


export type QueryPersonalizedTalksListListVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPersonalizedTalksListListsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PersonalizedTalksListListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PersonalizedTalksListListWhereInput>;
};


export type QueryPersonalizedTalksListListsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PersonalizedTalksListListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PersonalizedTalksListListWhereInput>;
};


export type QueryRegistrationFormArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: RegistrationFormWhereUniqueInput;
};


export type QueryRegistrationFormVersionArgs = {
  where: VersionWhereInput;
};


export type QueryRegistrationFormsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<RegistrationFormOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<RegistrationFormWhereInput>;
};


export type QueryRegistrationFormsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<RegistrationFormOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<RegistrationFormWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryTalkArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TalkWhereUniqueInput;
};


export type QueryTalkVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTalksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TalkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TalkWhereInput>;
};


export type QueryTalksConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TalkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TalkWhereInput>;
};


export type QueryTalksListArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TalksListWhereUniqueInput;
};


export type QueryTalksListVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTalksListsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TalksListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TalksListWhereInput>;
};


export type QueryTalksListsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TalksListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TalksListWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryWhyAttendArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: WhyAttendWhereUniqueInput;
};


export type QueryWhyAttendVersionArgs = {
  where: VersionWhereInput;
};


export type QueryWhyAttendsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<WhyAttendOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<WhyAttendWhereInput>;
};


export type QueryWhyAttendsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<WhyAttendOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<WhyAttendWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

export type RegistrationForm = Node & {
  __typename?: 'RegistrationForm';
  buttonText: Scalars['String'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<RegistrationForm>;
  heading: Scalars['String'];
  /** List of RegistrationForm versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  page?: Maybe<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  registeredText: Scalars['String'];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type RegistrationFormCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type RegistrationFormDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type RegistrationFormHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type RegistrationFormPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type RegistrationFormPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type RegistrationFormScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type RegistrationFormUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type RegistrationFormConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: RegistrationFormWhereUniqueInput;
};

/** A connection to a list of items. */
export type RegistrationFormConnection = {
  __typename?: 'RegistrationFormConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<RegistrationFormEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type RegistrationFormCreateInput = {
  buttonText: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  heading: Scalars['String'];
  page?: InputMaybe<PageCreateOneInlineInput>;
  registeredText: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RegistrationFormCreateManyInlineInput = {
  /** Connect multiple existing RegistrationForm documents */
  connect?: InputMaybe<Array<RegistrationFormWhereUniqueInput>>;
  /** Create and connect multiple existing RegistrationForm documents */
  create?: InputMaybe<Array<RegistrationFormCreateInput>>;
};

export type RegistrationFormCreateOneInlineInput = {
  /** Connect one existing RegistrationForm document */
  connect?: InputMaybe<RegistrationFormWhereUniqueInput>;
  /** Create and connect one RegistrationForm document */
  create?: InputMaybe<RegistrationFormCreateInput>;
};

/** An edge in a connection. */
export type RegistrationFormEdge = {
  __typename?: 'RegistrationFormEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: RegistrationForm;
};

/** Identifies documents */
export type RegistrationFormManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RegistrationFormWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RegistrationFormWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RegistrationFormWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  buttonText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  buttonText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  heading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  heading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  registeredText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  registeredText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  registeredText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  registeredText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  registeredText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  registeredText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  registeredText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  registeredText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  registeredText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  registeredText_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum RegistrationFormOrderByInput {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RegisteredTextAsc = 'registeredText_ASC',
  RegisteredTextDesc = 'registeredText_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type RegistrationFormUpdateInput = {
  buttonText?: InputMaybe<Scalars['String']>;
  heading?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<PageUpdateOneInlineInput>;
  registeredText?: InputMaybe<Scalars['String']>;
};

export type RegistrationFormUpdateManyInlineInput = {
  /** Connect multiple existing RegistrationForm documents */
  connect?: InputMaybe<Array<RegistrationFormConnectInput>>;
  /** Create and connect multiple RegistrationForm documents */
  create?: InputMaybe<Array<RegistrationFormCreateInput>>;
  /** Delete multiple RegistrationForm documents */
  delete?: InputMaybe<Array<RegistrationFormWhereUniqueInput>>;
  /** Disconnect multiple RegistrationForm documents */
  disconnect?: InputMaybe<Array<RegistrationFormWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing RegistrationForm documents */
  set?: InputMaybe<Array<RegistrationFormWhereUniqueInput>>;
  /** Update multiple RegistrationForm documents */
  update?: InputMaybe<Array<RegistrationFormUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple RegistrationForm documents */
  upsert?: InputMaybe<Array<RegistrationFormUpsertWithNestedWhereUniqueInput>>;
};

export type RegistrationFormUpdateManyInput = {
  buttonText?: InputMaybe<Scalars['String']>;
  heading?: InputMaybe<Scalars['String']>;
  registeredText?: InputMaybe<Scalars['String']>;
};

export type RegistrationFormUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: RegistrationFormUpdateManyInput;
  /** Document search */
  where: RegistrationFormWhereInput;
};

export type RegistrationFormUpdateOneInlineInput = {
  /** Connect existing RegistrationForm document */
  connect?: InputMaybe<RegistrationFormWhereUniqueInput>;
  /** Create and connect one RegistrationForm document */
  create?: InputMaybe<RegistrationFormCreateInput>;
  /** Delete currently connected RegistrationForm document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected RegistrationForm document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single RegistrationForm document */
  update?: InputMaybe<RegistrationFormUpdateWithNestedWhereUniqueInput>;
  /** Upsert single RegistrationForm document */
  upsert?: InputMaybe<RegistrationFormUpsertWithNestedWhereUniqueInput>;
};

export type RegistrationFormUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: RegistrationFormUpdateInput;
  /** Unique document search */
  where: RegistrationFormWhereUniqueInput;
};

export type RegistrationFormUpsertInput = {
  /** Create document if it didn't exist */
  create: RegistrationFormCreateInput;
  /** Update document if it exists */
  update: RegistrationFormUpdateInput;
};

export type RegistrationFormUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: RegistrationFormUpsertInput;
  /** Unique document search */
  where: RegistrationFormWhereUniqueInput;
};

/** Identifies documents */
export type RegistrationFormWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RegistrationFormWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RegistrationFormWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RegistrationFormWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  buttonText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  buttonText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  heading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  heading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  registeredText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  registeredText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  registeredText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  registeredText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  registeredText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  registeredText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  registeredText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  registeredText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  registeredText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  registeredText_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References RegistrationForm record uniquely */
export type RegistrationFormWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | CallToAction | Hero | Page | PersonalizedHeroesList | PersonalizedTalksListList | RegistrationForm | Talk | TalksList | WhyAttend;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Talk = Node & {
  __typename?: 'Talk';
  audience?: Maybe<Audience>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Talk>;
  /** List of Talk versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type TalkCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type TalkDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type TalkHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type TalkPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type TalkScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TalkUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type TalkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TalkWhereUniqueInput;
};

/** A connection to a list of items. */
export type TalkConnection = {
  __typename?: 'TalkConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TalkEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TalkCreateInput = {
  audience?: InputMaybe<Audience>;
  cl7it4bm125z301t1eyf2crgy?: InputMaybe<TalksListCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TalkCreateManyInlineInput = {
  /** Connect multiple existing Talk documents */
  connect?: InputMaybe<Array<TalkWhereUniqueInput>>;
  /** Create and connect multiple existing Talk documents */
  create?: InputMaybe<Array<TalkCreateInput>>;
};

export type TalkCreateOneInlineInput = {
  /** Connect one existing Talk document */
  connect?: InputMaybe<TalkWhereUniqueInput>;
  /** Create and connect one Talk document */
  create?: InputMaybe<TalkCreateInput>;
};

/** An edge in a connection. */
export type TalkEdge = {
  __typename?: 'TalkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Talk;
};

/** Identifies documents */
export type TalkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TalkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TalkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TalkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  audience?: InputMaybe<Audience>;
  /** All values that are contained in given list. */
  audience_in?: InputMaybe<Array<InputMaybe<Audience>>>;
  /** All values that are not equal to given value. */
  audience_not?: InputMaybe<Audience>;
  /** All values that are not contained in given list. */
  audience_not_in?: InputMaybe<Array<InputMaybe<Audience>>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TalkOrderByInput {
  AudienceAsc = 'audience_ASC',
  AudienceDesc = 'audience_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TalkUpdateInput = {
  audience?: InputMaybe<Audience>;
  cl7it4bm125z301t1eyf2crgy?: InputMaybe<TalksListUpdateManyInlineInput>;
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TalkUpdateManyInlineInput = {
  /** Connect multiple existing Talk documents */
  connect?: InputMaybe<Array<TalkConnectInput>>;
  /** Create and connect multiple Talk documents */
  create?: InputMaybe<Array<TalkCreateInput>>;
  /** Delete multiple Talk documents */
  delete?: InputMaybe<Array<TalkWhereUniqueInput>>;
  /** Disconnect multiple Talk documents */
  disconnect?: InputMaybe<Array<TalkWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Talk documents */
  set?: InputMaybe<Array<TalkWhereUniqueInput>>;
  /** Update multiple Talk documents */
  update?: InputMaybe<Array<TalkUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Talk documents */
  upsert?: InputMaybe<Array<TalkUpsertWithNestedWhereUniqueInput>>;
};

export type TalkUpdateManyInput = {
  audience?: InputMaybe<Audience>;
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TalkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TalkUpdateManyInput;
  /** Document search */
  where: TalkWhereInput;
};

export type TalkUpdateOneInlineInput = {
  /** Connect existing Talk document */
  connect?: InputMaybe<TalkWhereUniqueInput>;
  /** Create and connect one Talk document */
  create?: InputMaybe<TalkCreateInput>;
  /** Delete currently connected Talk document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Talk document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Talk document */
  update?: InputMaybe<TalkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Talk document */
  upsert?: InputMaybe<TalkUpsertWithNestedWhereUniqueInput>;
};

export type TalkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TalkUpdateInput;
  /** Unique document search */
  where: TalkWhereUniqueInput;
};

export type TalkUpsertInput = {
  /** Create document if it didn't exist */
  create: TalkCreateInput;
  /** Update document if it exists */
  update: TalkUpdateInput;
};

export type TalkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TalkUpsertInput;
  /** Unique document search */
  where: TalkWhereUniqueInput;
};

/** Identifies documents */
export type TalkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TalkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TalkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TalkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  audience?: InputMaybe<Audience>;
  /** All values that are contained in given list. */
  audience_in?: InputMaybe<Array<InputMaybe<Audience>>>;
  /** All values that are not equal to given value. */
  audience_not?: InputMaybe<Audience>;
  /** All values that are not contained in given list. */
  audience_not_in?: InputMaybe<Array<InputMaybe<Audience>>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Talk record uniquely */
export type TalkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TalksList = Node & {
  __typename?: 'TalksList';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<TalksList>;
  /** List of TalksList versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  numberToShow: Scalars['Int'];
  page?: Maybe<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  registerButtonText?: Maybe<Scalars['String']>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  talks: Array<Talk>;
  title: Scalars['String'];
  titleWhenPersonalised: Scalars['String'];
  uniformContextPersonalizationCriteria?: Maybe<Scalars['Json']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type TalksListCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type TalksListDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type TalksListHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type TalksListPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type TalksListPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type TalksListScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TalksListTalksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TalkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TalkWhereInput>;
};


export type TalksListUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type TalksListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TalksListWhereUniqueInput;
};

/** A connection to a list of items. */
export type TalksListConnection = {
  __typename?: 'TalksListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TalksListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TalksListCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  numberToShow: Scalars['Int'];
  page?: InputMaybe<PageCreateOneInlineInput>;
  personalizationList?: InputMaybe<PersonalizedTalksListListCreateOneInlineInput>;
  registerButtonText?: InputMaybe<Scalars['String']>;
  talks?: InputMaybe<TalkCreateManyInlineInput>;
  title: Scalars['String'];
  titleWhenPersonalised: Scalars['String'];
  uniformContextPersonalizationCriteria?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TalksListCreateManyInlineInput = {
  /** Connect multiple existing TalksList documents */
  connect?: InputMaybe<Array<TalksListWhereUniqueInput>>;
  /** Create and connect multiple existing TalksList documents */
  create?: InputMaybe<Array<TalksListCreateInput>>;
};

export type TalksListCreateOneInlineInput = {
  /** Connect one existing TalksList document */
  connect?: InputMaybe<TalksListWhereUniqueInput>;
  /** Create and connect one TalksList document */
  create?: InputMaybe<TalksListCreateInput>;
};

/** An edge in a connection. */
export type TalksListEdge = {
  __typename?: 'TalksListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TalksList;
};

/** Identifies documents */
export type TalksListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TalksListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TalksListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TalksListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  numberToShow?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  numberToShow_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  numberToShow_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  numberToShow_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  numberToShow_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  numberToShow_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  numberToShow_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  numberToShow_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  page?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  registerButtonText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  registerButtonText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  registerButtonText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  registerButtonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  registerButtonText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  registerButtonText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  registerButtonText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  registerButtonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  registerButtonText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  registerButtonText_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  talks_every?: InputMaybe<TalkWhereInput>;
  talks_none?: InputMaybe<TalkWhereInput>;
  talks_some?: InputMaybe<TalkWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  titleWhenPersonalised?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  titleWhenPersonalised_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  titleWhenPersonalised_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  titleWhenPersonalised_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  titleWhenPersonalised_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  titleWhenPersonalised_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  titleWhenPersonalised_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  titleWhenPersonalised_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  titleWhenPersonalised_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  titleWhenPersonalised_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TalksListOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NumberToShowAsc = 'numberToShow_ASC',
  NumberToShowDesc = 'numberToShow_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RegisterButtonTextAsc = 'registerButtonText_ASC',
  RegisterButtonTextDesc = 'registerButtonText_DESC',
  TitleWhenPersonalisedAsc = 'titleWhenPersonalised_ASC',
  TitleWhenPersonalisedDesc = 'titleWhenPersonalised_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TalksListUpdateInput = {
  numberToShow?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<PageUpdateOneInlineInput>;
  personalizationList?: InputMaybe<PersonalizedTalksListListUpdateOneInlineInput>;
  registerButtonText?: InputMaybe<Scalars['String']>;
  talks?: InputMaybe<TalkUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  titleWhenPersonalised?: InputMaybe<Scalars['String']>;
  uniformContextPersonalizationCriteria?: InputMaybe<Scalars['Json']>;
};

export type TalksListUpdateManyInlineInput = {
  /** Connect multiple existing TalksList documents */
  connect?: InputMaybe<Array<TalksListConnectInput>>;
  /** Create and connect multiple TalksList documents */
  create?: InputMaybe<Array<TalksListCreateInput>>;
  /** Delete multiple TalksList documents */
  delete?: InputMaybe<Array<TalksListWhereUniqueInput>>;
  /** Disconnect multiple TalksList documents */
  disconnect?: InputMaybe<Array<TalksListWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TalksList documents */
  set?: InputMaybe<Array<TalksListWhereUniqueInput>>;
  /** Update multiple TalksList documents */
  update?: InputMaybe<Array<TalksListUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TalksList documents */
  upsert?: InputMaybe<Array<TalksListUpsertWithNestedWhereUniqueInput>>;
};

export type TalksListUpdateManyInput = {
  numberToShow?: InputMaybe<Scalars['Int']>;
  registerButtonText?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  titleWhenPersonalised?: InputMaybe<Scalars['String']>;
  uniformContextPersonalizationCriteria?: InputMaybe<Scalars['Json']>;
};

export type TalksListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TalksListUpdateManyInput;
  /** Document search */
  where: TalksListWhereInput;
};

export type TalksListUpdateOneInlineInput = {
  /** Connect existing TalksList document */
  connect?: InputMaybe<TalksListWhereUniqueInput>;
  /** Create and connect one TalksList document */
  create?: InputMaybe<TalksListCreateInput>;
  /** Delete currently connected TalksList document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected TalksList document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single TalksList document */
  update?: InputMaybe<TalksListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TalksList document */
  upsert?: InputMaybe<TalksListUpsertWithNestedWhereUniqueInput>;
};

export type TalksListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TalksListUpdateInput;
  /** Unique document search */
  where: TalksListWhereUniqueInput;
};

export type TalksListUpsertInput = {
  /** Create document if it didn't exist */
  create: TalksListCreateInput;
  /** Update document if it exists */
  update: TalksListUpdateInput;
};

export type TalksListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TalksListUpsertInput;
  /** Unique document search */
  where: TalksListWhereUniqueInput;
};

/** Identifies documents */
export type TalksListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TalksListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TalksListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TalksListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  numberToShow?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  numberToShow_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  numberToShow_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  numberToShow_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  numberToShow_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  numberToShow_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  numberToShow_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  numberToShow_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  page?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  registerButtonText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  registerButtonText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  registerButtonText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  registerButtonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  registerButtonText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  registerButtonText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  registerButtonText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  registerButtonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  registerButtonText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  registerButtonText_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  talks_every?: InputMaybe<TalkWhereInput>;
  talks_none?: InputMaybe<TalkWhereInput>;
  talks_some?: InputMaybe<TalkWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  titleWhenPersonalised?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  titleWhenPersonalised_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  titleWhenPersonalised_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  titleWhenPersonalised_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  titleWhenPersonalised_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  titleWhenPersonalised_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  titleWhenPersonalised_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  titleWhenPersonalised_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  titleWhenPersonalised_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  titleWhenPersonalised_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References TalksList record uniquely */
export type TalksListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type WhyAttend = Node & {
  __typename?: 'WhyAttend';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<WhyAttend>;
  /** List of WhyAttend versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  page?: Maybe<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type WhyAttendCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type WhyAttendDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type WhyAttendHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type WhyAttendImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type WhyAttendPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type WhyAttendPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type WhyAttendScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type WhyAttendUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type WhyAttendConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: WhyAttendWhereUniqueInput;
};

/** A connection to a list of items. */
export type WhyAttendConnection = {
  __typename?: 'WhyAttendConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<WhyAttendEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type WhyAttendCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  page?: InputMaybe<PageCreateOneInlineInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type WhyAttendCreateManyInlineInput = {
  /** Connect multiple existing WhyAttend documents */
  connect?: InputMaybe<Array<WhyAttendWhereUniqueInput>>;
  /** Create and connect multiple existing WhyAttend documents */
  create?: InputMaybe<Array<WhyAttendCreateInput>>;
};

export type WhyAttendCreateOneInlineInput = {
  /** Connect one existing WhyAttend document */
  connect?: InputMaybe<WhyAttendWhereUniqueInput>;
  /** Create and connect one WhyAttend document */
  create?: InputMaybe<WhyAttendCreateInput>;
};

/** An edge in a connection. */
export type WhyAttendEdge = {
  __typename?: 'WhyAttendEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: WhyAttend;
};

/** Identifies documents */
export type WhyAttendManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WhyAttendWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WhyAttendWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WhyAttendWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  page?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum WhyAttendOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type WhyAttendUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  page?: InputMaybe<PageUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type WhyAttendUpdateManyInlineInput = {
  /** Connect multiple existing WhyAttend documents */
  connect?: InputMaybe<Array<WhyAttendConnectInput>>;
  /** Create and connect multiple WhyAttend documents */
  create?: InputMaybe<Array<WhyAttendCreateInput>>;
  /** Delete multiple WhyAttend documents */
  delete?: InputMaybe<Array<WhyAttendWhereUniqueInput>>;
  /** Disconnect multiple WhyAttend documents */
  disconnect?: InputMaybe<Array<WhyAttendWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing WhyAttend documents */
  set?: InputMaybe<Array<WhyAttendWhereUniqueInput>>;
  /** Update multiple WhyAttend documents */
  update?: InputMaybe<Array<WhyAttendUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple WhyAttend documents */
  upsert?: InputMaybe<Array<WhyAttendUpsertWithNestedWhereUniqueInput>>;
};

export type WhyAttendUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type WhyAttendUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: WhyAttendUpdateManyInput;
  /** Document search */
  where: WhyAttendWhereInput;
};

export type WhyAttendUpdateOneInlineInput = {
  /** Connect existing WhyAttend document */
  connect?: InputMaybe<WhyAttendWhereUniqueInput>;
  /** Create and connect one WhyAttend document */
  create?: InputMaybe<WhyAttendCreateInput>;
  /** Delete currently connected WhyAttend document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected WhyAttend document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single WhyAttend document */
  update?: InputMaybe<WhyAttendUpdateWithNestedWhereUniqueInput>;
  /** Upsert single WhyAttend document */
  upsert?: InputMaybe<WhyAttendUpsertWithNestedWhereUniqueInput>;
};

export type WhyAttendUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: WhyAttendUpdateInput;
  /** Unique document search */
  where: WhyAttendWhereUniqueInput;
};

export type WhyAttendUpsertInput = {
  /** Create document if it didn't exist */
  create: WhyAttendCreateInput;
  /** Update document if it exists */
  update: WhyAttendUpdateInput;
};

export type WhyAttendUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: WhyAttendUpsertInput;
  /** Unique document search */
  where: WhyAttendWhereUniqueInput;
};

/** Identifies documents */
export type WhyAttendWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WhyAttendWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WhyAttendWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WhyAttendWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  page?: InputMaybe<PageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References WhyAttend record uniquely */
export type WhyAttendWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type AllPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPagesQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'Page', id: string, slug: string, title: string }> };

export type CallToActionFieldsFragment = { __typename: 'CallToAction', id: string, subheading?: string | null, buttonLink?: string | null, heading1: string, buttonText1?: string | null, buttonImage?: { __typename?: 'Asset', id: string, height?: number | null, url: string, width?: number | null } | null };

export type TalkFieldsFragment = { __typename?: 'Talk', id: string, title: string, description?: string | null, audience?: Audience | null };

export type PersonalizedHeroFieldsFragment = { __typename: 'PersonalizedHeroesList', id: string, name?: string | null, uniformContextPersonalizationList: Array<{ __typename: 'Hero', id: string, title: string, description?: string | null, buttonLinkSlug?: string | null, uniformContextPersonalizationCriteria?: any | null, buttonText3?: string | null, image?: { __typename?: 'Asset', id: string, height?: number | null, url: string, width?: number | null } | null }> };

export type PersonalisedTalksListFieldsFragment = { __typename: 'PersonalizedTalksListList', id: string, name?: string | null, uniformContextPersonalizationList: Array<{ __typename: 'TalksList', id: string, title: string, titleWhenPersonalised: string, numberToShow: number, registerButtonText?: string | null, uniformContextPersonalizationCriteria?: any | null, talks: Array<{ __typename?: 'Talk', id: string, title: string, description?: string | null, audience?: Audience | null }> }> };

export type RegistrationFormFieldFragment = { __typename: 'RegistrationForm', id: string, heading: string, buttonText: string, registeredText: string };

export type TalksListFieldsFragment = { __typename: 'TalksList', id: string, title: string, titleWhenPersonalised: string, numberToShow: number, registerButtonText?: string | null, uniformContextPersonalizationCriteria?: any | null, talks: Array<{ __typename?: 'Talk', id: string, title: string, description?: string | null, audience?: Audience | null }> };

export type WhyAttendFieldsFragment = { __typename: 'WhyAttend', id: string, title: string, description?: string | null, image?: { __typename?: 'Asset', id: string, height?: number | null, url: string, width?: number | null } | null };

export type HeroFieldsFragment = { __typename: 'Hero', id: string, title: string, description?: string | null, buttonLinkSlug?: string | null, uniformContextPersonalizationCriteria?: any | null, buttonText3?: string | null, image?: { __typename?: 'Asset', id: string, height?: number | null, url: string, width?: number | null } | null };

export type ImageFieldsFragment = { __typename?: 'Asset', id: string, height?: number | null, url: string, width?: number | null };

export type PageQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PageQueryQuery = { __typename?: 'Query', page?: { __typename?: 'Page', id: string, title: string, slug: string, uniformContextEnrichmentTagging?: any | null, components: Array<{ __typename: 'CallToAction', id: string, subheading?: string | null, buttonLink?: string | null, heading1: string, buttonText1?: string | null, buttonImage?: { __typename?: 'Asset', id: string, height?: number | null, url: string, width?: number | null } | null } | { __typename: 'Hero', id: string, title: string, description?: string | null, buttonLinkSlug?: string | null, uniformContextPersonalizationCriteria?: any | null, buttonText3?: string | null, image?: { __typename?: 'Asset', id: string, height?: number | null, url: string, width?: number | null } | null } | { __typename: 'PersonalizedHeroesList', id: string, name?: string | null, uniformContextPersonalizationList: Array<{ __typename: 'Hero', id: string, title: string, description?: string | null, buttonLinkSlug?: string | null, uniformContextPersonalizationCriteria?: any | null, buttonText3?: string | null, image?: { __typename?: 'Asset', id: string, height?: number | null, url: string, width?: number | null } | null }> } | { __typename: 'PersonalizedTalksListList', id: string, name?: string | null, uniformContextPersonalizationList: Array<{ __typename: 'TalksList', id: string, title: string, titleWhenPersonalised: string, numberToShow: number, registerButtonText?: string | null, uniformContextPersonalizationCriteria?: any | null, talks: Array<{ __typename?: 'Talk', id: string, title: string, description?: string | null, audience?: Audience | null }> }> } | { __typename: 'RegistrationForm', id: string, heading: string, buttonText: string, registeredText: string } | { __typename: 'TalksList', id: string, title: string, titleWhenPersonalised: string, numberToShow: number, registerButtonText?: string | null, uniformContextPersonalizationCriteria?: any | null, talks: Array<{ __typename?: 'Talk', id: string, title: string, description?: string | null, audience?: Audience | null }> } | { __typename: 'WhyAttend', id: string, title: string, description?: string | null, image?: { __typename?: 'Asset', id: string, height?: number | null, url: string, width?: number | null } | null }> } | null };
