// gDom.js
// Custom ES6 module for handling the DOM

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

  css(obj) {
    Array.prototype.forEach.call(this.elements, function(el) {
      for (let k in obj) el.style[k] = obj[k];
    });
    return true;
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

  each(callback) {
    Array.prototype.forEach.call(this.elements, callback);
  }

  find(selector) {
    return new gDom(this.elements[0].querySelectorAll(selector));
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