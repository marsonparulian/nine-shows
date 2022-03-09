import app from "./app";

// Start app
console.log("Starting server..");
const port = 3000;
app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});
