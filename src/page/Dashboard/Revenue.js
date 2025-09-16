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

const Revenue = () => {
    const chartRef = useRef(null);

    const data = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
            {
                data: [200, 1800, 4000, 1000, 1900, 1500, 4000],
                backgroundColor: function (context) {
                    const { chart, dataset, dataIndex } = context;
                    const { ctx, chartArea, scales } = chart;
                    if (!chartArea) return null;

                    const value = dataset.data[dataIndex];
                    const yScale = scales.y;

                    // 👇 Calculate bar top and bottom
                    const y = yScale.getPixelForValue(value);
                    const bottom = yScale.getPixelForValue(0);

                    // 👇 Gradient per bar (from bar top → bottom)
                    const gradient = ctx.createLinearGradient(0, y, 0, bottom);
                    gradient.addColorStop(0, "#9357CC"); // bar top color
                    gradient.addColorStop(1, "#FFFFFF"); // bar bottom color
                    return gradient;
                },
                borderRadius: 0,
                barThickness: 12, // fixed bar width
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    color: "#B3B3B3",
                    font: { size: 12 },
                },
            },
            y: {
                min: 0,
                max: 4000,
                ticks: {
                    color: "#B3B3B3",
                    font: { size: 12 },
                },
                grid: { drawBorder: false, display: false },
            },
        },
    };

    return (
        <div style={{ width: "100%" }}>
            <Bar ref={chartRef} data={data} options={options} />
        </div>
    );
};

export default Revenue;
