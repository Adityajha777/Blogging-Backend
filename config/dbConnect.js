const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // console.log('connecting to the database')

        //connect to the database
        await mongoose.connect('mongodb+srv://Aditya:123@cluster0.wxtn2mj.mongodb.net/Adi?retryWrites=true&w=majority&appName=Cluster0');
    }catch(err){
        console.log('Error while connecting database: ', err);
    }
}

module.exports = connectDB;

