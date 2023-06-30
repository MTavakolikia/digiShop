import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeroBG from '../assets/hero-bg.webp';


const HeroSection = () => {
    const mainFeaturedPost = {
        title: 'GET UP TO 60% DISCOUNT',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: 'https://source.unsplash.com/random?wallpapers',
        imageText: 'main image description',
        linkText: 'Continue reading…',
    };
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: '#1f1713',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${HeroBG})`,
                height: 600
            }}
        >


            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 10 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            GET UP TO
                        </Typography>
                        <Typography component="h1" variant="h2" color="inherit" gutterBottom>
                            60% DISCOUNT
                        </Typography>
                        <Typography variant="h6" color="inherit" paragraph sx={{ width: "50%" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </Typography>
                        <Button variant="contained" size="large" sx={{ marginTop: "20px" }}>But Now</Button>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default HeroSection