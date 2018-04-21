import React from "react"
import PropTypes from "prop-types"
import TweetBox from "./TweetBox"
import TweetList from "./TweetList"

export default class TwitterFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweetsList: this.props.initialTweets };
  }

  addTweet(tweetToAdd) {
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({ id: Date.now(), name: "Guest", body: tweetToAdd});

    this.setState({ tweetsList: newTweetsList});
  }

  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetList tweets={this.state.tweetsList}/>
      </div>
    )
  }
}
