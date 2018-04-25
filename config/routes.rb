Rails.application.routes.draw do
  get 'profile', to: 'profile#index', as: :profile
  patch 'profile', to: 'profile#update'

  devise_for :users
  root 'hello#index'
end
