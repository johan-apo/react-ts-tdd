import { DefaultPrivacyLevel } from "./user";

export enum TransactionStatus {
  pending = "pending",
  incomplete = "incomplete",
  complete = "complete",
}

export enum TransactionRequestStatus {
  pending = "pending",
  accepted = "accepted",
  rejected = "rejected",
}

export interface Transaction {
  id: string;
  uuid: string;
  source: string;
  amount: number;
  description: string;
  privacyLevel: DefaultPrivacyLevel;
  receiverId: string;
  senderId: string;
}

export type TransactionScenario = {
  status: TransactionStatus;
  requestStatus: TransactionRequestStatus | string;
};
