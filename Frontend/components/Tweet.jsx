function Tweet({ username, content }) {
  return (
    <div class="Tweet">
      <h2>{username} </h2>
      <p>{content}</p>
    </div>
  );
}
export default Tweet;
