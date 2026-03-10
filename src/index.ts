import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
	res.send("This is Home Page");
});

app.get("/testing", (req, res) => {
	res.send("This is testing Page");
});

app.get("/health", (req, res) => {
	res.send("This is health Page");
});

app.get("/error", (req, res) => {
	res.status(500).send("This is an error");
});

app.get("/ec2", (req, res) => {
	res.send("This is EC2 Page");
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
