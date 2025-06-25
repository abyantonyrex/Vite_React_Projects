import React from "react";
import "../main.css";
import { Link, NavLink } from "react-router-dom";
import { Darkmode } from "./pages/Darkmode";

export const Aside = () => {
  return (
    <div className="h-screen w-48 bg-gray-300 p-4">
      <nav className="flex flex-col items-start space-y-6 mt-16">
        {/* <Link className="font-bold text-xl hover:underline" to="/home">Home</Link>
        <Link className="font-bold text-xl hover:underline" to="/about">About</Link>
        <Link className="font-bold text-xl hover:underline" to="/section">Section</Link>
        <Link className="font-bold text-xl hover:underline" to="/table">Table</Link>
        <Link className="font-bold text-xl hover:underline" to="/apiTable">Api-Table</Link> */}
        <NavLink to={'/home'} className={({isActive})=> `font-bold text-xl ${isActive ? 'text-green-500 underline' : 'text-black'}` } >Home</NavLink>
        <NavLink to={'/about'} className={({isActive})=> `font-bold text-xl ${isActive ? 'text-green-500 underline' : 'text-black'}` } >About</NavLink>
        <NavLink to={'/section'} className={({isActive})=> `font-bold text-xl ${isActive ? 'text-green-500 underline' : 'text-black'}` } >Section</NavLink>
        <NavLink to={'/table'} className={({isActive})=> `font-bold text-xl ${isActive ? 'text-green-500 underline' : 'text-black'}` } >Table</NavLink>
        <NavLink to={'/apiTable'} className={({isActive})=> `font-bold text-xl ${isActive ? 'text-green-500 underline' : 'text-black'}` } >Api-Table</NavLink>
        <Darkmode/>
      </nav>
    </div>
  );
};
