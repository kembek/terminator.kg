'use strict'

class Sanitization {
  string() {
    return 'escape|strip_tags'
  }

  int() {
    return 'to_int'
  }

  nullStr() {
    return 'escape|strip_tags|to_null'
  }

  bool() {
    return 'toBoolean'
  }
}

module.exports = Sanitization
