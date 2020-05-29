# What is GraphQL?
Generally multiple endpoints and REST apis for applications. GraphQL has a single endpoint where you can request whatever information you need. Its also speedy! You dont have to parse through junk data that you get from one API call when you simply wanted a single source of information. 

Lets look at an example REST API case where youd want to fetch all author names and all books written by that author.

![alt-text](https://i.imgur.com/LtN03g4.png)

First API Call to fetch author names along with a bunch of other data that  we dont need.
Second API Call to use our author ids to find books written by that author. 

In GraphQL we can use a single endpoint with a query that will return exactly the information and only the information that we needed.

Given a query, GraphQL will parse through that query to return the exact data which results in one API call instead of multiple.

![alt-text](https://i.imgur.com/dRCv9ro.png)

#GraphQL Schema

Schemas are defined within graphQL And are strongly typed. 

ex :
```
const schema = new GraphQLSchema({
    query: newGraphQLObjectType({
        name: schemaName
        fields: () => {
            message: {
                type: GraphQLString
                resolve: () => Hello World
            }
        }
    })
})
```  
resolve is what happens when you hit that query. In this example if you query for message within schemaName youll get hello world back. 
For express, you can pass that schema in and use it to interact with GraphQL interface.

Example query: 
Input                   Output
query {         data {
    message             "message": Hello World
}                      }

## Code Example
```
const express = require('express')
const expressGraphQL = require('express-graphql')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql')
const app = express()

const authors = [
	{ id: 1, name: 'J. K. Rowling' },
	{ id: 2, name: 'J. R. R. Tolkien' },
	{ id: 3, name: 'Brent Weeks' }
]

const books = [
	{ id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
	{ id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
	{ id: 3, name: 'Harry Potter and the Goblet of Fire', authorId: 1 },
	{ id: 4, name: 'The Fellowship of the Ring', authorId: 2 },
	{ id: 5, name: 'The Two Towers', authorId: 2 },
	{ id: 6, name: 'The Return of the King', authorId: 2 },
	{ id: 7, name: 'The Way of Shadows', authorId: 3 },
	{ id: 8, name: 'Beyond the Shadows', authorId: 3 }
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'This represents a book written by an author',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    authorId: { type: GraphQLNonNull(GraphQLInt) },
    author: {
      type: AuthorType,
      resolve: (book) => {
        return authors.find(author => author.id === book.authorId)
      }
    }
  })
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents a author of a book',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve: (author) => {
        return books.filter(book => book.authorId === author.id)
      }
    }
  })
})

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    book: {
      type: BookType,
      description: 'A Single Book',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => books.find(book => book.id === args.id)
    },
    books: {
      type: new GraphQLList(BookType),
      description: 'List of All Books',
      resolve: () => books
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of All Authors',
      resolve: () => authors
    },
    author: {
      type: AuthorType,
      description: 'A Single Author',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => authors.find(author => author.id === args.id)
    }
  })
})

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addBook: {
      type: BookType,
      description: 'Add a book',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) }
      },
      resolve: (parent, args) => {
        const book = { id: books.length + 1, name: args.name, authorId: args.authorId }
        books.push(book)
        return book
      }
    },
    addAuthor: {
      type: AuthorType,
      description: 'Add an author',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        const author = { id: authors.length + 1, name: args.name }
        authors.push(author)
        return author
      }
    }
  })
})

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
})

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))
app.listen(5000, () => console.log('Server Running'))
``` 

 within resolve (if you have a database, is when youd fetch that information) the resolve also takes in arguments and has a parent parameter which is essentially the parent node for the current node 

 For ex: 

    in the code above, for books with authors. The authors points to the book where its id is equal to a books id. This is
    executed in the resolve. 

We use functions in resolve to prevent errors since the data relies on each other when they have a relationship. 


Mutations are Essentially our Post/Put/Patch

GraphQLNonNull is similar to a validations to ensure no null value is passed into args.

