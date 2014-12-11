class gDom {
  constructor(selector) {
    if (typeof(selector) == "object") {
      this.elements = [selector];
    } else {
      this.elements = document.querySelectorAll(selector);
    }
  }

  addClass(cl) {
    Array.prototype.forEach.call(this.elements, function(el) {
      el.classList.add(cl);
    });
    return true;
  }

  removeClass(cl) {
    Array.prototype.forEach.call(this.elements, function(el) {
      el.classList.remove(cl);
    });
    return true;
  }

  toggleClass(cl) {
    Array.prototype.forEach.call(this.elements, function(el) {
      el.classList.toggle(cl);
    });
    return true;
  }

  hasClass(cl) {
    var has = false;
    Array.prototype.forEach.call(this.elements, function(el) {
      if (el.classList.contains(cl)) has = true;
    });
    return has;
  }

  attr(attr) {
    return this.elements[0].getAttribute(attr);
  }

  on(ev, fn) {
    Array.prototype.forEach.call(this.elements, function(el) {
      el.addEventListener(ev, fn, false);
    });
    return true;
  }

  offset() {
    return {
      top: this.elements[0].offsetTop, 
      left: this.elements[0].offsetLeft
    }
  }

  scrollTop(scrollTo) {
    if (scrollTo) {
      // Add code to scroll to a specific position
    } else {
      return this.elements[0].scrollTop;
    }
  }

  // FIXME: Now is just supporting classes, add id support too.
  parent(cl) {
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
}

var $g = function(selector) {
  return new gDom(selector);
}

export default $g;