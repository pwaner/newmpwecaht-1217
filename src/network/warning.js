import {get} from './axios'

class warnData {
  static getwarnList(parmas) {
    return get("/estates/alarms?" + parmas)
  }
}

export default warnData