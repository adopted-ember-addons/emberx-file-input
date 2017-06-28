function buildChangeEvent(options = {}) {
  let event = document.createEvent('Events');
  event.initEvent('change', true, true);
  $.extend(event, options);
  return event;
}

export default function(selector, file) {
  let changeEvent = buildChangeEvent({ testingFiles: [file] });
  $(selector)[0].dispatchEvent(changeEvent);
}
