import React, { Component } from "react";
import axios from "axios";

class MyRetrive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get(
        'http://ec2-13-126-190-182.ap-south-1.compute.amazonaws.com/api/v1/astrology/kundali/'
      )
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        List of People who created Kundli
        {
            posts.map(post => 
            <div key={post.first_name} className="seperation">
                First Name :{post.first_name} <br />
                LastName : {post.last_name} <br />
                Gender  : {post.gender}  <br />
                Birth_date: {post.birth_date}  <br />
                Birth_time : {post.birth_time}  <br />
                Birth_timezone : {post.birth_timezone}  <br />
                Birth_country : {post.birth_country}  <br />
                Birth_region : {post.birth_region}  <br />
                Birth_city : {post.birth_city}  <br />
                Residence_country : {post.residence_country}  <br />
                Residence_region : {post.residence_region}  <br />
                Residence_city : {post.residence_city}  <br />
                Residence_timezone : {post.residence_timezone}  <br />
                
            </div>) }
      </div>
    );
  }
}

export default MyRetrive;
