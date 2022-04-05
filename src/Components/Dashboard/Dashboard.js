import "./Dashboard.css";
import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const data = [
    {
        month: "Mar",
        investment: 100000,
        sell: 241,
        revenue: 10401
    },
    {
        month: "Apr",
        investment: 200000,
        sell: 423,
        revenue: 24500
    },
    {
        month: "May",
        investment: 500000,
        sell: 726,
        revenue: 67010
    },
    {
        month: "Jun",
        investment: 500000,
        sell: 529,
        revenue: 40405
    },
    {
        month: "Jul",
        investment: 600000,
        sell: 601,
        revenue: 50900
    },
    {
        month: "Aug",
        investment: 700000,
        sell: 670,
        revenue: 61000
    }
];

export default function App() {
    return (
        <AreaChart
            width={1500}
            height={600}
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="month"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
            />
            <Area
                type="monotone"
                dataKey="investment"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
            />
            <Area
                type="monotone"
                dataKey="sell"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
            />
            <Area
                type="monotone"
                dataKey="revenue"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
            />
        </AreaChart>
    );
}