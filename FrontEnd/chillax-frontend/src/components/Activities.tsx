import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";

interface Activity {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

// Replace this with a real API call to fetch activities data from your backend
const fetchActivities = (): Promise<Activity[]> => {
  return Promise.resolve([
    {
      id: 1,
      title: "Activity 1",
      description: "This is the description for Activity 1",
      imageUrl: "https://source.unsplash.com/YrtFlrLo2DQ",
    },
    {
      id: 2,
      title: "Activity 2",
      description: "This is the description for Activity 2",
      imageUrl: "https://source.unsplash.com/vCbKwN2IXT4",
    },
    // Add more activities here or fetch them from your API
  ]);
};

const Activities: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetchActivities().then((data) => {
      setActivities(data);
    });
  }, []);

  return (
    <Grid container spacing={4} sx={{ width: "90%", margin: "auto" }}>
      {activities.map((activity) => (
        <Grid item key={activity.id} xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              height="auto"
              image={activity.imageUrl}
              alt={activity.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {activity.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {activity.description}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              sx={{ backgroundColor: "black", margin: 2 }}
            >
              Join
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Activities;
