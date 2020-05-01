var router = require('koa-router');
var r = router();
const PinTweet = require('../model/twitter');
const PinTiktok = require('../model/tiktok');
const passport = require('koa-passport')
const jsonwebtoken = require('jsonwebtoken')
const passportStrategies = require('../passport')
const User = require('../model/users')
const config = require('../config')






// get route to handle Twitter posts
r.get('/pin/twitter', async (ctx) => {
    try {

        var tweets = await PinTweet.find();
        ctx.body = tweets;
        console.log(ctx.body);


    } catch (error) {
        console.log(error);
        ctx.body = "error: The Server timed-out "
    }

})
// get route to handle TikTok posts
r.get('/pin/tiktok', async (ctx) => {
    try {

        var tiks = await PinTiktok.find();
        ctx.body = tiks;
        console.log(ctx.body);


    } catch (error) {
        console.log(error);
        ctx.body = "error: The Server timed-out "
    }
})

// *******************************************************************

// route to handle Twitter pin posts
r.post('/pin/twitter', async (ctx) => {

    // destructuring the data variables
    var {
        caption,
        handle,
        firsthref,
        date,
        secondhref
    } = ctx.request.body;

    const found = await PinTweet.findOne({
        secondhref: secondhref
    });
    // test to see if we already have that post present
    if (found) {
        ctx.body = {
            error: "Post already present",
        };
        // return proper http code!!!!!!!!!!!!!!!!!!!!!
        ctx.response.status = 404;
        console.log(ctx.body);

    }
    // If we do not, add it into the database
    else {
        const tweet = new PinTweet({
            handle: handle,
            caption: caption,
            firsthref: firsthref,
            secondhref: secondhref,
            date: date
        });
        tweet.save().then((res) => {
            // log the saved data into the console for inspection
            console.log(res);

        }).catch(err => {
            ctx.body = err + " error occurred";
        })
        ctx.response.status = 200;
    }

    console.log(ctx.request.body);

})

// *********************

// route to handle Tiktok pin posts
r.post('/pin/tiktok', async (ctx) => {
    // destructuring the data variables
    var {
        cite,
        vidID

    } = ctx.request.body;

    const found = await PinTiktok.findOne({
        vidID: vidID
    });
    // test to see if we already have that post present
    if (found) {
        ctx.body = {
            error: "Post already present",
        };
        // return proper http code!!!!!!!!!!!!!!!!!!!!!
        ctx.response.status = 404;
        console.log(ctx.body);

    }
    // If we do not, add it into the database
    else {
        const tik = new PinTiktok({
            cite: cite,
            vidID: vidID
        });
        tik.save().then((res) => {
            // log the saved data into the console for inspection
            console.log(res);

        }).catch(err => {
            ctx.body = err + " error occurred";
        })
        ctx.response.status = 200;
    }

    console.log(ctx.request.body);

})

//  login route
r.post('/pin/login', async ctx => {

    await passport.authenticate(
        'local',
        (err, user, info, ) => {
            if (err) {
                ctx.throw(err.status)
            } else if (!user) {
                ctx.body = {
                    info
                }
            } else {
                const payload = {
                    id: user.id

                }

                const token = jsonwebtoken.sign(
                    payload,
                    config.jwtSecret
                )

                ctx.body = {
                    token: token,
                    email: user.email

                }
            }
        }
    )(ctx)
})

r.post('/pin/register', async ctx => {
    console.log(ctx.request.body);

    const {
        email,
        password,
        name

    } = ctx.request.body;

    const found = await User.findOne({
        email: email
    });

    if (found) {
        console.log("User exists");

    } else {
        const user = new User({
            email,
            password,
            name
        });

        console.log(user);

        await user.save().then((res) => {
            // log the saved data into the console for inspection

            ctx.status = 201;
            ctx.body = {
                message: "You are now one of us!"
            }
            console.log("New User " + res + " has been saved");
            console.log(ctx.body);
            return
        })
    }

    // return passport.authenticate('local', (err, user, info, status) => {
    //     if (user) {
    //         ctx.login(user);
    //         ctx.redirect('/auth/status');
    //     } else {
    //         ctx.status = 400;
    //         ctx.body = {
    //             status: 'error'
    //         };
    //     }
    // })(ctx);





})


module.exports = r;