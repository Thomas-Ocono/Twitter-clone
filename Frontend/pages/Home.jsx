import Tweet from "../components/Tweet";
function Home() {
  return (
    <div class="Home">
      <h1>Hello there!</h1>
      <input type="text" placeholder="Tweet something" />
      <div class="tweet-card" id="example-tweet"></div>
      <Tweet username="Tom" content="Test Tweet" />
      <Tweet username="Test" content="Second test tweet" />
    </div>
  );
}
export default Home;
