const checkForDupes = require('../helpers/checkForDupes');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const slugify = require('slugs');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name!',
  },
  slug: String,
  description: {
    type: String,
    trim: true,
    default: 'No description added. Add one now!',
  },
  tags: [String],
  created: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: [
      {
        type: Number,
        required: 'You must supply coordinates!',
      },
    ],
    address: {
      type: String,
      required: 'You must supply an address!',
    },
  },
  photo: String,
});

storeSchema.pre('save', async function (next) {
  if (!this.isModified('name')) {
    next();
    return;
  }
  this.slug = slugify(this.name);
  this.slug = await checkForDupes(this.slug, this.constructor);
  next();
});

module.exports = mongoose.model('Store', storeSchema);
