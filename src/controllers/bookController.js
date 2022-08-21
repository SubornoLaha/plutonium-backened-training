const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const newPublisher = require("../models/newPublisher")

// const createBook = async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({ data: bookCreated })
// }

// const getBooksData = async function (req, res) {
//     let books = await bookModel.find()
//     res.send({ data: books })
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({ data: specificBook })
// }




const fun1 = async function (req, res) {
    let data = req.body
    let authorData = await authorModel.create(data)
    res.send({ author: authorData })
}

const fun2 = async function (req, res) {
    let data = req.body
    let publisherData = await newPublisher.create(data)
    res.send({ publisher: publisherData })
}

// The authorId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.


const fun3 = async function (req, res) {
    let data = req.body
    let auId = data.author_id
    if (!auId) { return res.send({ mssg: "error" }) }
    let auMoId = await authorModel.find({ _id: auId })
    if (auMoId.length == 0) { return res.send({ mssg: "error" }) }
    let bookData = await bookModel.create(data)
    res.send({ msg: data })
}



const fun4 = async function (req, res) {

    let specificBook = await bookModel.find().populate('author_id').populate('publisher')
    res.send(specificBook)
}



// Edit: New problem (5)
// // 5. Create at least 4 publishers (Penguin, Bloomsbury, Saraswati House, HarperCollins). Create at least 6 authors with ratings 2, 3, 3.5, 4, 4.5 and 5. Create around 10 books with these publishers and authors.
// // Create a new PUT api /books and perform the following two operations
// a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
// b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60) 

const fun5 = async function (req, res) {
    let publisher1 = await newPublisher.find({ name: "Penguin"  }).select({ _id: 1 })
    let publisher2=await newPublisher.find({name:"HarperCollins"}).select({_id:1})
    let newData = await bookModel.updateMany({ $or:[{publisher:publisher1},{publisher:publisher2}]}, { isHardCover: true }, { new: true })
    let authorData=await authorModel.find({ratings:{$gt:3.5}}).select({_id:1})
    let bookData= await bookModel.updateMany({author_id:authorData},{$inc:{price:10}})
    let bookAll= await bookModel.find()
    res.send({ msg: bookAll })
}








module.exports = { fun1, fun2, fun3, fun4, fun5 }
// module.exports.createBook = createBook
// module.exports.getBooksData = getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
