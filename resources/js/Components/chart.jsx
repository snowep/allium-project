export const state = (theme) => ({
    options: {
        chart: {
            type: "area",
            animations: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            curve: "smooth",
            width: 3,
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            show: false,
        },
        xaxis: {
            show: false,
            showAlways: false,
            labels: {
                show: false,
                style: {
                    fontSize: "102px",
                },
            },
            axisBorder: {
                show: true,
            },
            tooltip: {
                enabled: false,
                style: {
                    fontSize: "102px",
                },
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
            showAlways: false,
            labels: {
                show: false,
                style: {
                    fontSize: "102px",
                },
            },
            axisBorder: {
                show: false,
            },
            tooltip: {
                enabled: false,
                style: {
                    fontSize: "102px",
                },
            },
        },
        tooltip: {
            fillSeriesColor: false,
            fixed: {
                enabled: true,
                position: "topRight",
                offsetX: 0,
                offsetY: 0,
            },
        },
    },
    series: [
        {
            data: [
                47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27,
                93, 53, 61, 27, 54, 43, 19, 46,
            ],
        },
    ],
});

export const traffic = (theme) => ({
    options: {
        chart: {
            type: "area",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
            width: 3,
        },
        yaxis: {
            show: true,
            showAlways: false,
            tickAmount: 4,
        },
        grid: {
            strokeDashArray: 5,
        },
    },
    series: [
        {
            name: "Visitors",
            data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
            name: "Unique Visitors",
            data: [11, 51, 45, 32, 34, 52, 41],
        },
        {
            name: "Sales",
            data: [21, 32, 25, 11, 32, 45, 32],
        },
    ],
});
