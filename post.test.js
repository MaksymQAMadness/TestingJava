const axios = require('axios')

describe('HW11', () => {
    test('Task1', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        const post = response.data
        expect(response.status).toBe(200)
        expect(post.userId).toBeDefined()
        expect(post.id).toBeDefined()
        expect(post.title).toBeDefined()
        expect(post.body).toBeDefined()
    })
    
    test('Task2', async () => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts',{
            title: 'Test',
            body: 'Test body',
            userId: 1,
        })
        const post = response.data
        expect(response.status).toBe(201)
        expect(post.id).toBeDefined()
    })

    test('Task3', async () => {
        const changePost = {
            title: "changed test",
            body: "Changed test2"
        }
        const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', changePost)
        const post = response.data
        expect(response.status).toBe(200)
        expect(post.body).toBe(changePost.body)
        expect(post.title).toBe(changePost.title)
    })

        test('Task4', async () => {
        const changePost = {
            title: "changed test",
            body: "Changed test2"
        }
        const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        const post = response.data
        expect(response.status).toBe(200)
    })

})