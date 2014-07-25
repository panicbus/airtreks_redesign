AirtreksRedesign::Application.routes.draw do
  
  devise_for :users, path_names: {sign_in: "login", sign_out: "logout"}

  resources :site
  resources :articles

  root :to => "site#index"  

  get "/" => "site#index"

  get "/articles" => "articles#index"
  get "/articles/one" => "articles#one"
  get "/articles/where_to_go" => "articles#where_to_go"

end
 
 
