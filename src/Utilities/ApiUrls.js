// base url of api. used in api layer as default url for api calls
const baseUrl = `${window.location.protocol}//hn.algolia.com/api/v1`;

// end point for the api
const ApiUrls = {
    search : `/search`,
}

export {
    ApiUrls,
    baseUrl
}