import mongoose from 'mongoose'
import config from 'config'


const connectMongo = async ():Promise<any> => {
  //const dbUri = config.get<string>('dbUri')
  mongoose.connect('mongodb+srv://pham02:thomas2010@cluster0.kbzgk.mongodb.net/?retryWrites=true&w=majority')
}

export default connectMongo