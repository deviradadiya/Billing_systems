import React, { useRef } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Payment = () => {
    const chartRef = useRef(null);

    const data = {
        labels: ["UPI", "Cash", "Card", ""],
        datasets: [
            {
                // label: "Sales",
                data: [79, 38, 60, 0],
                backgroundColor: [
                    "rgba(172, 170, 251, 0.8)", // UPI
                    "rgba(255, 184, 199, 0.8)", // Cash
                    "rgba(233, 203, 144, 0.8)", // Card
                    "", // last empty bar
                ],
                borderRadius: 0, // rounded bars
                barThickness: 72, // 👈 fixed width
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }, // 👈 disables hover tooltip
        },
        scales: {
            x: {
                grid: {
                    color: "#D1D5DB", // 👈 grid line color
                    borderDash: [2, 2], // 👈 dashed grid lines
                    drawBorder: false,    // y-axis ki border line hatane ke liye
                },
                ticks: {
                    color: "#6B7280",   // 👈 X-axis labels color
                    font: {
                        size: 12,
                        weight: "normal",
                    },
                },
            },
            y: {
                grid: {
                    color: "#D1D5DB", // 👈 grid line color
                    borderDash: [2, 2], // 👈 dashed grid lines
                    drawBorder: false,
                },
                ticks: {
                    color: "#6B7280",   // 👈 X-axis labels color
                    font: {
                        size: 12,
                        weight: "normal",
                    },
                },
            },
        },
    };

    return (
        <div style={{ width: "100%" }}>
            <Bar ref={chartRef} data={data} options={options} />
        </div>
    );
};

export default Payment;
