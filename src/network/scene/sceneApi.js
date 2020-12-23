import { put } from '../axios'

class sceneResquert {
  //改变场景
  static putSence(bscene) {
    let data = {
      scene: bscene
    }
    return put('/session/1', data)
  }

}

export default sceneResquert