module.exports = {
  init: function(controller) {
    controller.hears([/I want a pizza/i], ['direct_message', 'direct_message'], getAPizza);
  },
}

function getAPizza(bot, message) {
  console.log('bot', bot);
  console.log('message', message);
  console.log(`message, ${message}`);
};
