const Tweeter = function() {

    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
        
    ]

    let postIdCounter = 3
    let commentIdCounter = 7

    const getPosts = () => _posts
    

    const getPostIndex = postId => {
        for (const index in _posts) 
            if( _posts[index].id === postId )
                return index
    }

    const addPost = text => {
        let newPost = {}
        newPost['text'] = text
        newPost['id'] = `p${postIdCounter++}`
        newPost['comments'] = []

        _posts.push(newPost)
    }

    const removePost = postID => { 
        const index = getPostIndex(postID)
        if(index)
            _posts.splice((index),1) 
        else
            console.log("There is no post with id " + postID); 
    }

    const addComment = (text,postID) => {
        let comment = {}
        comment['id'] = `c${commentIdCounter++}`
        comment['text'] = text

        const index = getPostIndex(postID)
        if(index)
            _posts[index].comments.push(comment)
        else
            console.log("There is no post with id " + postID);
    }

    const removeCommentById = (index,commentID) => {
        for (const comment in _posts[index].comments) 
            if( _posts[index].comments[comment].id === commentID )
                _posts[index].comments.splice(comment,1)
    }

    const removeComment = (postID, commentID) => {
        const index = getPostIndex(postID)
        if(index)
            removeCommentById(index,commentID)
        else
            console.log("There is no post with id " + postID);
    }
    
    return {getPosts,addPost,removePost,addComment,removeComment}

}


