const state = {
        shop_list: [{
            "id": "1106103479500709889",
            "createBy": "1000628341250342914",
            "count": 1,
            "goodsId": "00dff527-dc20-487c-97b2-601e596cf784",
            "goodsName": "羊奶身体乳",
            "goodsPic": "http://img11.360buyimg.com/n2/s350x350_jfs/t1/32070/28/4643/204105/5c7f8474E5b07a70d/4832e458163835fb.jpg!q70.jpg",
            "goodSpec": null,
            "price": 55
            }, {
            "id": "1106103479500709888",
            "createBy": "1000628341250342914",
            "count": 1,
            "goodsId": "00dff527-dc20-487c-97b2-601e596cf784",
            "goodsName": "美赞臣儿童配方奶粉",
            "goodsPic": "//m.360buyimg.com/mobilecms/s750x750_jfs/t17185/322/653273214/137899/2f238ae1/5a9e0519N0f5b5426.jpg!q80.dpg.webp",
            "goodSpec": null,
            "price": 45
          }],
        add:[]
}

const getters ={
  //获取商品列表
  // getShopList:state => state.shop_list,
  getShopList: function (state) {
    return state.shop_list
  },
  //获取购物车列表
  addShopList:state => {
    return state.add.map(({id,num})=>{
      let product = state.shop_list.find(n => n.id == id);
      if(product){
        return{
          ...product,
          num
        }
      }
    })
  },
  //获取总数量
  totalNum:(state,getters) =>{
    let total =0;
    getters.addShopList.map(n=>{
      total += n.num;
    })
    return total;
  },
  //计算总价格
  totalPrice:(state,getters)=>{
    let total=0;
    getters.addShopList.map(n=>{
      total += n.num*n.price
    })
    return total;
  },
}
const actions={
  //加入购物车
  addToCart ({commit},product) {
    commit('addCart',{
      id:product.id
    })
  },
  //购物车中减去一个
  reduceToCart({commit},product){
    commit('reduceCart',{
      id:product.id
    })
  },
  //自定义购物车数量
  customToCart({commit},product){
    commit('customCart',{
      id:product.id
    })
  },
  //清空购物车
  clearToCart({commit}){
    commit('clearCart')
  },
  //删除单个物品
  deletToShop({commit},product){
    commit('deletShop',product)
  }
}
const mutations ={
  //加入购物车
  addCart(state,{id}){
    let record = state.add.find(n => n.id == id);
    if(!record){
      state.add.push({
        id,
        num:1
      })
    }else{
      record.num++;
    }
  },
  //购物车拿走一个
  reduceCart(state,{id}){
    let record = state.add.find(n => n.id == id);
    if(!record){
      state.add.push({
        id,
        num:1
      })
    }else{
      record.num--;
    }
  },
  //自定义数量
  customCart(state,{id,num}){
    console.log('aaa')
    let record = state.add.find(n => n.id == id);
    if(!record){
      state.add.push({
        id,
        num:1
      })
    }else{
      record.num = num;
    }
  },
  //删除单个物品
  deletShop(state,product){
    state.add.forEach((item,i)=>{
      if(item.id == product.id){
        state.add.splice(i,1)
      }
    })
  },
  //清空购物车
  clearCart(state){
    state.add=[];
  }
}
export default{
  state,
  getters,
  actions,
  mutations
}