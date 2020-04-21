const koa = require('koa');
const app = new koa();
const _ = require('./router/index');
const mongoose = require('mongoose');
const bodyparser = require('koa-body');
const cors = require('@koa/cors');

app.use(bodyparser());
app.use(_.routes());
app.use(cors());


// mongoose config


mongoose.connect("mongodb+srv://emmyb:emmybee98@vue-8buqu.mongodb.net/embed?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log("Connection Made");
})
app.listen(3000, () => {

    console.log('App listening on port 3000!');

});