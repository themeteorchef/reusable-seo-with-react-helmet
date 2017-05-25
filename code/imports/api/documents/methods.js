import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Documents from './documents';
import rateLimit from '../../modules/rate-limit.js';

export const upsertDocument = new ValidatedMethod({
  name: 'documents.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    category: { type: String, optional: true },
    body: { type: String, optional: true },
    tags: { type: Array, optional: true },
    'tags.$': { type: String },
    twitter: { type: String, optional: true },
  }).validator(),
  run(document) {
    console.log(document);
    return Documents.upsert({ _id: document._id }, { $set: document });
  },
});

export const removeDocument = new ValidatedMethod({
  name: 'documents.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Documents.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertDocument,
    removeDocument,
  ],
  limit: 5,
  timeRange: 1000,
});
