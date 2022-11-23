import React, { useState } from "react";

import Tweet from "./tweet";

const Tweets = () => {
  const tweetData = [
    {
      id: 1,
      votes: 0,
      name: "vaibhav",
      email: "vaibhav@react.com",
      phone: "99292",
      tweet: "boycott",
      twitterhandle: "@abichfi",
    },
    {
      id: 2,
      votes: 0,
      name: "vaibhav",
      email: "vaibhav@react.com",
      phone: "9292929292",
      tweet: "boycott",
      twitterhandle: "@abichfi",
    },
    {
      id: 3,
      votes: 0,
      name: "vaibhav",
      email: "vaibhav@react.com",
      phone: "9292929292",
      tweet: "boycott",
      twitterhandle: "@abichfi",
    },
    {
      id: 4,
      votes: 0,
      name: "vaibhav",
      email: "vaibhav@react.com",
      phone: "9292929292",
      tweet: "boycott",
      twitterhandle: "@abichfi",
    },
    {
      id: 5,
      votes: 0,
      name: "vaibhav",
      email: "vaibhav@react.com",
      phone: "9292929292",
      tweet: "boycott",
      twitterhandle: "@abichfi",
    },
    {
      id: 6,
      votes: 0,
      name: "vaibhav",
      email: "vaibhav@react.com",
      phone: "9292929292",
      tweet: "boycott",
      twitterhandle: "@abichfi",
    },
    {
      id: 7,
      votes: 0,
      name: "vaibhav",
      email: "vaibhav@react.com",
      phone: "9292929292",
      tweet: "boycott",
      twitterhandle: "@abichfi",
    },
    {
      id: 8,
      votes: 0,
      name: "vaibhav",
      email: "vaibhav@react.com",
      phone: "9292929292",
      tweet: "boycott",
      twitterhandle: "@abichfi",
    },
  ];
  const [tweets, setTweets] = useState(tweetData);
  const handleUpVote = (id) => {
    const newState = [...tweets];
    const index = tweets.findIndex((el) => el.id === id);
    newState[index].votes += 1;
    setTweets(newState);
  };
  const handleDownVote = (id) => {
    const index = tweets.findIndex((el) => el.id === id);
    if (tweets[index].votes > 0) {
      const newState = [...tweets];
      newState[index].votes -= 1;
      setTweets(newState);
    }
  };

  const renderTweets = () => {
    return tweets.map((element) => (
      <Tweet
        handleUpVote={handleUpVote}
        handleDownVote={handleDownVote}
        tweet={element}
      />
    ));
  };

  return (
    <div>
      {renderTweets()}
      {/* <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet /> */}
    </div>
  );
};

export default Tweets;
