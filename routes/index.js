const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

// Default Router
router.get('/', (req, res) => {
    res.locals.projects = projects;
    res.render('index');
});

// Router for projects with id
router.get('/project/:id', (req, res) => {
    if (projects[req.params.id]) {
        res.locals.project = projects[req.params.id];
        res.locals.id = projects[req.params.id].id;
        res.render('project');
    } else {
        res.render('page-not-found', {
            "status": 404,
            "message": "Oops, page not found. Looks like that route does not exist."
        });
    }
});

// Redirect projects to project
router.get('/projects/', (req, res) => {
    res.redirect('project/');
});

// Redirect projects to project
router.get('/projects/:id', (req, res) => {
    const id = req.params.id;
    res.redirect(`/project/${id}`);
});

// Router for the about page
router.get('/about', (req, res) => {
    res.render('about');
});

// Custom error route
router.get('/error', (req, res) => {
    // Log statement to indicate that this function is running
    console.log('Handling request to custom "error" route, "/error"');

    // Create custom error and print error message to the page
    const err = new Error('err');
    err.message = 'Oops, it looks like an error occurred.';
    throw err;
});

// Export the router
module.exports = router;