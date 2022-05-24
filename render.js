const Renderer = function(){


    const renderPosts = function(posts){
        $("#posts").empty()
        for (const post of posts) 
            addPost(post)
        
    }

    const addPost = function(post) {
        const newPost = $(`<div class="post" data-id=${post.id}>${post.text}</div>`)
        const postComments = $(`<div class="comments"></div>`)

        $("#posts").append(newPost)
        newPost.append(postComments)

        //add comments to the post
        for (const comment of post.comments) 
            addComments(comment,postComments)

        //add input box and "comment" button to the post
        const inputBox = $(`<input type="text" placeholder="Got something to say?">`)
        const commentButton = $(`<button class="addComment">Comment</button> </br>`)
        newPost.append(inputBox)
        newPost.append(commentButton)

        //add "Delete post" button to the post
        const DeleteButton = $(`<button class="delete">Delete post</button>`)
        newPost.append(DeleteButton)
        
    }

    const addComments = function(comment,postComments){
        const newComment = $(`<span data-id=${comment.id}>${comment.text}</span> </br>`)
        const deleteComment = $(`<span class="delete-comment">x </span>`)

        $(postComments).append(deleteComment)
        $(postComments).append(newComment)
    }



    return {renderPosts}
}