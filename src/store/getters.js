/*
包含基于state的getter计算属性的对象
*/
export default {
  totalCount(state) {
    return state.cartGoods.reduce((preTotal,food) => preTotal + food.count, 0 )
  },
  totalPrice(state) {
    return state.cartGoods.reduce((preTotal,food) => preTotal + food.count * food.price, 0 )
  }
}
