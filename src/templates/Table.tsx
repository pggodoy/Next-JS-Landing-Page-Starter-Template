import React from "react";
import { Typography } from "@material-tailwind/react";
import { Section } from '../layout/Section';
 
const TABLE_HEAD = ["Variedades", "SEM 45", "SEM 46", "SEM 47", "SEM 48", "SEM 49", "SEM 50", "SEM 51", "SEM 52", ];
 
const TABLE_ROWS = [
  {
    variedad: "Royal Dawn",
    sem45: "Disponible",
    sem46: "Disponible",
    sem47: "Disponible",
    sem48: "",
    sem49: "",
    sem50: "",
    sem51: "",
    sem52: "",
  },
  {
    variedad: "Santina",
    sem45: "Disponible",
    sem46: "Disponible",
    sem47: "Disponible",
    sem48: "Disponible",
    sem49: "Disponible",
    sem50: "",
    sem51: "",
    sem52: "",
  },
  {
    variedad: "Lapins",
    sem45: "",
    sem46: "",
    sem47: "",
    sem48: "Disponible",
    sem49: "Disponible",
    sem50: "Disponible",
    sem51: "Disponible",
    sem52: "Disponible",
  },
  {
    variedad: "Regina",
    sem45: "",
    sem46: "",
    sem47: "",
    sem48: "",
    sem49: "",
    sem50: "Disponible",
    sem51: "Disponible",
    sem52: "Disponible",
  },
  {
    variedad: "Garnet",
    sem45: "",
    sem46: "",
    sem47: "",
    sem48: "Disponible",
    sem49: "",
    sem50: "",
    sem51: "",
    sem52: "",
  },
  {
    variedad: "Sam",
    sem45: "",
    sem46: "",
    sem47: "",
    sem48: "Disponible",
    sem49: "",
    sem50: "",
    sem51: "",
    sem52: "",
  },
  {
    variedad: "Stella",
    sem45: "",
    sem46: "",
    sem47: "",
    sem48: "Disponible",
    sem49: "",
    sem50: "Disponible",
    sem51: "",
    sem52: "",
  },
  {
    variedad: "Bing",
    sem45: "",
    sem46: "",
    sem47: "",
    sem48: "",
    sem49: "Disponible",
    sem50: "Disponible",
    sem51: "",
    sem52: "",
  },
  {
    variedad: "Kordia",
    sem45: "",
    sem46: "",
    sem47: "",
    sem48: "",
    sem49: "Disponible",
    sem50: "Disponible",
    sem51: "Disponible",
    sem52: "",
  },
  {
    variedad: "Skeena",
    sem45: "",
    sem46: "",
    sem47: "",
    sem48: "",
    sem49: "",
    sem50: "",
    sem51: "Disponible",
    sem52: "",
  },
  {
    variedad: "Sweet Heart",
    sem45: "",
    sem46: "",
    sem47: "",
    sem48: "",
    sem49: "",
    sem50: "",
    sem51: "Disponible",
    sem52: "Disponible",
  },
];
 
export function DefaultTable() {
  return (
    <Section title="Disponibilidad por Semana" color="bg-white">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, columnIndex) => (
                <th
                  key={head}
                  className={`border border-black p-4 ${
                    columnIndex % 2 === 0 ? "bg-green-900" : "bg-green-900"
                  }`}
                >
                  <Typography
                    variant="small"
                    color={`${
                      columnIndex % 2 === 0 ? "white" : "white"
                    }`}
                    className="font-normal leading-none"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ variedad, sem45, sem46, sem47, sem48, sem49, sem50, sem51, sem52 }) => {

              return (
                <tr key={variedad}>
                  {Object.values({ variedad, sem45, sem46, sem47, sem48, sem49, sem50, sem51, sem52 }).map((cell, columnIndex) => (
                    <td
                      key={columnIndex}
                      className={`p-4 border border-black ${
                        columnIndex === 0 ? "bg-red-900" : cell === "Disponible" ? "bg-green-500" : "bg-white"
                      }`}
                    >
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {`${
                        columnIndex === 0 ? cell : ""
                      }`}
                      </Typography>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
    </Section>
  );
}