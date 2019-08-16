import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 4992Mz0J1vCQe7XPd2tdwdYXW8M1fwZO7geIaRJcs8tnatjxq84zbclkPRu8v_h0rhaU1QAChFl3F71LFtMO5o0ng_Z7s-GE4xvPPst9ZM-teQxZGDz08LW22SJVXXYx'
  }
});
