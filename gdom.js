var $g = function(selector) {
  function gDom(selector) {
    if (typeof(selector) == "object") {
      this.elements = [selector];
    } else {
      this.elements = document.querySelectorAll(selector);
    }
  }

  gDom.prototype.addClass = function(cl) {
    Array.prototype.forEach.call(this.elements, function(el) {
      el.classList.add(cl);
    });
    return true;
  }

  gDom.prototype.removeClass = function(cl) {
    Array.prototype.forEach.call(this.elements, function(el) {
      el.classList.remove(cl);
    });
    return true;
  }

  gDom.prototype.toggleClass = function(cl) {
    Array.prototype.forEach.call(this.elements, function(el) {
      el.classList.toggle(cl);
    });
    return true;
  }

  gDom.prototype.hasClass = function(cl) {
    var has = false;
    Array.prototype.forEach.call(this.elements, function(el) {
      if (el.classList.contains(cl)) has = true;
    });
    return has;
  }

  gDom.prototype.attr = function(attr) {
    return this.elements[0].getAttribute(attr);
  }

  gDom.prototype.on = function(ev, fn) {
    Array.prototype.forEach.call(this.elements, function(el) {
      el.addEventListener(ev, fn, false);
    });
    return true;
  }

  gDom.prototype.offset = function() {
    return {
      top: this.elements[0].offsetTop, 
      left: this.elements[0].offsetLeft
    }
  }

  gDom.prototype.scrollTop = function(scrollTo) {
    if (scrollTo) {
      // FIXME: Add code to scroll to a specific position
    } else {
      return this.elements[0].scrollTop;
    }
  }

  gDom.prototype.each = function(callback) {
    Array.prototype.forEach.call(this.elements, callback);
  }

  gDom.prototype.find = function(selector) {
    return new gDom(this.elements[0].querySelectorAll(selector));
  }

  // FIXME: Now is just supporting classes, add id support too.
  gDom.prototype.parent = function(cl) {
    if (!cl) {
      return this.elements[0].parentNode;
    } else {
      var elementParent = this.elements[0].parentNode;

      while (true) {
        if (elementParent.className.indexOf(cl) != -1) {
          return elementParent;
        } else {
          elementParent = elementParent.parentNode;
          if (elementParent.nodeName == null) return;
        }
      }
    }
  }

  return new gDom(selector);
}
