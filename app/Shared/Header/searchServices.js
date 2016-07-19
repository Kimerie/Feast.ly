var results = ['hola', 'hello'];

angular.module('search.services', [])

.factory('Recipes', ['$http', '$q',function($http, $q){
  // var results;
  getRecipes = function(criteria) {
  return  $http({
        method: 'GET',
        url: 'https://api.yummly.com/v1/api/recipes?',
        params: criteria,
        headers: {'X-Yummly-App-ID':'2f7bad12','X-Yummly-App-Key': 'f8160837c1f14975a5f7b327310dc034'}
     }).success(function(res){
        results = res.matches;
        return res.data;
    }).error(function(){
        alert("error retrieving data");
    });
  };

  // getResults = function(){
  //   return results;
  // };

  return{
    getRecipes : getRecipes,
    results: results
  };
}]);
