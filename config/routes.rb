Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:index, :create, :destroy, :update]
  end

  root "static_pages#root"

  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
 
