import {useState, useEffect} from "react";
function PostList(){
const [listOfPosts, setListOfPosts] = useState("");
    useEffect(() => {
        async function getData2() {
      
          const listOfPosts = await fetch("https://jsonplaceholder.typicode.com/comments");
   
          const data3 = await listOfPosts.json();
    
          console.log(data3);
          
          setListOfPosts(data3);
        //   setLoading(false);
        }
        getData2(); 
        
      }, [ ] );
    const postJSX = listOfPost.map((singlePost) = >
    <li>{data3}</li>
    );
  return(
  <>
<p></p>

  </>
  );
}
export default PostList;