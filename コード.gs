function doPost(e) {
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');
  var bot_name = "てすと";
  var bot_icon = "http://i.imgur.com/DP2oyoM.jpg";
  var verify_token = "AzrGMm8JddxCshLrP1ljUi8S";
  
  //投稿の認証
  if (verify_token != e.parameter.token) {
    throw new Error("invalid token.");
  }
  
  var app = SlackApp.create(token);
  
  //Trigger Words部分の削除
  var text = e.parameter.text.substr(8);
  
  var message = e.parameter.user_name + "さんは「" + text + "」と言っています。";
  
  return app.postMessage(e.parameter.channel_id, message, {
    username: bot_name,
    icon_url: bot_icon
  });
}