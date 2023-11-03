// Create web server application

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Get all comments
app.get('/comments', (req, res) => {
    db.getComments().then((comments) => {
        res.send(comments);
    });
});

// Add new comment
app.post('/comments', (req, res) => {
    db.addComment(req.body).then((comment) => {
        res.send(comment);
    });
});

// Delete comment
app.delete('/comments/:id', (req, res) => {
    db.deleteComment(req.params.id).then((comment) => {
        res.send(comment);
    });
});

// Update comment
app.put('/comments/:id', (req, res) => {
    db.updateComment(req.params.id, req.body).then((comment) => {
        res.send(comment);
    });
});

// Get comment by ID
app.get('/comments/:id', (req, res) => {
    db.getComment(req.params.id).then((comment) => {
        res.send(comment);
    });
});

// Start web server
app.listen(process.env.PORT || 8081);