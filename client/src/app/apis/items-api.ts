import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ItemModel } from '../models/item';

export class ItemsApi {
  constructor(private apollo: Apollo) {
  }

  create(item: ItemModel) {
    const mutation = gql`
      mutation addItem(
        $category: String,
        $brand: String,
        $description: String
      ) {
        addItem(
          input: {
            category: $category,
            brand: $brand,
            description: $description
          }
        ) {
          id
          created
          updated
          category
          brand
          description
          sold
        }
      }
    `;

    return this.apollo
      .mutate({
        variables: {
          category: item.category,
          brand: item.brand,
          description: item.description
        },
        mutation
      }).toPromise();
  }

  get(id: string) {
    const query = gql`
      query getItem (
        $id: ID!
      ) {
        item(
          id: $id
        ) {
          id
          created
          updated
          category
          brand
          description
          sold
        }
      }
    `;

    return this.apollo
      .query({
        variables: {
          id
        },
        query
      }).toPromise();
  }

  list(sold: boolean) {
    const query = gql`
      query listItems(
        $sold: Boolean
      ) {
        items(
          sold: $sold
        ) {
          total
          data {
            id
            created
            updated
            category
            brand
            description
            sold
          }
        }
      }
    `;


    return this.apollo
      .query({
        variables: {
          sold
        },
        query
      }).toPromise();
  }

  listAll() {
    const query = gql`
      query allItems {
        allItems {
          total
          data {
              id
              created
              updated
              category
              brand
              description
              sold
          }
        }
      }
    `;


    return this.apollo
      .query({
        query
      }).toPromise();
  }

  update(item: ItemModel) {
    const mutation = gql`
      mutation updateItem(
        $id: ID,
        $category: String,
        $brand: String,
        $description: String
        $sold: Boolean
      ) {
        updateItem(
          input: {
            id: $id,
            category: $category,
            brand: $brand,
            description: $description
            sold: $sold
          }
        ) {
          id
          created
          updated
          category
          brand
          description
          sold
        }
      }
    `;

    return this.apollo
      .mutate({
        variables: {
          id: item.id,
          category: item.category,
          brand: item.brand,
          description: item.description,
          sold: item.sold
        },
        mutation
      }).toPromise();
  }
}
