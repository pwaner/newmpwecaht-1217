import request from './sceneApi'

export function changeScene(item) {
  return request.putSence(item)
}