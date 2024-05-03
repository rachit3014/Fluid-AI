
const mongoose = require('mongoose')
const request = require('supertest')
const app = require('../index');
const jwt = require('jsonwebtoken');


require("dotenv").config();
let jwttoken;

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URL);

    // Creating json tokens for each test purpose
    const user = {
        _id: '66350a63991b5a3294e5b16e', // putting the user id

    };
    jwttoken = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1d" })

});

/* Dropping the database and closing connection after each test. */
afterEach(async () => {
    // await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
});


describe('Test CRUD operations on task with user  authentication', () => {
    let task_id;
    it("should create a task", async () => {

        const res = await request(app).post("/task/create")
            .set('Authorization', `Bearer ${jwttoken}`)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                title: "study",
                description: "Complete homework",
                status: 'pending'
            });
        expect(res.statusCode).toBe(201);
        task_id = res.body.tasks._id;
    });

    it("should get a all task", async () => {
        const res = await request(app).get("/task")
            .set('Authorization', `Bearer ${jwttoken}`)

        expect(res.statusCode).toBe(200);
        expect(res.body.task.length).toBeGreaterThanOrEqual(0)
    });


    it("should get a task by id", async () => {
        console.log(task_id)
        const res = await request(app).get(`/task/${task_id}`)
            .set('Authorization', `Bearer ${jwttoken}`)

        expect(res.statusCode).toBe(200);
        expect(res.body.tasks.title).toBe("study");
    })

    it("should update a task", async () => {
        const res = await request(app).put(`/task/update/${task_id}`)
            .set('Authorization', `Bearer ${jwttoken}`)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
              
                status: 'completed'
            });
        expect(res.statusCode).toBe(200);
        // expect(res.body.message).toBe("sucessfully updated");
    });


    it("should delete a task", async () => {
        const res = await request(app).delete(`/task/delete/${task_id}`)
            .set('Authorization', `Bearer ${jwttoken}`)

        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("sucessfully deleted");
    });

});
// Test authentication
describe(' testing for Authentication', () => {
    it('should return 401 for unauthorized access', async () => {
        const response = await request(app).get('/task');
        expect(response.status).toBe(401);
    });
})