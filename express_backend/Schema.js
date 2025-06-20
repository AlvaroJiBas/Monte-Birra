import { ObjectId } from 'mongodb';

export const typeDefs = /* GraphQL */ `
  type User {
    _id: ID!
    userName: String
    password: String
    email: String
    rutas: [Ruta]
  }
  type Ruta {
    _id : ID!
    nombre: String
    origen: String
    destino: String
    dificultad: String
    duracion: String
    distancia : Float
  }
  type Bar {
    _id :ID!
    nombre: String
    localidad: String
    direccion: String
    recomendaciones: [String]

  
  
  }


  type Query {
    User(id: ID!): User
    UserExiste(userName: String!, password:String!) : Boolean
    RutasUser(idUser : ID!):[Ruta]
    Rutas:[Ruta]
  }

  input UserInput {
    userName: String!
    precio: Float!
    cantidad: Int
  }

  type Mutation {
    registerUser(input: UserInput!): User!
  }
`;



export const resolvers = {
  Query: {
  
    Rutas: async (_parent, args, context) => {
      const db = context.db;
      return await db.collection('rutas').find().toArray();
    },
  },

};