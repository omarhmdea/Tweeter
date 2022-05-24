const tweeter = Tweeter()
const renderer = Renderer()

$("#post").click(function(){
    const text = $("input").val("")
    tweeter.addPost(text)
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click",".delete",function(){
    const postId = $(this).closest(".post").data().id
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
    
})

$("#posts").on("click",".addComment",function(){
    const text = $(this).siblings("input").val()
    const postId = $(this).closest(".post").data().id
    tweeter.addComment(text,postId)
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click",".delete-comment",function(){
    
    const commentID = $(this).next().data().id
    const postId = $(this).closest(".post").data().id
    tweeter.removeComment(postId,commentID)
    renderer.renderPosts(tweeter.getPosts())
})

console.log(renderer.renderPosts(tweeter.getPosts()));
