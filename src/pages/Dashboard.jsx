import React, { useState, useEffect } from "react";
import { BsBasket, BsBagCheck } from "react-icons/bs";
import { FaWallet } from "react-icons/fa6";
import { AiOutlineGold } from "react-icons/ai";
import ChartComponent from "../components/ChartComponent";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { changeId } from "../features/user/userSlice";

export default function Dashboard() {
  const [goldPrice, setGoldPrice] = useState(0);
  const [walletBalance, setWalletBalance] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [goldWalletBalance, setGoldWalletBalance] = useState(0);
  // const user_id = useSelector(state => state.user.id)
  // const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        const data = response.data;
        console.log(data);
        setGoldPrice(data.goldPrice);
        setWalletBalance(data.walletBalance);
        setSellPrice(data.sellPrice);
        setGoldWalletBalance(data.goldWalletBalance);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto">
        <h2 className="text-color2 text-3xl font-semibold">میز کار</h2>
        {/* <button onClick={()=>dispatch(changeId(20))}>change</button>
        {user_id} */}
        <div className="flex items-center justify-center  mt-10 flex-wrap gap-3">
          <div className="w-80 md:w-60 h-60 rounded-lg bg-color1 p-4 flex flex-col gap-2  justify-between">
            <div className="flex items-center justify-between text-color3 text-sm">
              <p>قیمت خرید از پارس زرگر :</p>
              <span>
                <BsBasket />
              </span>
            </div>
            <p className="text-color4 text-sm">(هر گرم طلای 18 عیار)</p>
            <p className="text-sm text-left">
              <span className="text-color2">
                {new Intl.NumberFormat("fa-IR").format(27585958)}
              </span>
              <span className="pr-2 text-color3">ریال</span>
            </p>
            <div>
              <Link to="/buyGold">
                <button className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-green-600 hover:bg-green-700 text-color3 text-base">
                  <span>
                    <BsBasket />
                  </span>
                  <span>خرید</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-80 md:w-60 h-60 rounded-lg bg-color1 p-4 flex flex-col gap-2  justify-between">
            <div className="flex items-center justify-between text-color3 text-sm">
              <p>قیمت فروش به پارس زرگر :</p>
              <span>
                <BsBagCheck />
              </span>
            </div>
            <p className="text-color4 text-sm">(هر گرم طلای 18 عیار)</p>
            <p className="text-sm text-left">
              <span className="text-color2">
                {new Intl.NumberFormat("fa-IR").format(27585958)}
              </span>
              <span className="pr-2 text-color3">ریال</span>
            </p>
            <div>
              <Link to="/buyGold">
                <button className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-red-500 hover:bg-red-700 text-color3 text-base">
                  <span>
                    <BsBagCheck />
                  </span>
                  <span>فروش</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-80 md:w-60 h-60 rounded-lg bg-color1 p-4 flex flex-col gap-2  justify-between">
            <div className="flex items-center justify-between text-color3 text-sm">
              <p>موجودی کیف پول</p>
              <span>
                <FaWallet />
              </span>
            </div>
            <p className="text-color4 text-sm text-left">
              <span>{new Intl.NumberFormat("fa-IR").format(0)}</span>
              <span className="pr-2">تومان</span>
            </p>

            <div>
              <Link to="/deposit">
                <button className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-color2 hover:bg-yellow-600 text-color3 text-base">
                  <span>
                    <FaWallet />
                  </span>
                  <span>افزایش موجودی</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-80 md:w-60 h-60 rounded-lg bg-color1 p-4 flex flex-col gap-2  justify-between">
            <div className="flex items-center justify-between text-color3 text-sm">
              <p>موجودی کیف طلا</p>
              <span className="text-lg">
                <AiOutlineGold />
              </span>
            </div>
            <p className="text-color4 text-sm text-left">
              <span>{new Intl.NumberFormat("fa-IR").format(0)}</span>
              <span className="pr-2">گرم</span>
            </p>

            <div className="w-full h-12"></div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <ChartComponent />
      </div>
    </div>
  );
}
