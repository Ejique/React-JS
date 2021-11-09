
import './App.css';
import HelloWorld from './HelloWorld';
import Post from './Post';
import posts from './posts.json'

function App() {
 const posts_list = posts.map(post=>{
   return <Post key={post.id} title={post.title} body={post.body}/>
 })
  return (
    <div className="App">
      {posts_list}
      <HelloWorld text = "Привет!" color="red"/>
      

    </div>
  );
}

export default App;
