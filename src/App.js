import "./assets/scss/reset.scss"
import "./assets/scss/App.scss"
import LetterEff from "./cssPattem/lettersEff"

function App() {
  const peak = ["aa", "babel", "cc", "findDOMNode"]
  const [...as] = peak
  console.log(as)
  //console.log(other)
  /*
  const user = {
    name: "John",
    age: 30,
    isAdmin: true,
    friends: ["Bob", "Jane"],
    address: {
      city: "New York",
      country: "USA",
    },
  }
  */

  const expressPrice = (currentPrice, orderPirce, orderGearing) => {
    let CP = currentPrice
    let OP = orderPirce
    let OG = orderGearing

    let realGearing = (CP * OG) / (OP + OG * (CP - OP))

    return realGearing
  }

  console.log(expressPrice(11000, 3, 10000))
  /*
  
  當前現貨價格 =  currentPrice
  
  開單時的現貨價格 = orderPirce
  
  開單時選擇的槓桿倍數 = orderGearing
  
  let realGearing 
  
  CP * OG / ( OP + OG * (CP - OP) )
  
  實際槓桿倍數 = 當前現貨價格 * 開單時選擇的槓桿倍數 / [ 開單時的現貨價格 + 開單時選擇的槓桿倍數 *（ 當前現貨價格 - 開單時的現貨價格 ）]
  
  這樣看起來很複雜，但是結合實際例子去理解就非常容易了。
  
  例如比特幣報價10000 USDT時，一個用戶3倍做多比特幣，那麼在開單的時候，
  
  實際槓桿倍數=10000*3/[10000+3*(10000-10000)]=3；而當比特幣上漲10%，報價11000 USDT時，實際槓桿倍數= 11000*3/[10000+3*(11000-10000)]= 33000/13000=2.5385倍，這也就是我們上面提到的，價格上漲導致實際槓桿倍數縮小。
  */

  //console.log(JSON.stringify(user))
  //console.log(JSON.stringify(user, null, "lol"))
  return (
    <div className="App">
      <LetterEff />
    </div>
  )
}

export default App
