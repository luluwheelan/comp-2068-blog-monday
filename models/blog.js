const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false
  },
  status: {
    type: String,
    enum: ['DRAFT', 'PUBLISHED'],
    default: 'DRAFT'
  }
}, {
  timestamps: true
});

// Query helper
BlogSchema.query.drafts = function () {
  return this.where({
    status: 'DRAFT'
  });
};

BlogSchema.query.published = function () {
  return this.where({
    status: 'PUBLISHED'
  });
};

module.exports = mongoose.model('Blog', BlogSchema);