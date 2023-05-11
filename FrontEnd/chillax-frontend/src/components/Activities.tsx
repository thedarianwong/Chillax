import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
  Pagination,
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
    {
      id: 3,
      title: "Activity 3",
      description: "This is the description for Activity 2",
      imageUrl: "https://source.unsplash.com/vCbKwN2IXT4",
    },
    {
      id: 4,
      title: "Activity 4",
      description: "This is the description for Activity 2",
      imageUrl: "https://source.unsplash.com/vCbKwN2IXT4",
    },
    {
      id: 5,
      title: "Activity 5",
      description: "This is the description for Activity 2",
      imageUrl: "https://source.unsplash.com/vCbKwN2IXT4",
    },
    // Add more activities here or fetch them from your API
  ]);
};

const Activities: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [page, setPage] = useState(1);
  const activitiesPerPage = 4;

  useEffect(() => {
    fetchActivities().then((data) => {
      setActivities(data);
    });
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedActivities = activities.slice(
    (page - 1) * activitiesPerPage,
    page * activitiesPerPage
  );

  return (
    <Box sx={{ width: "97.5%", margin: "auto" }}>
      <Grid container spacing={4}>
        {paginatedActivities.map((activity) => (
          <Grid item key={activity.id} xs={12} sm={6}>
            <Card sx={{ borderRadius: "10px" }}>
              <CardMedia
                component="img"
                height="auto"
                width="auto"
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
      <div
        className="pageNumbers"
        style={{ margin: "auto", justifyContent: "center", display: "flex" }}
      >
        <Pagination
          count={Math.ceil(activities.length / activitiesPerPage)}
          page={page}
          onChange={handleChange}
          sx={{
            marginTop: 4,
            backgroundColor: "white",
            width: "fit-content",
          }}
        />
      </div>
    </Box>
  );
};

export default Activities;
