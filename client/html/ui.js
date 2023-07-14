alt.on('notify', (text, time, type) => {
  showNotification(text, time, type);
});

function showNotification(text, time, type) {
  var notification = document.getElementById('notification');
  var iconClass = '';

  switch (type) {
      case 'error':
          iconClass = 'fas fa-times-circle text-red-500';
          break;
      case 'success':
          iconClass = 'fas fa-check-circle text-green-500';
          break;
      default:
          iconClass = 'fas fa-info-circle text-blue-500';
          break;
  }

  var messageElement = notification.querySelector('.message');
  messageElement.textContent = text;

  notification.classList.remove('hidden');
  notification.classList.remove('translate-x-full');
  notification.querySelector('i').className = iconClass;

  setTimeout(function () {
      notification.classList.add('translate-x-full');
      setTimeout(function () {
          notification.classList.add('hidden');
      }, 500);
  }, time);
}
