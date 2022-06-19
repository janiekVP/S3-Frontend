import axios from "axios";


const baseURL = 'http://localhost:8080/api/collections';


class CollectionSevice {

    GetAllCollections(){
        try{
            var data = axios.get(baseURL)
            return data;
        }
        catch{
            console.log('failed to get data');
            return null;
        }
    }

    GetById(id){
        try{
            return axios.get('http://localhost:8080/api/collections/'+ (id));
        }
        catch{
            console.log('failed to get data');
            return null;
        }
    }

    Delete(id){
        axios.delete('http://localhost:8080/api/collections/'+ (id))
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
          } else if (error.request) {
            console.error(error.request);
          } else {
            console.error("Error", error.message);
          }
        });
    }

    Update(collection){
        axios.put('http://localhost:8080/api/collections/'+ (collection.id), collection)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            if (error.response) {
              console.error(error.response.data);
              console.error(error.response.status);
              console.error(error.response.headers);
            } else if (error.request) {
              console.error(error.request);
            } else {
              console.error("Error", error.message);
            }
          });
    }

    CreateCollection(collection){
        axios.post(baseURL, {
            userId: collection.userId
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export default new CollectionSevice();