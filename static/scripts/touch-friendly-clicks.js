/*
 * Supplies a function which provides a touch friendly way to handle element
 * click.
 *
 * Gijs Burghoorn
 * April 1 2021
 */

// We need to register 'touchstart' for touch devices, 'click' for pointer
// devices or both when a hybrid device shows up.
//
// https://joshtronic.com/2015/04/19/handling-click-and-touch-events-on-the-same-element/
var clickEvents = (function() {
    var events = [];
  if ('ontouchstart' in document.documentElement === true) {
    events.push('touchstart');
  }
  if ('onclick' in document.documentElement === true) {
      events.push('click');
  }

  return events;
})();

/// Add the event listener for all compatible click events.
function listenToClick(elem, handler){
    for (var i = 0; i < clickEvents.length; i++) {
        elem.addEventListener(clickEvents[i], handler);
    }
}
