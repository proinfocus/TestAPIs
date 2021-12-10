# TestAPIs
A tiny, simple and easy to use application to test REST APIs.

Starting using it from [the app link here...](https://determined-pike-06d5f7.netlify.app/)


## Usage
1. Choose Request type - GET, POST, PUT or DELETE. For eg: `GET`
2. Enter the Request URL EndPoint you want to test. For eg: `https://api.github.com/users/proinfocus`
3. If Request Headers are required, you can enter them like an object. For eg: `{ "Content-Type": "application/json;charset=UTF-8" }`
4. If Request Body is required, type or paste your JSON code.
5. Click on **Send Request** to send the request and get the response.
6. Response is display below the Request Body like the following:
```
Status: 200
Timeout: 0

Response Text:
{
  "login": "proinfocus",
  "id": 21036536,
  "node_id": "MDQ6VXNlcjIxMDM2NTM2",
  "avatar_url": "https://avatars.githubusercontent.com/u/21036536?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/proinfocus",
  "html_url": "https://github.com/proinfocus",
  "followers_url": "https://api.github.com/users/proinfocus/followers",
  "following_url": "https://api.github.com/users/proinfocus/following{/other_user}",
  "gists_url": "https://api.github.com/users/proinfocus/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/proinfocus/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/proinfocus/subscriptions",
  "organizations_url": "https://api.github.com/users/proinfocus/orgs",
  "repos_url": "https://api.github.com/users/proinfocus/repos",
  "events_url": "https://api.github.com/users/proinfocus/events{/privacy}",
  "received_events_url": "https://api.github.com/users/proinfocus/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Proinfocus",
  "company": "Proinfocus",
  "blog": "http://www.proinfocus.com",
  "location": "Kalaburagi, India",
  "email": null,
  "hireable": null,
  "bio": "We build solutions using technology.",
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 4,
  "following": 2,
  "created_at": "2016-08-15T10:47:14Z",
  "updated_at": "2021-12-07T06:13:43Z"
}
```
