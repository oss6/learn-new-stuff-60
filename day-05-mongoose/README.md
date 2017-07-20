# Day 5: Mongoose

Every web framework has ORM libraries for DBMSs. I previously used Eloquent ORM for Laravel PHP and others.
For developing my project <a href="https://github.com/oss6/hombre">Hombre</a> I used MongoDB and as an ORM Mongoose.

To create Schema's for a document:

```javascript
var UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  active: {type: String, default: false}
});
```

Then we compile the Schema into a Model:

```javascript
var UserModel = mongoose.model('UserModel', UserSchema);
```

Then we use the Model as follows:

```javascript
var omar = new Tank({
  firstName: 'Omar',
  lastName: 'Rossi',
  email: 'omarossi@gmail.com'
});
omar.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

// or

User.create({ ... }, function (err, userInstance) {
  if (err) return handleError(err);
  // saved!
});
```
