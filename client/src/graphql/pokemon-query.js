import { gql } from 'apollo-boost';

export const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
        results {
            url
            name
            image
        }
        }
    }
`

export const GET_POKEMON = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
        id
        name
        height
        weight
        abilities {
            ability {
            name
            }
        }
        moves {
            move {
            name
            }
        }
        types {
            type {
            name
            }
        }
        message
        status
        }
    }
`