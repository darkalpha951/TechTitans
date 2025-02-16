import React, {useEffect, useState, useContext} from 'react'
import CryptoCard from './CryptoCard'
import { SiLitecoin, SiBitcoincash, SiRipple } from "react-icons/si";
import { FaBitcoin, FaEthereum, FaRegChartBar } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi"; 
import ReactApexChart from 'react-apexcharts';
// import NewsContext from './contexts/NewsContext';

const Dashboard = () => {
    const price = 1
    const [state, setState] = useState({
          
        series: [{
          data: [{
              x: new Date(1538778600000),
              y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
              x: new Date(1538780400000),
              y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
              x: new Date(1538782200000),
              y: [6630.71, 6648.95, 6623.34, 6635.65]
            },
            {
              x: new Date(1538784000000),
              y: [6635.65, 6651, 6629.67, 6638.24]
            },
            {
              x: new Date(1538785800000),
              y: [6638.24, 6640, 6620, 6624.47]
            },
            {
              x: new Date(1538787600000),
              y: [6624.53, 6636.03, 6621.68, 6624.31]
            },
            {
              x: new Date(1538789400000),
              y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
              x: new Date(1538791200000),
              y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
              x: new Date(1538793000000),
              y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
              x: new Date(1538794800000),
              y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
              x: new Date(1538796600000),
              y: [6608.02, 6610.68, 6601.99, 6608.91]
            },
            {
              x: new Date(1538798400000),
              y: [6608.91, 6618.99, 6608.01, 6612]
            },
            {
              x: new Date(1538800200000),
              y: [6612, 6615.13, 6605.09, 6612]
            },
            {
              x: new Date(1538802000000),
              y: [6612, 6624.12, 6608.43, 6622.95]
            },
            {
              x: new Date(1538803800000),
              y: [6623.91, 6623.91, 6615, 6615.67]
            },
            {
              x: new Date(1538805600000),
              y: [6618.69, 6618.74, 6610, 6610.4]
            },
            {
              x: new Date(1538807400000),
              y: [6611, 6622.78, 6610.4, 6614.9]
            },
            {
              x: new Date(1538809200000),
              y: [6614.9, 6626.2, 6613.33, 6623.45]
            },
            {
              x: new Date(1538811000000),
              y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
              x: new Date(1538812800000),
              y: [6619.43, 6620.35, 6610.05, 6615.53]
            },
            {
              x: new Date(1538814600000),
              y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
              x: new Date(1538816400000),
              y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
              x: new Date(1538818200000),
              y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
              x: new Date(1538820000000),
              y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
              x: new Date(1538821800000),
              y: [6625.95, 6626, 6611.66, 6617.58]
            },
            {
              x: new Date(1538823600000),
              y: [6619, 6625.97, 6595.27, 6598.86]
            },
            {
              x: new Date(1538825400000),
              y: [6598.86, 6598.88, 6570, 6587.16]
            },
            {
              x: new Date(1538827200000),
              y: [6588.86, 6600, 6580, 6593.4]
            },
            {
              x: new Date(1538829000000),
              y: [6593.99, 6598.89, 6585, 6587.81]
            },
            {
              x: new Date(1538830800000),
              y: [6587.81, 6592.73, 6567.14, 6578]
            },
            {
              x: new Date(1538832600000),
              y: [6578.35, 6581.72, 6567.39, 6579]
            },
            {
              x: new Date(1538834400000),
              y: [6579.38, 6580.92, 6566.77, 6575.96]
            },
            {
              x: new Date(1538836200000),
              y: [6575.96, 6589, 6571.77, 6588.92]
            },
            {
              x: new Date(1538838000000),
              y: [6588.92, 6594, 6577.55, 6589.22]
            },
            {
              x: new Date(1538839800000),
              y: [6589.3, 6598.89, 6589.1, 6596.08]
            },
            {
              x: new Date(1538841600000),
              y: [6597.5, 6600, 6588.39, 6596.25]
            },
            {
              x: new Date(1538843400000),
              y: [6598.03, 6600, 6588.73, 6595.97]
            },
            {
              x: new Date(1538845200000),
              y: [6595.97, 6602.01, 6588.17, 6602]
            },
            {
              x: new Date(1538847000000),
              y: [6602, 6607, 6596.51, 6599.95]
            },
            {
              x: new Date(1538848800000),
              y: [6600.63, 6601.21, 6590.39, 6591.02]
            },
            {
              x: new Date(1538850600000),
              y: [6591.02, 6603.08, 6591, 6591]
            },
            {
              x: new Date(1538852400000),
              y: [6591, 6601.32, 6585, 6592]
            },
            {
              x: new Date(1538854200000),
              y: [6593.13, 6596.01, 6590, 6593.34]
            },
            {
              x: new Date(1538856000000),
              y: [6593.34, 6604.76, 6582.63, 6593.86]
            },
            {
              x: new Date(1538857800000),
              y: [6593.86, 6604.28, 6586.57, 6600.01]
            },
            {
              x: new Date(1538859600000),
              y: [6601.81, 6603.21, 6592.78, 6596.25]
            },
            {
              x: new Date(1538861400000),
              y: [6596.25, 6604.2, 6590, 6602.99]
            },
            {
              x: new Date(1538863200000),
              y: [6602.99, 6606, 6584.99, 6587.81]
            },
            {
              x: new Date(1538865000000),
              y: [6587.81, 6595, 6583.27, 6591.96]
            },
            {
              x: new Date(1538866800000),
              y: [6591.97, 6596.07, 6585, 6588.39]
            },
            {
              x: new Date(1538868600000),
              y: [6587.6, 6598.21, 6587.6, 6594.27]
            },
            {
              x: new Date(1538870400000),
              y: [6596.44, 6601, 6590, 6596.55]
            },
            {
              x: new Date(1538872200000),
              y: [6598.91, 6605, 6596.61, 6600.02]
            },
            {
              x: new Date(1538874000000),
              y: [6600.55, 6605, 6589.14, 6593.01]
            },
            {
              x: new Date(1538875800000),
              y: [6593.15, 6605, 6592, 6603.06]
            },
            {
              x: new Date(1538877600000),
              y: [6603.07, 6604.5, 6599.09, 6603.89]
            },
            {
              x: new Date(1538879400000),
              y: [6604.44, 6604.44, 6600, 6603.5]
            },
            {
              x: new Date(1538881200000),
              y: [6603.5, 6603.99, 6597.5, 6603.86]
            },
            {
              x: new Date(1538883000000),
              y: [6603.85, 6605, 6600, 6604.07]
            },
            {
              x: new Date(1538884800000),
              y: [6604.98, 6606, 6604.07, 6606]
            },
          ]
        }],
        options: {
          chart: {
            type: 'candlestick',
            height: 350
          },
          title: {
            text: 'CandleStick Chart',
            align: 'left'
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        },
      
      
    });

    const [stockData, setStockData] = useState([])
    // const apiKey = import.meta.env.VITE_API_KEY
    const btcData = Array.from({ length: 40 }, (_, i) => ({
        time: `${12 + Math.floor(i / 4)}:${(i % 4) * 15}`,
        price: Math.floor(Math.random() * (60000 - 55000) + 55000),
    }));
    
    const ethData = Array.from({ length: 40 }, (_, i) => ({
        time: `${12 + Math.floor(i / 4)}:${(i % 4) * 15}`,
        price: Math.floor(Math.random() * (4500 - 4000) + 4000),
    }));
    
    const xemData = Array.from({ length: 40 }, (_, i) => ({
        time: `${12 + Math.floor(i / 4)}:${(i % 4) * 15}`,
        price: Math.floor(Math.random() * (20 - 10) + 10),
    }));
    
    const xrpData = Array.from({ length: 40 }, (_, i) => ({
        time: `${12 + Math.floor(i / 4)}:${(i % 4) * 15}`,
        price: Math.floor(Math.random() * (60 - 40) + 40),
    }));

    const marketData = [
        { name: "BTC", price: "$721,882", change: "-4.66%", icon: <FaBitcoin className="text-yellow-500" /> },
        { name: "BCH", price: "$48,676", change: "+0.38%", icon: <SiBitcoincash className="text-orange-500" /> },
        { name: "ETH", price: "$22,370", change: "+0.45%", icon: <FaEthereum className="text-blue-500" /> },
        { name: "LTC", price: "$5,788.5", change: "-0.23%", icon: <SiLitecoin className="text-gray-500" /> },
        { name: "ETC", price: "$1,660.7", change: "-0.09%", icon: <FaRegChartBar className="text-green-500" /> },
        { name: "XRP", price: "$50.839", change: "+0.66%", icon: <img src="/xrp.png" alt="XRP Icon" className="w-4 h-4" /> },
        { name: "FCT", price: "$534.68", change: "+8.47%", icon: <BiDollarCircle  className="text-green-600" /> },
        { name: "LSK", price: "$321.14", change: "-0.47%", icon: <SiRipple  className="text-purple-500" /> },
        { name: "XEM", price: "$10.604", change: "-1.07%", icon: <img src="/xem.jpg" alt="XEM Icon" className="w-4 h-4" /> },
    ];

    // const fetchStockData = async (symbol) => {
    //     const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}.BSE&outputsize=full&apikey=${apiKey}`)
    //     const json = await res.json()
    //     setStockData(json)
    //     console.log(stockData)
    // }
    
    // useEffect(() => {
    //   fetchStockData("RIL")
    //   console.log(stockData)
    // },[])

    // const newsContext = useContext(NewsContext)
    // useEffect(() => {
    //     const fetchData = async () => {
    //         console.log("fetching news")
    //         await newsContext.fetchNews()
    //     }
    //     fetchData()
    // }, [])
    


    return (
        <>
            {/* Main Content */}
            <div className="flex-1 p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 w-full">
                    <CryptoCard
                        icon={<FaBitcoin />}
                        name="BTC"
                        price={price}
                        change={-4.6}
                        data={btcData}
                        color="red"
                        className="min-w-[250px] max-w-[400px] w-full"
                    />
                    <CryptoCard
                        icon={<FaEthereum />}
                        name="ETH"
                        price="$22,370"
                        change={0.45}
                        data={ethData}
                        color="lightgreen"
                        className="min-w-[250px] max-w-[400px] w-full"
                    />
                    <CryptoCard
                        icon={<img src="/xrp.png" alt="XRP Icon" className="w-6 h-6" />}
                        name="XRP"
                        price="$1,780"
                        change={-1.9}
                        data={xemData}
                        color="red"
                        className="min-w-[250px] max-w-[400px] w-full"
                    />
                    <CryptoCard
                        icon={<img src="/xem.jpg" alt="XEM Icon" className="w-6 h-6" />}
                        name="XEM"
                        price="$2,430"
                        change={2.6}
                        data={xrpData}
                        color="lightgreen"
                        className="min-w-[250px] max-w-[400px] w-full"
                    />
                </div>
                <div className="flex justify-between items-stretch w-full space-x-4 my-3">
                    {/* Left: BTC Price Chart */}
                    <div className="bg-white shadow-md p-4 flex-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">BTC Price Chart</h3>
                        <ReactApexChart options={state.options} series={state.series} type="candlestick" height={600} />
                    </div>

                    {/* Right: Market Cap */}
                    <div className="bg-white p-4 rounded-lg shadow-md flex-1 max-w-sm">
                        <h2 className="font-bold text-lg text-gray-800">Market Cap</h2>
                        <ul className="mt-4">
                            {marketData.map((item, index) => (
                                <li key={index} className="flex justify-between items-center py-2 border-b">
                                <div className="flex items-center space-x-2">
                                    {item.icon}
                                    <span className="font-medium">{item.name}</span>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold">{item.price}</p>
                                    <p className={item.change.includes('-') ? "text-red-500" : "text-green-500"}>{item.change}</p>
                                </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                {/* Latest Activities & Crypto Newsfeed Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Latest Activities */}
                    {/* <div className="bg-white shadow-lg rounded-lg p-5">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            <span className="text-indigo-600">▶</span> Latest Activities
                        </h2>
                        <div className="flex gap-3 mt-3 border-b pb-2 text-gray-500 text-sm">
                            <span className="text-indigo-600 font-medium border-b-2 border-indigo-600 pb-1 cursor-pointer">ALL</span>
                            <span className="cursor-pointer hover:text-indigo-600">BTC</span>
                            <span className="cursor-pointer hover:text-indigo-600">ETH</span>
                            <span className="cursor-pointer hover:text-indigo-600">XRP</span>
                            <span className="cursor-pointer hover:text-indigo-600">XEM</span>
                            <span className="cursor-pointer hover:text-indigo-600">JPY</span>
                        </div>
                        <table className="w-full mt-4 text-sm">
                            <thead>
                                <tr className="text-left text-gray-500 border-b">
                                    <th className="py-2">Date</th>
                                    <th className="py-2">Detail</th>
                                    <th className="py-2">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="py-2">2018/10/02 10:57:46</td>
                                    <td>Deposit Japanese Yen</td>
                                    <td className="text-green-500">+10,000 JPY</td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="py-2">2018/10/10 10:57:46</td>
                                    <td>Bought Bitcoin</td>
                                    <td className="text-green-500">+0.00018147 BTC</td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="py-2">2018/10/10 10:57:46</td>
                                    <td>Service fee</td>
                                    <td className="text-red-500">-500 JPY</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}

                    {/* Crypto Newsfeed */}
                    <div className="bg-white shadow-lg rounded-lg p-5 w-full">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            <span className="text-indigo-600">▶</span> Crypto Newsfeed
                        </h2>
                        <div className="mt-4">
                            <div className="border-b pb-3">
                                <p className="text-xs text-gray-400">Today 11:36</p>
                                <h3 className="font-medium text-gray-700">Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users</h3>
                                <p className="text-xs text-gray-500 mt-1">Cryptocurrency-mining malware is not the only type of crypto-related threat...</p>
                            </div>
                            <div className="border-b py-3">
                                <p className="text-xs text-gray-400">Yesterday</p>
                                <h3 className="font-medium text-gray-700">Ripple News Today: Ripple is planning to upgrade the technology</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard