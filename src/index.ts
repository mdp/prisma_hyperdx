//Importing project dependancies that we installed earlier
import * as dotenv from 'dotenv'
import express from 'express'

import { trace } from "@opentelemetry/api";
import { otelSetup } from './otel'

//App Varaibles 
dotenv.config()
otelSetup()

const tracer = trace.getTracer("Application");

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//intializing the express app 
const app = express(); 


app.get('/', async (req, res) => {
    
    const posts = await prisma.post.findMany({
        where: { published: true },
        include: { author: true },
    })
    res.json(posts)
})

//exporting app
export default app