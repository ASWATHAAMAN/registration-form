import { useState } from "react";

const Form = ({
  title,
  labelOne,
  labelTwo,
  labelThree,
  labelFour,
  labelFive,
  labelSix,
  labelSeven,
  labelEight,
  labelNine,
  labelTen,
  labelEleven,
  labelTwelve,
  labelThirteen,
  labelFourteen,
}) => {
  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [age, setAge] = useState(``);
  const [birthDate, setBirthDate] = useState(0);
  const [mail, setMail] = useState(``);
  const [password, setPassword] = useState(``);
  const [confirmPassword, setConfirmPassword] = useState(``);
  const [number, setNumber] = useState(``);
  return (
    <main className="flex flex-col justify-center items-center h-full my-[2rem] bg-orange-100 w-[50%] mx-auto py-[1rem] border-4 border-l-pink-400 border-t-teal-400 border-r-cyan-400 border-b-violet-600 ">
      <h1 className="text-[30px] font-[700] text-red-600 mb-[2rem]">{title}</h1>
      <form className="flex flex-col gap-[1rem]">
        <div className="flex gap-[6.5rem]">
          <label
            htmlFor="first"
            className="text-[18px] font-[700] text-orange-800"
          >
            {labelOne}
          </label>
          <input
            type="text"
            id="first"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-red-600 pr-[8rem] py-[0.25rem] rounded-md pl-[10px]"
          />
        </div>
        <div className="flex gap-[6.5rem]">
          <label
            htmlFor="last"
            className="text-[18px] font-[700] text-orange-800"
          >
            {labelTwo}
          </label>
          <input
            type="text"
            id="last"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-red-600 pr-[8rem] py-[0.25rem] rounded-md pl-[10px]"
          />
        </div>
        <div className="flex gap-[10px]">
          <label
            htmlFor="gender"
            className="text-[18px] font-[700] text-orange-800 "
          >
            {labelThree}
          </label>
          <div className="flex gap-[10px] mx-auto text-[18px]">
            <input type="radio" />
            <span>Male</span>
            <input type="radio" />
            <span>Female</span>
          </div>
        </div>
        <div className="flex gap-[10rem]">
          <label
            htmlFor="number"
            className="text-[18px] font-[700] text-orange-800"
          >
            {labelFour}
          </label>
          <input
            type="text"
            id="number"
            placeholder="Enter Your Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border border-red-600 pr-[8rem] py-[0.25rem] rounded-md pl-[10px]"
          />
        </div>
        <div className="flex gap-[5.5rem]">
          <label
            htmlFor="num"
            className="text-[18px] font-[700] text-orange-800"
          >
            {labelFive}
          </label>
          <input
            type="date"
            id="num"
            placeholder="dd-mm-yyyy"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="border border-red-600 pr-[10.5rem] py-[0.25rem] rounded-md pl-[10px] flex justify-between"
          />
        </div>
        <div className="flex gap-[5rem]">
          <label
            htmlFor="mail"
            className="text-[18px] font-[700] text-orange-800"
          >
            {labelSix}
          </label>
          <input
            type="email"
            id="mail"
            placeholder="Enter Your Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="border border-red-600 pr-[7.5rem] py-[0.25rem] rounded-md pl-[10px]"
          />
        </div>
        <div className="flex gap-[7.5rem]">
          <label
            htmlFor="password"
            className="text-[18px] font-[700] text-orange-800"
          >
            {labelSeven}
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password min 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-red-600 pr-[7.5rem] py-[0.25rem] rounded-md pl-[10px]"
          />
        </div>
        <div className="flex gap-[3rem]">
          <label
            htmlFor="confirm"
            className="text-[18px] font-[700] text-orange-800"
          >
            {labelEight}
          </label>
          <input
            type="text"
            id="confirm"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-red-600 pr-[7.5rem] py-[0.25rem] rounded-md pl-[10px]"
          />
        </div>
        <div className="flex gap-[4.5rem]">
          <label
            htmlFor="mob"
            className="text-[18px] font-[700] text-orange-800"
          >
            {labelNine}
          </label>
          <input
            type="number"
            id="mob"
            placeholder="Enter Your Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border border-red-600 pr-[7.5rem] py-[0.25rem] rounded-md pl-[10px]"
          />
        </div>
        <div className="flex gap-[8rem]">
          <label
            htmlFor="address"
            className="text-[18px] font-[700] text-orange-800"
          >
            {labelTen}
          </label>
          <textarea
            name="text"
            id="address"
            cols="30"
            rows="5"
            placeholder="Enter Your Address"
            className="border border-red-600 pr-[4.5rem] py-[0.25rem] rounded-md pl-[10px]"
          ></textarea>
        </div>
        <div className="flex gap-[9.5rem]">
          <label
            htmlFor="state"
            className="text-[18px] font-[700] text-orange-800"
          >
            {labelEleven}
          </label>
          <input
            type="text"
            id="state"
            placeholder="--Select Your State--"
            className="border border-red-600 pr-[8rem] py-[0.25rem] rounded-md pl-[10px]"
          />
        </div>
        <div className="flex gap-[7.5rem]">
          <label
            htmlFor="pin"
            className="text-[18px] font-[700] text-orange-800"
          >
            {labelTwelve}
          </label>
          <input
            type="number"
            id="pin"
            placeholder="Enter Your Pin Code"
            className="border border-red-600 pr-[8rem] py-[0.25rem] rounded-md pl-[10px]"
          />
        </div>
        <div className="flex gap-[7.5rem]">
          <label
            htmlFor="hobby"
            className="text-[18px] font-[700] text-orange-800"
          >
            {labelThirteen}
          </label>
          <article className="flex gap-[1rem]">
            <div>
              <input
                type="checkbox"
                id="hobby"
                className="border border-red-600 pr-[8rem] py-[0.25rem] rounded-md pl-[10px]"
              />
              <span className="text-[16px] font-[700] text-orange-800">
                Music
              </span>
            </div>
            <div>
              <input
                type="checkbox"
                id="hobby"
                className="border border-red-600 pr-[8rem] py-[0.25rem] rounded-md pl-[10px]"
              />
              <span className="text-[16px] font-[700] text-orange-800">
                Music
              </span>
            </div>
            <div>
              <input
                type="checkbox"
                id="hobby"
                className="border border-red-600 pr-[8rem] py-[0.25rem] rounded-md pl-[10px]"
              />
              <span className="text-[16px] font-[700] text-orange-800">
                Sports
              </span>
            </div>
            <div>
              <input
                type="checkbox"
                id="hobby"
                className="border border-red-600 pr-[8rem] py-[0.25rem] rounded-md pl-[10px]"
              />
              <span className="text-[16px] font-[700] text-orange-800">
                Travel
              </span>
            </div>
          </article>
        </div>
        <div className="flex gap-[5rem]">
          <label
            htmlFor="pic"
            className="text-[18px] font-[700] text-orange-800 "
          >
            {labelFourteen}
          </label>
          <div className="flex gap-[1rem] items-center">
            <span className="text-red-500 w-[30%] ">*Max Size 100kb.</span>
            <button type="button">Choose File</button>
            <span className="text-[16px] ">No file chosen</span>
          </div>
        </div>
        <div className="flex items-center gap-[1rem]">
          <input type="checkbox" />
          <p>
            I hereby declare that the above information provided is true and
            correct.
          </p>
        </div>
        <div className="border border-[darkgray] w-[40%] px-[1rem] py-[1.5rem] bg-slate-200">
          <div className="flex gap-[1rem]">
            <div className="border-2 border-[darkgray] py-[0.5rem] w-[12%]"></div>
            <span>I'm not a robot</span>
          </div>
        </div>
        <footer className="flex justify-center items-center gap-[2rem]">
          <button
            type="submit"
            className=" rounded-md px-[5rem] py-[0.25rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-white font-[700]"
          >
            Register
          </button>
          <button
            type="submit"
            className="  rounded-md px-[5rem] py-[0.25rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-white font-[700]"
          >
            Reset
          </button>
        </footer>
      </form>
    </main>
  );
};

export { Form };
