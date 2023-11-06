
function Post(props){
    
 
return (
<article>
  <p>postId: {props.userId}</p>
  <p>id: {props.id}</p>
  <p>name: {props.title}</p>
  <p>email: {props.body}</p>
</article>
   
    );
}

export default Post;