import * as dotenv from "dotenv";
import bcrypt from "bcrypt";
import { times } from "lodash/fp";
import { nanoid } from "nanoid";
import { faker } from "@faker-js/faker";
import { DefaultPrivacyLevel, User } from "../src/models/user";

dotenv.config();

if (
  typeof process.env.SEED_USERBASE_SIZE === "undefined" ||
  typeof process.env.SEED_DEFAULT_USER_PASSWORD === "undefined"
) {
  throw new Error("Check and set your environmental variables");
}

export const userbaseSize = +process.env.SEED_USERBASE_SIZE;
export const defaultPassword = process.env.SEED_DEFAULT_USER_PASSWORD;

const salt = bcrypt.genSaltSync(10);
export const passwordHash = bcrypt.hashSync(defaultPassword, salt);

export function getUserAvatar(identifier: string) {
  return `https://avatars.dicebear.com/api/human/${identifier}.svg`;
}

export function createFakeUser(): User {
  const id = nanoid();
  
  return {
    id,
    uuid: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number("0"),
    avatar: getUserAvatar(id),
    defaultPrivacyLevel: faker.helpers.arrayElement([
      DefaultPrivacyLevel.public,
      DefaultPrivacyLevel.private,
      DefaultPrivacyLevel.contacts,
    ]),
    balance: faker.datatype.number({ min: 10000, max: 200000 }),
    createdAt: faker.date.past(),
    modifiedAt: faker.date.recent(),
  };
}

export function createSeedUsers() {
  return times(() => createFakeUser(), userbaseSize);
}

export function buildDatabase() {
  const seedUsers: User[] = createSeedUsers();

  return {
    users: seedUsers,
  };
}
