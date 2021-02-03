# Feedback

1. “Document how you determined this order.”
   1. This was confusing because it says in the previous sentence: “order by rating”
   2. I’m maybe now seeing things…. Looks like `voteCount`, `voteAverage` and `popularity` kinda makeup a “rating”? Might be good to document what the schema of the API means.
2. Create a unit test around your filter function.
   1. This feels weird. I like leaving the open ended statement you had at the first that said “you are expected to document and test along the way”. I like leaving it open ended because it allows us to see how they would setup their tests.
   2. I also ended up just using the GraphQL sort/filter so I didn't feel like unit tests were needed 😂
3. I know it’s out of our control, but the whole JSON-graphql-server issue is kinda weird.
   1. What if we just spun up a dumb backend at podium? You know I'd be game...
4. I feel like this may block someone who hasn’t worked with GraphQL before… but maybe that’s an okay thing 🤷
   1. Why not use the most simple Apollo setup?
5. Why mix GraphQL & Rest?
   1. I feel like GraphQL is a little unnessecary because we give them the data and ways to fetch it.
   2. I loved it because it simplified A TON of the work I was doing 😂 
6. Love that we have a basic working app for them. Simulates a real world experience of iterating on top of designs.
7. These designs are so great. The images are so fun. I feel PROUD building something like this. It’s fun!
8. I’m not seeing the asset for the person placeholder on the movie details screen.... I just ended up not doing that part.
9. Whenever I do a challenge like this for a prospective employer, I ALWAYS try and deploy it to go above & beyond. The JSON-server thing doesn't let me do that. I'd love to spin up a live server at podium to provide the API.
