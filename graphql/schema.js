import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    albumListForHome: [Album!]!
    albumForPage(id: ID!): Album!
  }
  "Album"
  type Album {
    id: ID!
    title: String!
    type: String
    artist: Artist!
    albumArt: String!
    urls: Url!
    colors: [String!]!
    likeCount: Int
  }
  "Album Artist"
  type Artist {
    name: String!
    photoURL: String!
  }
  "Album Links"
  type Url {
    spotify: String
    apple: String
  }
  input AddAlbum {
    title: String
    artist: ArtistInput
    type: String
    albumArt: String
    urls: UrlInput
    colors: [String]
    likeCount: Int
  }
  input ArtistInput {
    name: String
    photoURL: String
  }
  input UrlInput {
    spotify: String
    apple: String
  }
  type Mutation {
    addToLike(id: ID!): Album!
    removeFromLike(id: ID!): Album!
    addAlbum(input: AddAlbum): Album!
    deleteAlbum(id: ID!): Boolean!
    updateAlbum(id: ID!, input: AddAlbum): Album!
  }
`;

export default typeDefs;
