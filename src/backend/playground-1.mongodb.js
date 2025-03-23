/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'nexusDatabase';

// Create a new database.
use(database);

// Create collections
db.createCollection("users");
db.createCollection("events");
db.createCollection("subscriptions")

// Test
const userId = db.users.insertOne({
  username: "BETA TEST",
  password: "NEXUS"
}).insertedId;

const eventId = db.events.insertOne({
  date: ISODate("2025-03-23T10:00:00Z"),
  organiser: userId,
  type: "Test"
}).insertedId;

db.subscriptions.insertOne({
  subscriber: userId,
  event: eventId
});
