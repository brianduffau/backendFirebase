import express from 'express';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../db/firebase.js'

const dbF = db

function crearServidor(){

    const app = express()
    app.use(express.json())

    // GET CUSTOMERS 
    app.get('/customers', async (req, res) => {
      
        const data = collection(dbF, 'customers')
        const dataSnapshot = await getDocs(data)
        const result = dataSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
            }))
    
        res.send(result)
    
        })

    // GET PETS 
    app.get('/pets', async (req, res) => {
        
        const data = collection(dbF, 'pets')
        const dataSnapshot = await getDocs(data)
        const result = dataSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))

        res.send(result)

    })

    // GET PROFESSIONALS 
    app.get('/professionals', async (req, res) => {
        
        const data = collection(dbF, 'professionals')
        const dataSnapshot = await getDocs(data)
        const result = dataSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))

        res.send(result)

    })

    // GET HIRINGS
    app.get('/professionals', async (req, res) => {
        
        const data = collection(dbF, 'professionals')
        const dataSnapshot = await getDocs(data)
        const result = dataSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))

        res.send(result)

    })

    // POST
    app.post('/create', async (req, res) => {

          const { name } = req.body

        try{
            await db.collection('professionals').add({
                name
            })          
        } catch(error) {
            return res.json({error: error.message})
        }

        return res.send("nuevo agregado")
    
    })
 
    let server

    return {
        conectar: (puerto = 0) => {
            return new Promise((resolve, reject) => {
                server = app.listen(puerto)
                console.log(puerto)
                server.on('request', request => { console.log(`${new Date().toLocaleString()}: ${request.method} ${request.url}`) })
                server.on('listening', () => { resolve(server) })
                server.on('error', error => { reject() })
            })
        },
        desconectar: () => {
            return new Promise((resolve, reject) => {
                server.close(error => {
                    if (error) reject(error)
                    else resolve()
                })
            })
        }
    }

}

export { crearServidor }