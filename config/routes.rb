AirtreksRedesign::Application.routes.draw do
  
  resources :site

  root :to => "site#index"  

  get "/index", to: "site#index"

end
