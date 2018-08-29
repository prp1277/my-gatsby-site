---
title: "Getting Started with GraphQL- Part 1"
date: "2018-08-22"
---
> This assumes there is already a directory set up, but that's about it.
>[Example Files](https://1drv.ms/f/s!AoLkNBOSNnKyjaMLfS0m6_fLIEhk_A) 


These are my notes from the LinkedIn Learning tutorial [_GraphQL Essential Training_](https://www.linkedin.com/learning/graphql-essential-training/data-persistence-with-sql). The handwritten versions can be found at the following links: 

| node.js Server | Graphql | Mongo | SQL |
|:---------:|:----------:|:---------:|:---------:|
 [Page1](/img/GQL-notes-1.jpg) | [Page2](/img/GQL-notes-2.jpg) | [Page3](/img/GQL-notes-3.jpg) | [Page4](/img/GQL-notes-4.jpg) |


## Set-Up a New Node.js Server

Make sure you are in the root directory of your project by typing `ls` into your integrated terminal. After that is confirmed, run `npm init` to initiate a node.js project with a package.json. This will walk you through the process as follows:

```bash
prp1277@home MINGW64 ~/GitHub-Repos/src-job-land
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (src-job-land)
version: (1.0.0)
description: Job Land
entry point: (index.js)
test command:
git repository:
keywords:
author: Patrick Powell
license: (ISC)
About to write to C:\\GitHub-Repos\src-job-land\package.json:

{
  "name": "src-job-land",
  "version": "1.0.0",
  "description": "Job Land",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Patrick Powell",
  "license": "ISC"
}

Is this ok? (yes)
```

## Install Dependencies and Set-Up the Environment

First, install the dev dependencies: 
`npm install --save-dev babel-cli- babel-preset-env babel-preset-stage-0`

then we'll install the project dependencies:
`npm install --save express nodemon`

Now we have a package.json, package-lock.json and the node_modules directory along with our other project files. We will still need to add a few things before we are able to do anything with our project. We'll start by adding a file called `.babelrc` in the root directory of the project. Once that is added, open the file and paste the following:

```json
/*  './root/.babelrc' */
{
    "presets": [ 
        "env", 
        "stage-0"
        ]
}
```

## Creating a Schema - schema.js

We are getting closer to starting our server, but first we have to create one more file and make some updates to our index.js. If you haven't already, add a folder named `data` in your root directory. Once you have `./root/data/` add a file named `schema.js`. This will tell GraphQL and MongoDB the structure and types of our data.

In `./root/data/schema.js` add:

```js

import { buildSchema } from 'graphql';

/*
 In this case, we are building 3 types: Friend, Email and Query
 and adding details about the corresponding data types 
*/

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        language: String
        email: String
    }

    type Query {
        friend: Friend
    }

    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: String
        language: String
        email: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`)

export default schema;
```

## Updating index.js

Next, we need to add an entry point for the server. When we set up our package.json we specified that the entry point will be index.js, so open or create **index.js** and add the following:

```js
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL is amazing!');
});

class Friend {
  constructor(id, { firstName, lastName, gender, language, email }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.language = language;
    this.email = email;
  }
}

const friendDatabase = {};

const root = {
  friend: () => {
    return {
      "id": 1277,
      "firstName": "Patrick",
      "lastName": "Powell",
      "gender": "Male",
      "language": "English",
      "emails": [
        { email: "me@me.com" },
        { email: "another@me.com" }
      ],
    }
  },
  createFriend: ({ input }) => {
    let id = require('crypto').randomBytes(10).toString('hex');
    friendDatabase[id] = input;
    return new Friend(id, input);
  }
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));
```

## Install Additional Dependencies 

So at this point, we've build a schema and told GraphQL where the entry point is... but we still haven't installed GraphQL. Open your terminal again and type:

`npm install --save express-graphql graphql`

> One thing to point out - make sure the project's directory is not named "graphql" or you'll have issues.

Make sure all your files are saved and start the server using `npm start` and browse to [localhost:8080/graphql](http://localhost:8080/graphql), where you'll find an instance of GraphiQL. The queries available at this point of the tutorial are limited, but since there is quite a bit left to do, I'm going to leave that for another post.

### Next Time: Integrating MongoDB and SQLite<br/>

#### Questions? Comments? Send me an [email](mailto:prp1277@gmail.com) and let me know what you think!