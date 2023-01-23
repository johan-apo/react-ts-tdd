export enum DefaultPrivacyLevel {
  public = "public",
  private = "private",
  contacts = "contacts",
}

export interface User {
  id: string;
  uuid: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
  balance: number;
  avatar: string;
  defaultPrivacyLevel: DefaultPrivacyLevel;
  createdAt: Date;
  modifiedAt: Date;
}