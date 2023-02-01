import instance from '../utils/request'
export const test1 = () => {
  return instance.get('test1', {})
}
