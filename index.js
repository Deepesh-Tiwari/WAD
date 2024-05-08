import express from 'express';


const app = express();
app.use(express.static('public'));

const PORT = 3000;

app.get("/",(req,res)=>{
    res.render("index.html")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});