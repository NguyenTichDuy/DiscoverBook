Meteor.publish('posts', function() {
  return Posts.find();
});
Meteor.publish('posts', function(author) {
  return Posts.find({flagged: false, author: author});
 });