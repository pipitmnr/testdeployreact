import createStore from "unistore";
import axios from "axios";

const baseUrl = "https://newsapi.org/v2/everything";
const apiKey = "448feafa267b4bf4babf102fe746d08b";

const initialState = {
    api_key: "",
    email: "",
    password: "",
    full_name: "",
    username: "",
    is_login: false,
    listListArticle: [],
    isLoading: true ,
    q: 'academy'
};

export const store = createStore(initialState);

export const actions = store => ({
    handleInputChange: async (state, event) => {
        let value = event.target.value
        await store.setState({ q: value });
        // const self = this;
        if (value.length > 2) {
            try {
                const response = await axios.get(
                    baseUrl + "?q=" + value + "&apiKey=" + apiKey
                );
                store.setState({listListArticle: response.data.articles, isLoading: false});
            } catch (error) {
                console.error(error);
            }
        };
    },
    categoryNews: async (state, event) => {
        // const self = this;
        await axios
            .get(`${baseUrl}?q=${event}&apiKey=448feafa267b4bf4babf102fe746d08b`)
            .then(function(response){
                store.setState({listListArticle: response.data.articles, isLoading: false});
            })
            .catch(function(error){
                store.setState({isLoading: false});
            });
    }
    // axiosCategory : async() => {
    //     const category = this.props.match.params.q;
    //     // const self = this;
    //     await axios
    //         .get(`${baseUrl}?q=${category}&apiKey=448feafa267b4bf4babf102fe746d08b`)
    //         .then(function(response){
    //             store.setState({listListArticle: response.data.articles, isLoading: false});
    //         })
    //         .catch(function(error){
    //             store.setState({isLoading: false});
    //         });
    // }    
});
