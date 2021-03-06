const reducers = (posts = [], action) => {
  switch (action.Type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
export default reducers;
