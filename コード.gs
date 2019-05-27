function doPost(e) {
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');
  var bot_name = "テストくん";
  var bot_icon = "http://i.imgur.com/DP2oyoM.jpg";
  
  var app = SlackApp.create(token);
  
  var message = "はい、こんにちは"
  
  return app.postMessage("#general", message, {
    username: bot_name,
    icon_url: bot_icon
  });
}