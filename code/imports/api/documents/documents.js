/* eslint-disable consistent-return */

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';

const Documents = new Mongo.Collection('Documents');
export default Documents;

Documents.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Documents.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Documents.schema = new SimpleSchema({
  published: {
    type: String,
    label: 'The date this document was published.',
    autoValue() {
      if (this.isInsert) return (new Date()).toISOString();
      if (this.isUpsert) return { $setOnInsert: (new Date()).toISOString() };
      this.unset();
    },
  },
  updated: {
    type: String,
    label: 'The date this document was last updated.',
    autoValue() {
      if (this.isUpsert) return (new Date()).toISOString();
    },
  },
  title: {
    type: String,
    label: 'The title of the document.',
  },
  body: {
    type: String,
    label: 'The body of the document.',
  },
  category: {
    type: String,
    label: 'The category for the document.',
    defaultValue: 'posts',
    optional: true,
  },
  tags: {
    type: Array,
    label: 'The tags for the document.',
    optional: true,
  },
  'tags.$': {
    type: String,
    label: 'The tags for the document.',
  },
  twitter: {
    type: String,
    label: 'The Twitter username of this content\'s author.',
    optional: true,
  },
});

Documents.attachSchema(Documents.schema);

Factory.define('document', Documents, {
  title: () => 'Factory Title',
  body: () => 'Factory Body',
});
