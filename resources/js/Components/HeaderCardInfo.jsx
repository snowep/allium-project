import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chart from "react-apexcharts";
import { state, traffic } from "./chart";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const cardContentData = [
    { title: "Earnings", value: "$ 25,321", change: "32.5%" },
    { title: "Revenue", value: "$ 29,321", change: "23.5%" },
    { title: "Product Sold", value: "5000", change: "12.5%" },
];

export default function HeaderCardInfo({ theme }) {
    return (
        <Grid container spacing={3}>
            {cardContentData.map((data, index) => (
                <Grid item xs={6} sm={6} md={4} key={index}>
                    <Card>
                        <Box>
                            <CardContent>
                                <Box sx={{ display: "flex" }}>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ flexGrow: 1 }}
                                    >
                                        {data.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        align="center"
                                        sx={{ lineHeight: 1.9 }}
                                    >
                                        + 28,45%
                                    </Typography>
                                </Box>
                                <Typography variant="h5">
                                    <strong>{data.value}</strong>
                                </Typography>
                            </CardContent>
                            <Chart type="area" {...state(theme)} height="100" />
                        </Box>
                    </Card>
                </Grid>
            ))}

            <Grid item xs={12} sm={8} md={7}>
                <Card>
                    <Box>
                        <CardHeader
                            action={
                                <IconButton aria-label="">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Traffic"
                        />
                        <CardContent>
                            <Chart
                                type="area"
                                {...traffic(theme)}
                                height="250"
                            />
                        </CardContent>
                    </Box>
                </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={5}>
                <Card>
                    <Box>
                        <CardHeader
                            action={
                                <IconButton aria-label="">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Last Sale"
                        />
                        <CardContent>
                            {/* TODO 1 */}
                            <Typography variant="body1" color="initial">
                                yeah
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
}
// TODO 1: add list of sales activity, containing user avatar, user name, and activity description (e.g. "John Doe bought 2 items of {product name}"), only show 3 items or fit with Traffic card height or TBD.
