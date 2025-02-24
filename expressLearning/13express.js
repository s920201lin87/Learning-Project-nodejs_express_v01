const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoCollection');
        console.log('連接 mongodb........');

        // 定義 Schema
        const bookSchema = new mongoose.Schema({
            name: String,
            author: String,
            price: Number,
            is_hot: Boolean,
            pub_time: Date
        });

        // 建立 Model
        const BooksModel = mongoose.model('books', bookSchema);

        // 插入資料
        const newBook = await BooksModel.create({
            name: '被討厭的勇氣',
            author: '岸見一郎',
            price: 11,
            is_hot: true,
            pub_time: new Date()
        });
        console.log(newBook);

        // 查詢價格小於 20 的書籍
        const books = await BooksModel.find({ price: { $lt: 20 } });
        console.log(books);
    } catch (error) {
        console.error('發生錯誤:', error);
    } finally {
        await mongoose.connection.close();
        console.log('connection close......');
    }
}

main();
