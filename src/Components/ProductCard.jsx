import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function ProductCard(props) {
    const [heartColor, changeHeartColor] = React.useState("coral")

    const updateHeartColor = () => {
        if (heartColor === "coral") changeHeartColor("red")
        else changeHeartColor("coral")
    }

    return (
        <Card sx={{ maxWidth: 345 }} className="myCard">
            <CardMedia
                component="img"
                height="330"
                image={props.value.imageAddress}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.value.heading}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.value.description}
                    <br /><Rating name="read-only" value={props.value.rating} readOnly size='small' />
                </Typography>
            </CardContent>

            <CardActions style={{ "display": "flex", "justifyContent": "space-between", "padding": "0 1rem" }}>
                <Typography variant="h5" gutterBottom component="div" style={{ "display": "flex", "columnGap": "0.5rem", "alignItems": "center" }}>
                    {props.value.price}<Typography className='previousPrice' variant="caption" gutterBottom component="span" style={{ "textDecoration": "line-though !important" }}>
                        {props.value.previousPrice}
                    </Typography>
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                    <IconButton size="large" aria-label="Like Product" color="inherit" onClick={updateHeartColor}>
                        <FavoriteIcon style={{ "color": heartColor }} />
                    </IconButton>
                    <IconButton size="large" aria-label="Buy Product" color="inherit" >
                        <ShoppingBagIcon style={{ "color": "#212a39" }} />
                    </IconButton>
                </Typography>

            </CardActions>


        </Card>
    );
}

