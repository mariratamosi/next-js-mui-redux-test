import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function BasicCard({
  imgUrl,
  imgAltText,
  header,
  subheader,
  children,
}) {
  return (
    <Card sx={{ maxWidth: 345, width: 250 }}>
      <CardMedia sx={{ height: 140 }} image={imgUrl} title={imgAltText} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subheader}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
        {children}
      </CardActions>
    </Card>
  );
}
