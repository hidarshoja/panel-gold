import React, { useState } from "react";
import { MdOutlinePriceChange } from "react-icons/md";
import { FiAlertOctagon, FiAlertTriangle } from "react-icons/fi";
import axios from "axios";

export default function Deposit() {
  const [inputValue, setInputValue] = useState(0);

  const handleAddValue = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const handleDeposit = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        deposit: inputValue,
      })
      .then((response) => {
        alert("شما به درگاه بانک رفته‌اید!");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <div className="w-full">
      <div className="w-[95%] md:w-[60%] mx-auto">
        <h2 className="text-color2 text-3xl font-semibold">واریز وجه</h2>
        <div className="w-full h-[500px] mt-5 rounded-lg bg-color1 p-6 flex flex-col gap-2   shadow-md shadow-color1">
          <div className="flex items-center justify-between text-color3 text-xl font-serif">
            <h3>مبلغ خود را وارد کنید :</h3>
            <span className="text-3xl">
              <MdOutlinePriceChange />
            </span>
          </div>
          <div>
            <div className="relative mt-5 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">تومان</span>
              </div>
              <input
                type="text"
                dir="ltr"
                name="price"
                id="price"
                value={inputValue}
                readOnly
                className="block w-full rounded-md border-0 py-1.5 pl-16  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="000"
                aria-describedby="price-currency"
              />
            </div>
            <div>
              <div className="flex gap-3 mt-5">
                <button
                  className="w-full h-12 bg-gray-900 text-color2 rounded-lg border-2 border-color2"
                  onClick={() => handleAddValue(100000)}
                >
                  + {new Intl.NumberFormat("fa-IR").format(100000)} تومان
                </button>
                <button
                  onClick={() => handleAddValue(500000)}
                  className="w-full h-12 bg-gray-900 text-color2 rounded-lg border-2 border-color2"
                >
                  + {new Intl.NumberFormat("fa-IR").format(500000)} تومان
                </button>
              </div>
              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => handleAddValue(1000000)}
                  className="w-full h-12 bg-gray-900 text-color2 rounded-lg border-2 border-color2"
                >
                  + {new Intl.NumberFormat("fa-IR").format(1000000)} تومان
                </button>
                <button
                  onClick={() => handleAddValue(5000000)}
                  className="w-full h-12 bg-gray-900 text-color2 rounded-lg border-2 border-color2"
                >
                  + {new Intl.NumberFormat("fa-IR").format(5000000)} تومان
                </button>
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <p className="flex gap-2 items-center">
                  <span className="text-red-600">
                    <FiAlertOctagon />
                  </span>
                  <span className="text-color3">
                    کف پرداختی بایستی حداقل معادل یک گرم طلا باشد .
                  </span>
                </p>
                <p className="flex gap-2 items-center">
                  <span className="text-yellow-500">
                    <FiAlertTriangle />
                  </span>
                  <span className="text-color3">
                    واریز باید از شماره کارت خودتان که در سامانه ثبت شده است
                    باشد .
                  </span>
                </p>
                <p className="flex gap-2 items-center">
                  <span className="text-yellow-500">
                    <FiAlertTriangle />
                  </span>
                  <span className="text-color3">
                    شماره تماس یا ایمیل خود را در محل پرداخت وارد نماید .
                  </span>
                </p>
              </div>
              <div className="mt-5">
                <button
                  onClick={handleDeposit}
                  className="w-full h-12  text-color3 rounded-lg bg-green-500 hover:bg-green-700"
                >
                  واریز وجه
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
