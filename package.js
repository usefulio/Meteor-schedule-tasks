Package.describe({
  summary: "Schedule tasks in Meteor"
});

Npm.depends({
  later: '1.1.6'
});

Package.on_use(function (api) {
  api.add_files('schedule_tasks.js', ['server']);

  api.export('later', ['server']);
  api.export('ScheduleTask', ['server']);
});
