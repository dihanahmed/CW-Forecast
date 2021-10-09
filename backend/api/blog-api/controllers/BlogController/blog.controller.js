//User model
const Blog = require('../../models/blogs');
const User = require('../../models/users')
const sessionStorage = require('sessionstorage')

//blog post handle

function makeBlog(req, res) {

    const {title, content, email} = req.body;


    //check required field
    if (!title || !content || !email) {
        console.log("please fill up the form to complete the blog")
    } else {
        new Blog({
            title,
            content,
            email
        }).save().then(() => {
            return res.send({successful: true});
        });


    }
}


function findByEmail(req, res) {

    Blog.find({email: req.body.email})
        .then(blog => {
            if (blog) {
                //User exists
                res.json(blog)
            }
        }).catch(err => {
        res.send("Not successful")
    })

}

function findByBlogId(req, res) {
    Blog.findById(req.body.blog_id, function (err, blog) {
        if (err) {
            res.send({successful: false})
        } else {
            res.json(blog)
        }
    })
}

function findAndRemove(req, res) {
    console.log(req.body);

    /*
        sessionStorage.setItem('user','test@test.com')
    */

    let sessionEmail = sessionStorage.getItem('user')
    Blog.findOne({email: sessionEmail}).then((user) => {
        if (!user) {
            res.send({successful: false})
        } else {
            Blog.findByIdAndRemove(req.body.blog_id, function (err, res) {
                if (err) {
                    res.json({successful: false});
                }

                res.json({successful: true});

            })
        }
    })
}

function findAll(req, res) {
    Blog.find()
        .then(blogs => {
            if (blogs) {
                res.json(blogs)

            }
        }).then(() => {
    })
    //done
}

async function updateRequest(req, res) {
   await Blog.updateOne({_id: req.body._id},
        {$set: {title: "I Have Done DB",content:req.body.content}}
    ).then((blog) => {
        res.json(blog)
    }).catch((error) => {
        res.send(error.message)
    })
}


module.exports = {
    makeBlog,
    findByEmail,
    findAll,
    findByBlogId,
    findAndRemove,
    updateRequest
}

/*

    [
    {
        "_id": "60eda0e5fe50322370f0c771",
        "title": "TFB",
        "content": "PIC",
        "email": "a@a.com",
        "date": "2021-07-13T14:19:17.199Z",
        "__v": 0
    },
        {
            "_id": "60eda339ad1772351cf4492c",
            "title": "TFB ABC",
            "content": "PIC",
            "email": "a@a.com",
            "date": "2021-07-13T14:29:13.010Z",
            "__v": 0
        },
        {
            "_id": "60eda341ad1772351cf4492e",
            "title": "TFB ABC DEF",
            "content": "PIC",
            "email": "a@a.com",
            "date": "2021-07-13T14:29:21.149Z",
            "__v": 0
        },
        {
            "_id": "60eda34aad1772351cf44930",
            "title": "TFB ABC DEF",
            "content": "PIC sping",
            "email": "a@a.com",
            "date": "2021-07-13T14:29:30.666Z",
            "__v": 0
        },
        {
            "_id": "60eda34fad1772351cf44932",
            "title": "TFB ABC DEF",
            "content": "PIC sping ok",
            "email": "a@a.com",
            "date": "2021-07-13T14:29:35.016Z",
            "__v": 0
        },
        {
            "_id": "60edabb2ad1772351cf4494c",
            "title": "How To Develop React",
            "content": "PIC sping ok",
            "email": "a@a.com",
            "date": "2021-07-13T15:05:22.132Z",
            "__v": 0
        },
        {
            "_id": "60edc3d888f8d121ac456dcc",
            "title": "How To Develop React",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in sem pharetra, ultricies est eu, volutpat lacus. Donec porta, dui et dapibus finibus, eros nisl vulputate nisi, quis elementum risus diam ac risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer facilisis convallis purus nec placerat. Nam sed magna id neque iaculis sagittis id id nunc. Nullam ullamcorper sollicitudin vestibulum. Morbi rhoncus nibh vitae nulla fringilla suscipit quis nec justo. Nullam fermentum eget arcu at mollis. Cras varius sem quis malesuada iaculis. Nulla pellentesque ultrices ante, et faucibus risus egestas quis. Pellentesque condimentum euismod felis sit amet volutpat. Nulla facilisi. Nunc dignissim commodo ornare. Nunc pellentesque felis vitae est commodo tempus id sed nisl. Quisque nunc nisi, porta eu turpis et, tempor molestie quam.\n\nMauris sollicitudin convallis leo non sagittis. Integer rutrum vestibulum leo. In vel suscipit nisi. Maecenas aliquet fermentum velit condimentum rhoncus. Integer ipsum tortor, pulvinar nec odio vel, efficitur mollis elit. Nam vulputate leo nulla, et vehicula sapien fringilla et. Donec gravida aliquet mauris, eget porta dolor imperdiet nec. Suspendisse in ligula non diam molestie laoreet. Nunc convallis luctus neque at eleifend. Donec suscipit ipsum mauris. Vestibulum pharetra felis eu est posuere, in cursus risus consequat. Proin eleifend congue mollis. In laoreet nulla sit amet vulputate vehicula.\n\nUt at purus lacus. Sed interdum elementum arcu, non mattis sapien aliquet vitae. Suspendisse vestibulum auctor sollicitudin. Praesent lacus urna, tincidunt non lacus vitae, blandit feugiat velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec bibendum orci id magna eleifend, id consectetur eros malesuada. Integer rhoncus, augue a placerat imperdiet, metus turpis tincidunt tortor, vel eleifend metus quam ac nibh.\n\nNullam porttitor lacinia eros ullamcorper fringilla. Aenean aliquam tortor eu nibh varius, iaculis luctus tortor vulputate. Nam est nisi, blandit ac lacus ut, tristique posuere ligula. Nunc fringilla semper est quis suscipit. Ut sit amet porttitor massa. Curabitur mattis felis non nulla iaculis, ac vulputate purus semper. Nam sem urna, finibus vel ex eu, scelerisque suscipit turpis. Nullam arcu lacus, iaculis id nisl quis, varius congue urna. Integer nec pharetra turpis. Aenean ut vulputate libero. In fringilla urna nec diam condimentum viverra.\n\nPellentesque at tortor nec nunc elementum scelerisque sollicitudin in purus. Phasellus ornare libero sit amet nibh tincidunt molestie. Morbi blandit leo non sem cursus semper. Proin posuere mattis diam scelerisque pulvinar. Phasellus pretium id urna vitae vulputate. Aliquam tempor, velit sit amet ultricies fermentum, urna nulla placerat mauris, sit amet finibus sem turpis non neque. Praesent ipsum enim, sagittis ut volutpat eu, tincidunt a justo. Etiam gravida id lectus at dictum. Phasellus consequat maximus libero at molestie. Quisque bibendum hendrerit porttitor. Donec rhoncus quam in libero ultrices sodales vestibulum non justo. Quisque sem sapien, suscipit eget tristique nec, efficitur eget nunc. Etiam aliquam felis id lobortis rhoncus. Aenean massa eros, congue et elementum sit amet, blandit non nisl.",
            "email": "a@a.com",
            "date": "2021-07-13T16:48:24.139Z",
            "__v": 0
        },
        {
            "_id": "60fb9929d4382620ae9fd853",
            "title": "Title",
            "content": "Post",
            "email": "dihan@gmail.com",
            "date": "2021-07-24T04:38:01.887Z",
            "__v": 0
        },
        {
            "_id": "610ab433f8a3b9022ce69e04",
            "title": "MD Test 7",
            "content": "# This is heading\n## Smaller Heading\n### Way Smaller Heading\n####Next comes horizontal rule\n\n\n<hr>\n`This is a code segment`\n\n\n\n\n",
            "email": "test@test.com",
            "date": "2021-08-04T15:37:23.438Z",
            "__v": 0
        },
        {
            "_id": "610ab563f8a3b9022ce69e0b",
            "title": "Markdown Test 8",
            "content": "# This is heading\n## Smaller Heading\n### Way Smaller Heading\n#### Next comes horizontal rule\n\n\n<hr>\n```\nThis is a code segment\nconsole.log(\"Test\");\n````\n\n\n\n\n",
            "email": "test@test.com",
            "date": "2021-08-04T15:42:27.141Z",
            "__v": 0
        },
        {
            "_id": "610ab5baf8a3b9022ce69e0f",
            "title": "MD Test 9",
            "content": "# This is heading\n## Smaller Heading\n### Way Smaller Heading\n#### Next comes horizontal rule\n\n\n\n```\n\nThis is a code segment\n\nHello World\n\n```",
            "email": "test@test.com",
            "date": "2021-08-04T15:43:54.085Z",
            "__v": 0
        },
        {
            "_id": "610ab6faf8a3b9022ce69e17",
            "title": "MD Test 11 (Title)",
            "content": "# This is heading \n## Smaller Heading \n### Way Smaller Heading\n\nThis is general Text\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu gravida nisl, luctus tristique leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque lobortis magna ut lorem aliquam consequat. Suspendisse nisi dui, scelerisque et ligula ac, mollis cursus elit. Vestibulum a augue lacus. Cras suscipit rhoncus mauris rutrum ultrices. Nulla a leo non augue consectetur laoreet sit amet eget mi. Proin justo neque, tincidunt id placerat at, maximus eget risus. Nulla facilisi. Maecenas et tristique odio. Curabitur ornare, massa nec accumsan suscipit, dolor justo fringilla tellus, sed imperdiet felis justo vel sem. Proin ultrices rhoncus nisi, vel congue diam.\n\nQuisque molestie mi in gravida pellentesque. Curabitur lacinia eget erat vitae sagittis. Mauris neque lectus, viverra suscipit varius eu, accumsan et ligula. Curabitur eget magna ultricies, varius lorem ut, tristique risus. Nulla sed dui mattis, molestie nulla sit amet, ultrices enim. Phasellus quis nunc et risus \n\n\n```\npublic static void main(String[] args){\n    launch(args);\n}\n\n```\n\n\n\n\n![An Image](\nhttps://wallup.net/wp-content/uploads/2015/12/156478-reflection-river-arch-trees-nature-landscape-water.jpg \"An Image\")\n\n",
            "email": "test@test.com",
            "date": "2021-08-04T15:49:14.622Z",
            "__v": 0
        },
        {
            "_id": "610abf368ab8cd453ce1e6a8",
            "title": "Post 1",
            "content": "A code snippet\n\n```\n//glsl version 3.0 \n//fragment\nvoid main(){\ngl_Frag_color = vec4(.5, .8, .4, .7);\n\n}\n```",
            "email": "testt1@test.com",
            "date": "2021-08-04T16:24:22.478Z",
            "__v": 0
        }
    ]*/
