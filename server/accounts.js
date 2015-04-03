Accounts.onCreateUser(function(options, user) {
  user.intercomHash = IntercomHash(user, 'axw48e3n328dbkTQ_ObM3PtfjZeP4QtxxI6A0uSp');

  if (options.profile)
    user.profile = options.profile;

  return user;
});