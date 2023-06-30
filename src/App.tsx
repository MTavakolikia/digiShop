import './App.css'
import apiClient from './services/api-client';
import { useQuery } from '@tanstack/react-query'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import Navbar from './components/Navbar';

interface IProducts {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

function App() {
  const { data, error } = useQuery<IProducts[]>({
    queryKey: ['products'],
    queryFn: () => apiClient.get("/products").then(res => res.data)
  })


  if (error) return 'there is some error happend on base code'
  return (
    <>
      <Navbar />
      <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center" columns={{ xs: 4, sm: 8, md: 12 }}>
        {data?.map(product => (
          <Grid key={product.id} item>
            <Card sx={{ maxWidth: 345 }} style={{ boxShadow: 'none' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>



    </>
  )
}

export default App
