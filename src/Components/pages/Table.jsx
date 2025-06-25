import React from "react";


export const Table = () => {
    const data = [
    {
    id   : 1,
    name : "aby",
    dept : "ece",
    age  : 22
    },
    {
    id   : 2,
    name : "bom",
    dept : "cse",
    age  : 23
    },
    {
    id   : 3,
    name : "hak",
    dept : "mech",
    age  : 21
    }
  ]
  
  return (
    <>
    <div className="flex items-start justify-center h-screen w-full  ">
      <table className="border-2  px-4 py-2 mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Id</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">Dept</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.age}</td>
              <td className="border px-4 py-2">{item.dept}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};
