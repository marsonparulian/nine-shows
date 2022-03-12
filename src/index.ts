import app from "./app";

// Start app
console.log("Starting application server..");
// Use defined environment variable (glitch.com) or set port to `80`
const port: string | number = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});
