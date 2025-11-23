import mongoose from "mongoose"


async function bootstrap () {
    try{
        await mongoose.connect()

    }catch {

    }
}

bootstrap()