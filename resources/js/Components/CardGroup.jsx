import HeaderCardInfo from "./HeaderCardInfo";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function CardGroup() {
    return (
        <Box>
            <HeaderCardInfo />
        </Box>
    );
}

{
    /* <Grid item xs={12} sm={4}>
                <Card>
                    <Box>
                        <CardContent>
                            <Box sx={{ display: "flex" }}>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{ flexGrow: 1 }}
                                >
                                    Earnings
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
                                <strong>$ 26,456</strong>
                            </Typography>
                        </CardContent>
                        <Chart type="area" {...state(theme)} height="100" />
                    </Box>
                </Card>
            </Grid> */
}
