const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => {
	console.log(`app listening on port ${port}`);
});
