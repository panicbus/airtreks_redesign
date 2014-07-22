AirtreksRedesign::Application.routes.draw do
  
  resources :site
  resources :articles

  root :to => "site#index"  

  get "/" => "site#index"

  get "/articles" => "articles#index"
  get "/articles/one" => "articles#one"
  get "/articles/where_to_go" => "articles#where_to_go"

end
 
 
