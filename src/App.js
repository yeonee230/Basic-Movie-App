import { useEffect, useState } from "react";

function App() {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=USD")
    .then( (response) => response.json())
    .then((json) => {
      setCoins(json.slice(0,100)); // 1~100위까지
      setLoding(false);
    });
  }, []); //최초 렌더 시
  const onChange = (event) => setMoney(event.target.value);
  return (
    <div>
      <h1># Top 100 Coin Tracker ({coins.length})#</h1>
      {loading ? <strong>Loading ... </strong> : null}
      <h2>USD  =&gt;  BTC 변환</h2>
      <input value={money} onChange={onChange} type="number" placeholder="Write your own money ... " />
      <button>변환하기</button>
      <h3> {loading ? null : money } USD =&gt;  {loading ? null : money/coins[0].quotes.USD.price } BTC </h3>
      <ul>
        {coins.map((coin) => <li>{coin.name} ({coin.symbol}) : {Number.parseFloat(coin.quotes.USD.price).toFixed(3)} USD </li>)}
      </ul>
    </div>
  );
}

export default App;
